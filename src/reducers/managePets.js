export let state;


export function managePets(state = {pets: []}, action){
  if (action.type === 'ADD_PET') {
    return ([...state], {pets: [...state.pets, action.payload]});
  } else if (action.type === 'REMOVE_PET') {
    return ([...state], {pets: state.pets.filter( pet => { if (pet.id !== action.payload) { return pet} })});
  } else {
    return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  var pets = state.pets.map( pet => { return `<li>${pet.name}</li>`} ).join(" ")
  document.getElementById("container").innerHtml = `<ul>${pets}</ul>`
}
