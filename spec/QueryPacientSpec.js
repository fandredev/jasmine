describe(QueryPacient.name, () => {
  let pacient;

  beforeEach(() => {
    pacient = new PacientBuilder().constructor();
  });

  it("nao deve cobrar nada se for um retorno", () => {
    const queryPacient = new QueryPacient(pacient, [], true, true);

    expect(queryPacient.price()).toEqual(0);
  });

  it("deve cobrar 25 por cada procedimento comum", () => {
    const queryPacient = new QueryPacient(
      pacient,
      ["proc1", "proc2"],
      false,
      false
    );
    expect(queryPacient.price()).toEqual(50);
  });

  it("deve cobrar preço especifico dependendo do procedimento", () => {
    const queryPacient = new QueryPacient(
      pacient,
      ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"],
      false,
      false
    );

    expect(queryPacient.price()).toEqual(25 * 2 + 55 + 32);
  });

  it("deve garantir preço espeficico dependendo do procedimento comuns", () => {
    const fillArray = Array(6).fill("procedimento-comum");
    const queryPacient = new QueryPacient(pacient, fillArray, false, false);

    expect(queryPacient.price()).toEqual(150);
  });
  describe("Testes de consulta", () => {
    it("consulta com procedimentos comuns e consulta particular", () => {
      const queryPacient = new QueryPacient(
        pacient,
        ["procedimento-comum", "procedimento-comum"],
        true,
        false
      );

      // 25x2, 25x2
      const totalPrice = 25 * 4;

      expect(queryPacient.price()).toEqual(totalPrice);
    });

    it("consulta com procedimentos especiais e consulta particular", () => {
      const queryPacient = new QueryPacient(
        pacient,
        ["gesso", "raio-x"],
        true,
        false
      );
      const particularRaiox = 55 * 2;
      const particularGesso = 32 * 2;

      const totalPrice = particularGesso + particularRaiox;

      expect(queryPacient.price()).toEqual(totalPrice);
    });
  });
});
