describe('Agendamento',() => {
  let pacient
  let schedule

  
  beforeEach(() => {
    pacient = new PacientBuilder().constructor()
    schedule = new Schedulling()

  })
  it('deve agendar para 20 dias depois',() => {
    const consult = new QueryPacient(pacient, [], false, false, new Date(2014, 7, 1))
    const newSchedule = schedule.to(consult)


    expect(
      newSchedule.getDate().toString()
    ).toEqual(new Date(2014, 7, 21).toString())
  })

  it('deve pular fins de semana', () => {
    const consult = new QueryPacient(pacient, [], false, false, new Date(2014, 5, 30))
    const newSchedule = schedule.to(consult)


    expect(
      newSchedule.getDate().toString()
    ).toEqual(new Date(2014, 6, 21).toString())
  })
})