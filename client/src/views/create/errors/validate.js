const validate = (form) => {
    const errors = {};
    //const regexURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    const regexNumber = /^[0-9]*(\.?)[ 0-9]+$/;


    if(!form.name) {errors.name = "Nombre vacio"};

    if(!form.image) {errors.image = "Imagen vaciaa"};

    if(!form.hp) {errors.hp = "Campo hp vacio"};

    if (!regexNumber.test(form.hp)) { errors.hp = "Only numbers"};

    if(!form.attack) {errors.attack = "Campo attack vacio"};

    if(!form.defense) {errors.defense = "Campo defense vacio"};

    if(!form.specialattack) {errors.specialattack = "Campo specialattack vacio"};

    if(!form.specialdefense) {errors.specialdefense = "Campo specialdefense vacio"};

    if(!form.speed) {errors.speed = "Campo speed vacio"};

    if(!form.height) {errors.height = "Campo height vacio"};

    if(!form.weight) {errors.weight = "Campo weight vacio"};

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