export function cloneTemplate<T extends Element>(
  template: HTMLTemplateElement,
  hasContainer?: false
): DocumentFragment
export function cloneTemplate<T extends Element>(
  template: HTMLTemplateElement,
  hasContainer?: true
): T
export function cloneTemplate<T extends Element>(
  template: HTMLTemplateElement,
  hasContainer: boolean = false
) {
  return hasContainer
    ? (template.content.firstElementChild.cloneNode(true) as T)
    : (template.content.cloneNode(true) as DocumentFragment)
}
