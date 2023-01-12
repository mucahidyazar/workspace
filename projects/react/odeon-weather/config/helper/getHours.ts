const getDate = () => {
  const newDateHour = new Date().getHours()

  let hours = [
    '03:00',
    '06:00',
    '09:00',
    '12:00',
    '15:00',
    '18:00',
    '21:00',
    '24:00',
  ]

  if (newDateHour === 3 || newDateHour === 4 || newDateHour === 5) {
    hours = [
      '03:00',
      '06:00',
      '09:00',
      '12:00',
      '15:00',
      '18:00',
      '21:00',
      '24:00',
    ]
  } else if (newDateHour === 6 || newDateHour === 7 || newDateHour === 8) {
    hours = [
      '06:00',
      '09:00',
      '12:00',
      '15:00',
      '18:00',
      '21:00',
      '24:00',
      '03:00',
    ]
  } else if (newDateHour === 9 || newDateHour === 10 || newDateHour === 11) {
    hours = [
      '09:00',
      '12:00',
      '15:00',
      '18:00',
      '21:00',
      '24:00',
      '03:00',
      '06:00',
    ]
  } else if (newDateHour === 12 || newDateHour === 13 || newDateHour === 16) {
    hours = [
      '12:00',
      '15:00',
      '18:00',
      '21:00',
      '24:00',
      '03:00',
      '06:00',
      '09:00',
    ]
  } else if (newDateHour === 15 || newDateHour === 16 || newDateHour === 17) {
    hours = [
      '15:00',
      '18:00',
      '21:00',
      '24:00',
      '03:00',
      '06:00',
      '09:00',
      '12:00',
    ]
  } else if (newDateHour === 18 || newDateHour === 19 || newDateHour === 20) {
    hours = [
      '18:00',
      '21:00',
      '24:00',
      '03:00',
      '06:00',
      '09:00',
      '12:00',
      '15:00',
    ]
  } else if (newDateHour === 21 || newDateHour === 22 || newDateHour === 23) {
    hours = [
      '21:00',
      '24:00',
      '03:00',
      '06:00',
      '09:00',
      '12:00',
      '15:00',
      '18:00',
    ]
  }

  return hours
}

export { getDate }
