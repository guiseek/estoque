export function getFormData<T extends object>(form: HTMLFormElement) {
  const data = new FormData(form)
  return Object.fromEntries(data.entries()) as T
}
