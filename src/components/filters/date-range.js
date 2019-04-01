import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'
import { changeDateRange } from '../../ac'
import { dateRangeSelector } from '../../selectors'

function DateRange({ range, changeDateRange }) {
  const { from, to } = range
  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={(day) => changeDateRange(DateUtils.addDayToRange(day, range))}
      />
      {selectedRange}
    </div>
  )
}

export default connect(
  (state) => ({
    range: dateRangeSelector(state)
  }),
  { changeDateRange }
)(DateRange)
