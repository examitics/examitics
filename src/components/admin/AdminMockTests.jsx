import React, { useEffect, useMemo, useState } from "react";
import { FiRefreshCw, FiSearch, FiPlus, FiEdit2, FiX } from "react-icons/fi";
import { supabase } from "../../lib/supabase";
import "../../styles/Admin.css";

function AdminMockTests() {
  // ==================================================
  // GENERAL STATES
  // ==================================================

  const [questions, setQuestions] = useState([]);
  const [sets, setSets] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [selectedSet, setSelectedSet] = useState(null);

  // ==================================================
  // SET FORM STATES
  // ==================================================

  const [showSetForm, setShowSetForm] = useState(false);
  const [savingSet, setSavingSet] = useState(false);
  const [setFormError, setSetFormError] = useState("");

  const [setForm, setSetForm] = useState({
    exam: "",
    category: "",
    setId: "",
    title: "",
    description: "",
  });

  // ==================================================
  // QUESTION FORM STATES
  // ==================================================

  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const [savingQuestion, setSavingQuestion] = useState(false);

  //   const [formError, setFormError] = useState("");

  const [editingQuestion, setEditingQuestion] = useState(null);

  const [questionForm, setQuestionForm] = useState({
    questionNumber: "",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    image: "",
  });

  // ==================================================
  // FETCH MOCK SETS
  // ==================================================

  const fetchSets = async () => {
    const { data, error: fetchError } = await supabase.rpc(
      "admin_get_mock_sets",
    );

    if (fetchError) {
      console.error("Error fetching mock sets:", fetchError);

      throw new Error(fetchError.message || "Failed to load mock test sets.");
    }

    setSets(data || []);
  };

  // ==================================================
  // FETCH PREMIUM QUESTIONS
  // ==================================================

  const fetchQuestions = async () => {
    const { data, error: fetchError } = await supabase.rpc(
      "admin_get_mock_questions",
    );

    if (fetchError) {
      console.error("Error fetching mock questions:", fetchError);

      throw new Error(fetchError.message || "Failed to load mock questions.");
    }

    setQuestions(data || []);
  };

  // ==================================================
  // FETCH ALL DATA
  // ==================================================

  const fetchData = async (showRefreshing = false) => {
    if (showRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    setError("");

    try {
      await Promise.all([fetchSets(), fetchQuestions()]);
    } catch (err) {
      console.error("Error loading mock test data:", err);

      setError(err?.message || "Failed to load mock test data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // ==================================================
  // INITIAL LOAD
  // ==================================================

  useEffect(() => {
    fetchData();
  }, []);

  // ==================================================
  // COMBINE SET DATA WITH QUESTION DATA
  // ==================================================

  const setsWithQuestions = useMemo(() => {
    return sets.map((set) => {
      const setQuestions = questions.filter(
        (question) =>
          question.exam === set.exam &&
          question.category === set.category &&
          question.set_id === set.set_id,
      );

      return {
        ...set,
        key: `${set.exam}__${set.category}__${set.set_id}`,
        questions: setQuestions,
      };
    });
  }, [sets, questions]);

  // ==================================================
  // SEARCH SETS
  // ==================================================

  const filteredSets = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return setsWithQuestions;
    }

    return setsWithQuestions.filter((set) =>
      `${set.exam} ${set.category} ${set.set_id} ${set.title} ${set.description || ""}`
        .toLowerCase()
        .includes(value),
    );
  }, [setsWithQuestions, search]);

  // ==================================================
  // SELECTED SET QUESTIONS
  // ==================================================

  const selectedQuestions = useMemo(() => {
    if (!selectedSet) {
      return [];
    }

    return questions
      .filter(
        (question) =>
          question.exam === selectedSet.exam &&
          question.category === selectedSet.category &&
          question.set_id === selectedSet.set_id,
      )
      .sort((a, b) => (a.question_number || 0) - (b.question_number || 0));
  }, [questions, selectedSet]);

  // ==================================================
  // STATISTICS
  // ==================================================

  const totalPremiumQuestions = questions.length;

  const totalPremiumSets = sets.length;

  const totalExams = new Set(sets.map((set) => set.exam)).size;

  const totalCategories = new Set(sets.map((set) => set.category)).size;

  // ==================================================
  // HELPER
  // ==================================================

  const formatName = (value) => {
    if (!value) {
      return "—";
    }

    return value
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // ==================================================
  // SELECT SET
  // ==================================================

  const handleSelectSet = (set) => {
    setSelectedSet(set);

    setShowQuestionForm(false);
    setEditingQuestion(null);
    setFormError("");
  };

  // ==================================================
  // SET FORM CHANGE
  // ==================================================

  const handleSetFormChange = (event) => {
    const { name, value } = event.target;

    setSetForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==================================================
  // OPEN CREATE SET FORM
  // ==================================================

  const openCreateSetForm = () => {
    setSetForm({
      exam: "",
      category: "",
      setId: "",
      title: "",
      description: "",
    });

    setSetFormError("");
    setShowSetForm(true);
  };

  // ==================================================
  // CLOSE CREATE SET FORM
  // ==================================================

  const closeCreateSetForm = () => {
    if (savingSet) {
      return;
    }

    setShowSetForm(false);
    setSetFormError("");
  };

  // ==================================================
  // CREATE NEW SET
  // ==================================================

  const handleCreateSet = async (event) => {
    event.preventDefault();

    setSavingSet(true);
    setSetFormError("");

    try {
      const exam = setForm.exam.trim();
      const category = setForm.category.trim();
      const setId = setForm.setId.trim();
      const title = setForm.title.trim();
      const description = setForm.description.trim();

      // ----------------------------------------------
      // VALIDATION
      // ----------------------------------------------

      if (!exam) {
        throw new Error("Exam is required.");
      }

      if (!category) {
        throw new Error("Category is required.");
      }

      if (!setId) {
        throw new Error("Set ID is required.");
      }

      if (!title) {
        throw new Error("Set title is required.");
      }

      // ----------------------------------------------
      // CREATE SET
      // ----------------------------------------------

      const { data, error: createError } = await supabase.rpc(
        "admin_create_mock_set",
        {
          target_exam: exam,
          target_category: category,
          target_set_id: setId,
          target_title: title,
          target_description: description || null,
        },
      );

      if (createError) {
        console.error("Error creating mock set:", createError);

        throw new Error(
          createError.message || "Failed to create mock test set.",
        );
      }

      // ----------------------------------------------
      // REFRESH DATA
      // ----------------------------------------------

      await fetchData(true);

      // ----------------------------------------------
      // SELECT NEW SET
      // ----------------------------------------------

      if (data) {
        const newSet = {
          ...data,
          key: `${data.exam}__${data.category}__${data.set_id}`,
          questions: [],
          question_count: 0,
        };

        setSelectedSet(newSet);
      }

      // ----------------------------------------------
      // CLOSE FORM
      // ----------------------------------------------

      setShowSetForm(false);

      setSetForm({
        exam: "",
        category: "",
        setId: "",
        title: "",
        description: "",
      });
    } catch (err) {
      console.error("Error creating mock set:", err);

      setSetFormError(err?.message || "Failed to create mock test set.");
    } finally {
      setSavingSet(false);
    }
  };

  // ==================================================
  // QUESTION FORM CHANGE
  // ==================================================

  const handleQuestionFormChange = (event) => {
    const { name, value } = event.target;

    setQuestionForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==================================================
  // OPEN ADD QUESTION FORM
  // ==================================================

  const openAddQuestionForm = () => {
    if (!selectedSet) {
      return;
    }

    setEditingQuestion(null);

    setQuestionForm({
      questionNumber: selectedQuestions.length + 1,
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
      image: "",
    });

    setFormError("");
    setShowQuestionForm(true);
  };

  // ==================================================
  // OPEN EDIT QUESTION FORM
  // ==================================================

  const openEditQuestionForm = (question) => {
    const optionA = question.options?.A || "";

    const optionB = question.options?.B || "";

    const optionC = question.options?.C || "";

    const optionD = question.options?.D || "";

    setEditingQuestion(question);

    setQuestionForm({
      questionNumber: question.question_number || "",
      question: question.question || "",
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer: question.correct_answer || "",
      image: question.image || "",
    });

    setFormError("");
    setShowQuestionForm(true);
  };

  // ==================================================
  // CLOSE QUESTION FORM
  // ==================================================

  const closeQuestionForm = () => {
    if (savingQuestion) {
      return;
    }

    setShowQuestionForm(false);
    setFormError("");
    setEditingQuestion(null);
  };

  // ==================================================
  // RESET QUESTION FORM
  // ==================================================

  const resetQuestionForm = () => {
    setQuestionForm({
      questionNumber: "",
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
      image: "",
    });
  };

  // ==================================================
  // SAVE QUESTION
  // ADD OR EDIT
  // ==================================================

  const handleSaveQuestion = async (event) => {
    event.preventDefault();

    if (!selectedSet) {
      setFormError("Please select a mock test set first.");
      return;
    }

    setSavingQuestion(true);
    setFormError("");

    try {
      // ----------------------------------------------
      // SET INFORMATION COMES FROM SELECTED SET
      // ----------------------------------------------

      const exam = selectedSet.exam.trim();

      const category = selectedSet.category.trim();

      const setId = selectedSet.set_id.trim();

      // ----------------------------------------------
      // QUESTION DATA
      // ----------------------------------------------

      const question = questionForm.question.trim();

      const questionNumber = Number(questionForm.questionNumber);

      const options = {
        A: questionForm.optionA.trim(),
        B: questionForm.optionB.trim(),
        C: questionForm.optionC.trim(),
        D: questionForm.optionD.trim(),
      };

      const correctAnswer = questionForm.correctAnswer.trim();

      // ----------------------------------------------
      // VALIDATION
      // ----------------------------------------------

      if (!questionNumber) {
        throw new Error("Question number is required.");
      }

      if (questionNumber < 1 || !Number.isInteger(questionNumber)) {
        throw new Error("Question number must be a valid positive number.");
      }

      if (!question) {
        throw new Error("Question text is required.");
      }

      if (!options.A || !options.B || !options.C || !options.D) {
        throw new Error("Please enter all four options.");
      }

      if (!correctAnswer) {
        throw new Error("Please select a correct answer.");
      }

      // ----------------------------------------------
      // CORRECT ANSWER MUST MATCH OPTION TEXT
      // ----------------------------------------------

      const optionValues = [options.A, options.B, options.C, options.D];

      if (!optionValues.includes(correctAnswer)) {
        throw new Error("Correct answer must match one of the four options.");
      }

      // ----------------------------------------------
      // EDIT EXISTING QUESTION
      // ----------------------------------------------

      if (editingQuestion) {
        const { error: updateError } = await supabase.rpc(
          "admin_update_mock_question",
          {
            question_id: editingQuestion.id,

            target_exam: exam,

            target_category: category,

            target_set_id: setId,

            target_question_number: questionNumber,

            target_question: question,

            target_options: options,

            target_correct_answer: correctAnswer,

            target_image: questionForm.image.trim() || null,
          },
        );

        if (updateError) {
          console.error("Error updating mock question:", updateError);

          throw new Error(
            updateError.message || "Failed to update the question.",
          );
        }
      }

      // ----------------------------------------------
      // ADD NEW QUESTION
      // ----------------------------------------------
      else {
        const { error: insertError } = await supabase.rpc(
          "admin_create_mock_question",
          {
            target_exam: exam,

            target_category: category,

            target_set_id: setId,

            target_question_number: questionNumber,

            target_question: question,

            target_options: options,

            target_correct_answer: correctAnswer,

            target_image: questionForm.image.trim() || null,
          },
        );

        if (insertError) {
          console.error("Error creating mock question:", insertError);

          throw new Error(
            insertError.message || "Failed to create the question.",
          );
        }
      }

      // ----------------------------------------------
      // REFRESH QUESTIONS + SETS
      // ----------------------------------------------

      await fetchData(true);

      // ----------------------------------------------
      // KEEP CURRENT SET SELECTED
      // ----------------------------------------------

      const refreshedSet = setsWithQuestions.find(
        (set) =>
          set.exam === exam &&
          set.category === category &&
          set.set_id === setId,
      );

      if (refreshedSet) {
        setSelectedSet(refreshedSet);
      } else {
        setSelectedSet({
          ...selectedSet,
          exam,
          category,
          set_id: setId,
        });
      }

      // ----------------------------------------------
      // CLOSE FORM
      // ----------------------------------------------

      resetQuestionForm();

      setEditingQuestion(null);
      setShowQuestionForm(false);
    } catch (err) {
      console.error(
        editingQuestion
          ? "Error updating mock question:"
          : "Error creating mock question:",
        err,
      );

      setFormError(
        err?.message ||
          (editingQuestion
            ? "Failed to update the question."
            : "Failed to create the question."),
      );
    } finally {
      setSavingQuestion(false);
    }
  };

  // ==================================================
  // LOADING
  // ==================================================

  if (loading) {
    return (
      <div className="admin-section">
        <div className="admin-loading">Loading premium mock tests...</div>
      </div>
    );
  }

  // ==================================================
  // UI
  // ==================================================

  return (
    <div className="admin-section admin-mock-tests">
      {/* ==================================================
          HEADER
          ================================================== */}

      <div className="admin-section-header">
        <div>
          <h2>Premium Mock Tests</h2>

          <p>
            Create and manage premium mock test sets and questions stored in
            Supabase.
          </p>
        </div>

        <div className="admin-mock-header-actions">
          <button
            type="button"
            className="admin-btn admin-btn-primary"
            onClick={openCreateSetForm}
          >
            + Create New Set
          </button>

          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={() => fetchData(true)}
            disabled={refreshing}
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* ==================================================
          GENERAL ERROR
          ================================================== */}

      {error && <div className="admin-alert admin-alert-error">{error}</div>}

      {/* ==================================================
          CREATE SET FORM
          ================================================== */}

      {showSetForm && (
        <div className="admin-card admin-mock-set-form-card">
          <div className="admin-mock-form-header">
            <div>
              <h3>Create New Premium Set</h3>

              <p>
                Create the mock test set first. Questions can then be added to
                this set.
              </p>
            </div>

            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={closeCreateSetForm}
              disabled={savingSet}
            >
              Cancel
            </button>
          </div>

          {setFormError && (
            <div className="admin-alert admin-alert-error">{setFormError}</div>
          )}

          <form className="admin-question-form" onSubmit={handleCreateSet}>
            {/* ==========================================
                EXAM / CATEGORY / SET ID
                ========================================== */}

            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label htmlFor="set-exam">Exam</label>

                <input
                  id="set-exam"
                  name="exam"
                  type="text"
                  value={setForm.exam}
                  onChange={handleSetFormChange}
                  placeholder="e.g. pma-lc"
                  required
                />

                <small>
                  Use the same exam identifier used by your mock-test system.
                </small>
              </div>

              <div className="admin-form-group">
                <label htmlFor="set-category">Category</label>

                <input
                  id="set-category"
                  name="category"
                  type="text"
                  value={setForm.category}
                  onChange={handleSetFormChange}
                  placeholder="e.g. academic"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="set-id">Set ID</label>

                <input
                  id="set-id"
                  name="setId"
                  type="text"
                  value={setForm.setId}
                  onChange={handleSetFormChange}
                  placeholder="e.g. set3"
                  required
                />

                <small>Example: set1, set2, set3.</small>
              </div>
            </div>

            {/* ==========================================
                TITLE
                ========================================== */}

            <div className="admin-form-group">
              <label htmlFor="set-title">Set Title</label>

              <input
                id="set-title"
                name="title"
                type="text"
                value={setForm.title}
                onChange={handleSetFormChange}
                placeholder="e.g. PMA-LC Academic Mock Test 3"
                required
              />
            </div>

            {/* ==========================================
                DESCRIPTION
                ========================================== */}

            <div className="admin-form-group">
              <label htmlFor="set-description">
                Description
                <span className="admin-label-optional">Optional</span>
              </label>

              <textarea
                id="set-description"
                name="description"
                value={setForm.description}
                onChange={handleSetFormChange}
                placeholder="Enter a short description for this mock test..."
                rows="3"
              />
            </div>

            {/* ==========================================
                FORM ACTIONS
                ========================================== */}

            <div className="admin-question-form-actions">
              <button
                type="button"
                className="admin-btn admin-btn-secondary"
                onClick={closeCreateSetForm}
                disabled={savingSet}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={savingSet}
              >
                {savingSet ? "Creating Set..." : "Create Premium Set"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ==================================================
          STATS
          ================================================== */}

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="admin-stat-label">Premium Questions</span>

          <strong className="admin-stat-value">{totalPremiumQuestions}</strong>
        </div>

        <div className="admin-stat-card">
          <span className="admin-stat-label">Premium Sets</span>

          <strong className="admin-stat-value">{totalPremiumSets}</strong>
        </div>

        <div className="admin-stat-card">
          <span className="admin-stat-label">Exams</span>

          <strong className="admin-stat-value">{totalExams}</strong>
        </div>

        <div className="admin-stat-card">
          <span className="admin-stat-label">Categories</span>

          <strong className="admin-stat-value">{totalCategories}</strong>
        </div>
      </div>

      {/* ==================================================
          SEARCH
          ================================================== */}
      {/* 
      <div className="admin-card admin-mock-search-card">

        <div className="admin-search-wrapper">

          <input
            type="text"
            className="admin-search-input"
            placeholder="Search exam, category, set or title..."
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />

        </div>

      </div> */}

      <div className="admin-table-toolbar">
        <div className="admin-search-box">
          <FiSearch />

          <input
            type="text"
            placeholder="Search exam, category, set or title..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      {/* ==================================================
          MAIN LAYOUT
          ================================================== */}

      <div className="admin-mock-layout">
        {/* ==================================================
            SET LIST
            ================================================== */}

        <div className="admin-card admin-mock-sets-card">
          <div className="admin-card-header">
            <div>
              <h3>Premium Sets</h3>

              <span>
                {filteredSets.length} set
                {filteredSets.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {filteredSets.length === 0 ? (
            <div className="admin-empty-state">
              <div className="admin-empty-icon">📚</div>

              <h4>No premium sets found</h4>

              <p>Create your first premium mock test set.</p>

              <button
                type="button"
                className="admin-btn admin-btn-primary"
                onClick={openCreateSetForm}
              >
                + Create New Set
              </button>
            </div>
          ) : (
            <div className="admin-mock-set-list">
              {filteredSets.map((set) => {
                const isSelected = selectedSet?.key === set.key;

                return (
                  <button
                    key={set.key}
                    type="button"
                    className={`admin-mock-set-item ${
                      isSelected ? "active" : ""
                    }`}
                    onClick={() => handleSelectSet(set)}
                  >
                    <div className="admin-mock-set-info">
                      <strong>{formatName(set.exam)}</strong>

                      <span>{formatName(set.category)}</span>

                      <small>{set.title}</small>
                    </div>

                    <div className="admin-mock-set-meta">
                      <span className="admin-mock-set-name">
                        {formatName(set.set_id)}
                      </span>

                      <span className="admin-mock-question-count">
                        {set.questions?.length || 0} Q
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ==================================================
            QUESTION AREA
            ================================================== */}

        <div className="admin-card admin-mock-questions-card">
          {!selectedSet ? (
            <div className="admin-empty-state admin-mock-select-state">
              <div className="admin-empty-icon">📝</div>

              <h3>Select a Premium Set</h3>

              <p>
                Select a mock test set from the left to view and manage its
                questions.
              </p>
            </div>
          ) : (
            <>
              {/* ==========================================
                  QUESTION HEADER
                  ========================================== */}

              <div className="admin-card-header admin-mock-question-header">
                <div>
                  <span className="admin-mock-breadcrumb">
                    {formatName(selectedSet.exam)}
                    {" / "}
                    {formatName(selectedSet.category)}
                  </span>

                  <h3>{selectedSet.title || formatName(selectedSet.set_id)}</h3>

                  <span>
                    {selectedQuestions.length} premium question
                    {selectedQuestions.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="admin-mock-question-actions">
                  <button
                    type="button"
                    className="admin-btn admin-btn-primary"
                    onClick={openAddQuestionForm}
                    disabled={savingQuestion}
                  >
                    + Add Question
                  </button>

                  <span className="admin-badge admin-badge-premium">
                    Premium
                  </span>
                </div>
              </div>

              {/* ==========================================
                  SET DESCRIPTION
                  ========================================== */}

              {selectedSet.description && (
                <div className="admin-mock-set-description">
                  {selectedSet.description}
                </div>
              )}

              {/* ==========================================
                  ADD / EDIT QUESTION FORM
                  ========================================== */}

              {showQuestionForm && (
                <div className="admin-mock-question-form">
                  <div className="admin-mock-form-header">
                    <div>
                      <h3>
                        {editingQuestion
                          ? "Edit Premium Question"
                          : "Add Premium Question"}
                      </h3>

                      <p>
                        {editingQuestion
                          ? "Update the selected question."
                          : "Add a new question to this mock test."}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="admin-btn admin-btn-secondary"
                      onClick={closeQuestionForm}
                      disabled={savingQuestion}
                    >
                      Cancel
                    </button>
                  </div>

                  {formError && (
                    <div className="admin-alert admin-alert-error">
                      {formError}
                    </div>
                  )}

                  {/* ========================================
                      SELECTED SET INFORMATION
                      ======================================== */}

                  <div className="admin-mock-selected-set-info">
                    <div>
                      <span>Exam</span>

                      <strong>{formatName(selectedSet.exam)}</strong>
                    </div>

                    <div>
                      <span>Category</span>

                      <strong>{formatName(selectedSet.category)}</strong>
                    </div>

                    <div>
                      <span>Set</span>

                      <strong>{formatName(selectedSet.set_id)}</strong>
                    </div>
                  </div>

                  <form
                    className="admin-question-form"
                    onSubmit={handleSaveQuestion}
                  >
                    {/* ======================================
                        QUESTION NUMBER
                        ====================================== */}

                    <div className="admin-form-group">
                      <label htmlFor="question-number">Question Number</label>

                      <input
                        id="question-number"
                        name="questionNumber"
                        type="number"
                        min="1"
                        value={questionForm.questionNumber}
                        onChange={handleQuestionFormChange}
                        required
                      />
                    </div>

                    {/* ======================================
                        QUESTION
                        ====================================== */}

                    <div className="admin-form-group">
                      <label htmlFor="question-text">Question</label>

                      <textarea
                        id="question-text"
                        name="question"
                        value={questionForm.question}
                        onChange={handleQuestionFormChange}
                        placeholder="Enter the question..."
                        rows="4"
                        required
                      />
                    </div>

                    {/* ======================================
                        OPTIONS
                        ====================================== */}

                    <div className="admin-options-form">
                      <h4>Options</h4>

                      <div className="admin-form-grid">
                        <div className="admin-form-group">
                          <label htmlFor="option-a">Option A</label>

                          <input
                            id="option-a"
                            name="optionA"
                            type="text"
                            value={questionForm.optionA}
                            onChange={handleQuestionFormChange}
                            required
                          />
                        </div>

                        <div className="admin-form-group">
                          <label htmlFor="option-b">Option B</label>

                          <input
                            id="option-b"
                            name="optionB"
                            type="text"
                            value={questionForm.optionB}
                            onChange={handleQuestionFormChange}
                            required
                          />
                        </div>

                        <div className="admin-form-group">
                          <label htmlFor="option-c">Option C</label>

                          <input
                            id="option-c"
                            name="optionC"
                            type="text"
                            value={questionForm.optionC}
                            onChange={handleQuestionFormChange}
                            required
                          />
                        </div>

                        <div className="admin-form-group">
                          <label htmlFor="option-d">Option D</label>

                          <input
                            id="option-d"
                            name="optionD"
                            type="text"
                            value={questionForm.optionD}
                            onChange={handleQuestionFormChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* ======================================
                        CORRECT ANSWER
                        ====================================== */}

                    <div className="admin-form-group">
                      <label htmlFor="correct-answer">Correct Answer</label>

                      <select
                        id="correct-answer"
                        name="correctAnswer"
                        value={questionForm.correctAnswer}
                        onChange={handleQuestionFormChange}
                        required
                      >
                        <option value="">-- Select Correct Answer --</option>

                        {questionForm.optionA && (
                          <option value={questionForm.optionA}>
                            A — {questionForm.optionA}
                          </option>
                        )}

                        {questionForm.optionB && (
                          <option value={questionForm.optionB}>
                            B — {questionForm.optionB}
                          </option>
                        )}

                        {questionForm.optionC && (
                          <option value={questionForm.optionC}>
                            C — {questionForm.optionC}
                          </option>
                        )}

                        {questionForm.optionD && (
                          <option value={questionForm.optionD}>
                            D — {questionForm.optionD}
                          </option>
                        )}
                      </select>

                      <small>
                        The selected option's actual text will be stored as the
                        correct answer.
                      </small>
                    </div>

                    {/* ======================================
                        IMAGE
                        ====================================== */}

                    <div className="admin-form-group">
                      <label htmlFor="question-image">
                        Image URL
                        <span className="admin-label-optional">Optional</span>
                      </label>

                      <input
                        id="question-image"
                        name="image"
                        type="text"
                        value={questionForm.image}
                        onChange={handleQuestionFormChange}
                        placeholder="https://..."
                      />

                      <small>
                        Leave empty if the question does not require an image.
                      </small>
                    </div>

                    {/* ======================================
                        FORM ACTIONS
                        ====================================== */}

                    <div className="admin-question-form-actions">
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        onClick={closeQuestionForm}
                        disabled={savingQuestion}
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="admin-btn admin-btn-primary"
                        disabled={savingQuestion}
                      >
                        {savingQuestion
                          ? editingQuestion
                            ? "Updating Question..."
                            : "Adding Question..."
                          : editingQuestion
                            ? "Update Question"
                            : "Add Premium Question"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* ==========================================
                  QUESTIONS
                  ========================================== */}

              <div className="admin-mock-question-list">
                {selectedQuestions.length === 0 ? (
                  <div className="admin-empty-state">
                    <div className="admin-empty-icon">📝</div>

                    <h4>No questions in this set</h4>

                    <p>
                      This set has been created successfully. Add your first
                      premium question.
                    </p>

                    <button
                      type="button"
                      className="admin-btn admin-btn-primary"
                      onClick={openAddQuestionForm}
                    >
                      + Add First Question
                    </button>
                  </div>
                ) : (
                  selectedQuestions.map((question) => {
                    const options = question.options || {};

                    return (
                      <div
                        key={question.id}
                        className="admin-mock-question-item"
                      >
                        {/* QUESTION NUMBER */}

                        <div className="admin-mock-question-number">
                          {question.question_number}
                        </div>

                        {/* QUESTION CONTENT */}

                        <div className="admin-mock-question-content">
                          <div className="admin-mock-question-top">
                            <p className="admin-mock-question-text">
                              {question.question}
                            </p>

                            {/* EDIT BUTTON */}

                            <div className="admin-mock-question-actions">
                              <button
                                type="button"
                                className="admin-btn admin-btn-secondary"
                                onClick={() => openEditQuestionForm(question)}
                                disabled={savingQuestion}
                              >
                                Edit
                              </button>
                            </div>
                          </div>

                          {/* IMAGE */}

                          {question.image && (
                            <div className="admin-mock-question-image">
                              <img
                                src={question.image}
                                alt={`Question ${question.question_number}`}
                              />
                            </div>
                          )}

                          {/* OPTIONS */}

                          <div className="admin-mock-options">
                            {[
                              ["A", options.A],
                              ["B", options.B],
                              ["C", options.C],
                              ["D", options.D],
                            ].map(([key, value]) => {
                              const isCorrect =
                                question.correct_answer === value;

                              return (
                                <div
                                  key={key}
                                  className={`admin-mock-option ${
                                    isCorrect ? "correct" : ""
                                  }`}
                                >
                                  <span className="admin-mock-option-key">
                                    {key}
                                  </span>

                                  <span>{value}</span>

                                  {isCorrect && (
                                    <span className="admin-mock-correct-label">
                                      Correct
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* STORED ANSWER */}

                          <div className="admin-mock-answer-info">
                            <span>Correct Answer:</span>

                            <strong>{question.correct_answer}</strong>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminMockTests;
