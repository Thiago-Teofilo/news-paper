function read_date(date) {
  let today = new Date(date)
  return today.toDateString()
}

export default read_date
