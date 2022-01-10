describe(Pacient.name, () => {
  let pacient


  beforeEach(() => {
    pacient = new Pacient('Guilherme', 28, 72, 1.82)

  })
  it('deve calcular o imc',() => {

    const imcPacient = pacient.imc()

    expect(imcPacient).toEqual(72 / (1.82 * 1.82))
  })

  it('deve calcular a quantidade de batimentos por minuto de um ser humano', () => {
    const beatsPacient = pacient.beats()

    expect(beatsPacient).toEqual(28 * 365 * 24 * 60 * 80)
  })
})