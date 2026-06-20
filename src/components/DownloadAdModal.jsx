import "./DownloadAdModal.css";

const DownloadAdModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleContinue = () => {
    window.open(
      "https://www.effectivecpmnetwork.com/iiikcn40sy?key=62694b4e41a1a3c22f1b3bbb5189f72d",
      "_blank",
      "noopener,noreferrer",
    );

    onClose();
  };

  return (
    <div className="ad-modal-overlay">
      <div className="ad-modal">
        <h4>Download Done ✅</h4>

        <p>Your PDF is downloaded successfully.</p>
        <p>
          Click here to view a short ad and support EXAMITICS. After that, come
          back and continue your preparation journey.
        </p>

        <a className="ad-modal-btn" onClick={handleContinue}>
          Click here →
        </a>
      </div>
    </div>
  );
};

export default DownloadAdModal;
