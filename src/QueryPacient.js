function QueryPacient(pacient, procedure, particular, is_return, date) {
  const query = {
    price: () => {
      if(is_return) return 0

      let priceFinal = 0

      procedure.forEach((proc) => {
        if('raio-x' === proc) priceFinal += 55;
        else if('gesso' === proc) priceFinal +=32;
        else priceFinal +=25
      })

      if(particular) priceFinal *= 2

      return priceFinal
    },

    getName: () => pacient,

    getProcedures: () => procedure,

    isParticular: () => particular,

    isReturn: () => is_return,

    getDate: () => date
  }
  return query
}