function Pacient(name, age, weight, height) {
  const Pacient = {
    show: () => alert(`${name} tem a idade ${age}.`),
    
    beats: () => age * 365 * 24 * 60 * 80,
    
    imc: () => weight / (height * height)
  }
  return Pacient
}