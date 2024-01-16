export function getItems(variableInLocal: string): string[] | null {
  const items = localStorage.getItem(variableInLocal)
  return items ? JSON.parse(items) : null
}

export function setItem(variableInLocal: string, item: string): void {
  localStorage.setItem(variableInLocal, item)
}
