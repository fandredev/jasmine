function PacientBuilder() {
  let name = 'Guilherme'
  let age = 28
  let weight = 72
  let height = 1.80


  const classPacientBuilder = {
    constructor: () => Pacient(name, age, weight, height),

    withAge: (value) => {
      age = value

      return this
    },
    withWeight: (value) => {
      weight = value

      return this
    }
  }

  return classPacientBuilder
}