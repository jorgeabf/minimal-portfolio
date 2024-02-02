const CURRENT_DATE: string = new Date().toLocaleDateString('es-ES', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export { CURRENT_DATE }
