function Schedulling() {
  const clazz = {
    to: (schedule) => {
      let _1DayInMilliseconds = 1000 * 60 * 60 * 24
      let _20daysInMilliseconds = _1DayInMilliseconds * 20
      let newDate = new Date(schedule.getDate().getTime() + _20daysInMilliseconds)

      while(newDate.getDay() === 0 || newDate.getDay() === 6) newDate = new Date(newDate.getTime() + _1DayInMilliseconds)
      const newSchedule = new QueryPacient(
        schedule.getName(),
        schedule.getProcedures(),
        schedule.isParticular(),
        true,
        newDate
      );

      return newSchedule
    },
  };

  return clazz
}
