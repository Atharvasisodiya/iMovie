const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const SEATS_PER_ROW = 12
const AISLE_AFTER = 4

export function buildSeatLayout(unavailableSeats) {
  return ROWS.flatMap((row) =>
    Array.from({ length: SEATS_PER_ROW }, (_, index) => {
      const seat = `${row}${index + 1}`
      return {
        id: seat,
        row,
        number: index + 1,
        aisleAfter: index + 1 === AISLE_AFTER || index + 1 === SEATS_PER_ROW - AISLE_AFTER,
        unavailable: unavailableSeats.includes(seat),
        premium: ['A', 'B', 'C'].includes(row),
      }
    }),
  )
}

function SeatMap({ seats, selectedSeats, onToggle }) {
  const grouped = ROWS.map((row) => seats.filter((seat) => seat.row === row))

  return (
    <div className="seat-map">
      <div className="screen">SCREEN</div>
      {grouped.map((rowSeats) => (
        <div className="seat-row" key={rowSeats[0].row}>
          <span className="seat-row__label">{rowSeats[0].row}</span>
          <div className="seat-row__seats">
            {rowSeats.map((seat) => {
              const selected = selectedSeats.includes(seat.id)
              const className = [
                'seat',
                seat.premium ? 'seat--premium' : '',
                seat.unavailable ? 'seat--unavailable' : '',
                selected ? 'seat--selected' : '',
                seat.aisleAfter ? 'seat--aisle' : '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <button
                  key={seat.id}
                  type="button"
                  className={className}
                  disabled={seat.unavailable}
                  onClick={() => onToggle(seat.id)}
                  aria-label={`Seat ${seat.id}`}
                >
                  {seat.number}
                </button>
              )
            })}
          </div>
        </div>
      ))}
      <div className="seat-legend">
        <span>
          <i className="seat seat--swatch" /> Available
        </span>
        <span>
          <i className="seat seat--swatch seat--selected" /> Selected
        </span>
        <span>
          <i className="seat seat--swatch seat--unavailable" /> Unavailable
        </span>
        <span>
          <i className="seat seat--swatch seat--premium" /> Premium
        </span>
      </div>
    </div>
  )
}

export default SeatMap
