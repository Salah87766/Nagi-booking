export async function bookTrip(data: {
  tripId: string
  seat: number
  name: string
  phone: string
  email: string
}) {
  const res = await fetch('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = await res.json()
  return result
}
