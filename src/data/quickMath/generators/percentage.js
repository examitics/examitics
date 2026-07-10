export function generatePercentage(level = "Easy") {

  let percentages = [10,20,25,50];
  let value = 100;

  if(level==="Medium"){

      percentages=[5,10,12,15,20,25,40];

      value=500;

  }

  if(level==="Hard"){

      percentages=[8,12,18,22,35,45];

      value=1000;

  }

  const percent =
    percentages[Math.floor(Math.random()*percentages.length)];

  const number =
    (Math.floor(Math.random()*9)+2)*value;

  return{

      question:`${percent}% of ${number}`,

      answer:(percent/100)*number,

  }

}