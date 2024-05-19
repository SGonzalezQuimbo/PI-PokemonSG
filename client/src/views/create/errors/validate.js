const validate = (form) => {
    const errors = {};
    //const regexURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    const regexNumber = /^[0-9]*(\.?)[ 0-9]+$/;
    const regexLetter = /^[A-Z]+$/i;
    const longName = 15;


    if(!form.name) {
      errors.name = "Include a name"
    } else if (!regexLetter.test(form.name)) {
      errors.name = "Only letters"
    } else if (form.name.length > longName) {
      errors.name = `Maximum ${longName} letters`
    };

    if(!form.image) {errors.image = "Include a image or a description"};

    if(!form.hp) {
      errors.hp = "Include value"
    } else if (!regexNumber.test(form.hp)) { 
      errors.hp = "Only numbers"};

    if(!form.attack) {
      errors.attack = "Include value"
    } else if (!regexNumber.test(form.attack)) { 
      errors.attack = "Only numbers"};

    if(!form.defense) {
      errors.defense = "Include value"
    } else if (!regexNumber.test(form.defense)) { 
      errors.defense = "Only numbers"};

    if(!form.specialattack) {
      errors.specialattack = "Include value"
    } else if (!regexNumber.test(form.specialattack)) { 
      errors.specialattack = "Only numbers"};

    if(!form.specialdefense) {
      errors.specialdefense = "Include value"
    } else if (!regexNumber.test(form.specialdefense)) { 
      errors.specialdefense = "Only numbers"};

    if(!form.speed) {
      errors.speed = "Include value"
    } else if (!regexNumber.test(form.speed)) { 
      errors.speed = "Only numbers"};

    if(!form.height) {
      errors.height = "Include value"
    } else if (!regexNumber.test(form.height)) { 
      errors.height = "Only numbers"};

    if(!form.weight) {
      errors.weight = "Include value"
    } else if (!regexNumber.test(form.weight)) { 
      errors.weight = "Only numbers"};

    return errors;
  };

  export default validate;
  
//     if (state.name.length < 5) {
//       errors.name = 'The name must be five characters long';
//     }
  
//     if (state.name.length > 20) {
//       errors.name = 'The name must be less than twenty characters long';
//     }
  
//     if (!regexNumber.test(state.age)) {
//       errors.age = "Only numbers";
//     }
  
//     if (state.age.length < 2) {
//       errors.age = 'The age must be two digits';
//     }
  
//     if (state.summary.length < 50) {
//       errors.summary = 'The summary must be fifty characters long';
//     }
  
//     if (state.movies.length < 5) {
//       errors.movies = 'The movies must be five characters long';
//     }
  
//     if (!regexURL.test(state.image)) {
//       errors.image = 'The image must be a URL';
//     }
  
//     return errors;
//   };