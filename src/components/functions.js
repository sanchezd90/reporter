const setIndex = (norms,education,age,sex) => {
    let nseIndex = null;
    let ageIndex = null;
    let genderIndex = null;
    for (let i = 0; i < norms.nse.length; i++) {
      if (
        norms.nse[i][0] <= education &&
        education <= norms.nse[i][1]
      ) {
        nseIndex = i;
      }
    }    
    for (let i = 0; i < norms.edad.length; i++) {
      console.log(norms.edad[i]);
      if (
        norms.edad[i][0] <= age &&
        age <= norms.edad[i][1]
      ) {
        ageIndex = i;
      }
    }    
    sexIndex = sex;
    let superposicion = false;
    if (norms.tipo === "superposicion") {
      superposicion = true;
    }
    return [nseIndex, ageIndex, sexIndex, superposicion];
  };


  const getTestNorms = (education, age, sex, availableNorms, source, score) => {
    const [selectedNorm] = availableNorms.filter((norm) => {
      return norm.norm_id === source;
    });
    let [nseIndex, ageIndex, genderIndex] = setIndex(selectedNorm,education,age,sex);
    if (source.sex.length===0) {
      genderIndex = 0;
    }    
    const norms = selectedNorm["normas"][score] || null;
    let mean = null;
    let standarDeviation = null;
    if (norms) {
      mean = norms[nseIndex][genderIndex][ageIndex][0];
      standarDeviation = norms[nseIndex][genderIndex][ageIndex][1];
    }    
    return [mean, standarDeviation];
  };

  const getZScore = (norms, score) => {     
    if (superposicion) {
      return (
        Math.round(
          ((parseFloat(score) - norms[0][difficulty ? 1 : 0]) /
            norms[1][difficulty ? 1 : 0]) *
            100
        ) / 100
      );
    }
    return Math.round(((parseFloat(score) - norms[0]) / norms[1]) * 100) / 100;
  };

  export default {setIndex, getTestNorms, getZScore}