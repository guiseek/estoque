import type { ParseSelector } from './parser'

declare global {
  interface ParentNode {
    querySelector<S extends keyof HTMLElementTagNameMap>(selector: S): ParseSelector<S> | null
    querySelector<S extends string>(selector: S): ParseSelector<S> | null

    querySelectorAll<S extends keyof HTMLElementTagNameMap>(
      selector: S,
    ): NodeListOf<ParseSelector<S>>
    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S>>
  }

  interface Element {
    closest<S extends keyof HTMLElementTagNameMap>(selector: S): ParseSelector<S> | null
    closest<S extends string>(selector: S): ParseSelector<S> | null
  }

  interface HTMLElement {
    querySelector<S extends string>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null
    querySelector<S extends keyof HTMLElementTagNameMap>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null
    querySelector<E extends Element = Element>(selector: string): E | null

    querySelectorAll<S extends keyof HTMLElementTagNameMap>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
    querySelectorAll<E extends Element = Element>(
      selector: string,
    ): NodeListOf<E>

    closest<S extends keyof HTMLElementTagNameMap>(selector: S): ParseSelector<S, HTMLElement> | null
    closest<S extends string>(selector: S): ParseSelector<S, HTMLElement> | null
  }

  interface Document {
    querySelector<S extends keyof HTMLElementTagNameMap>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null
    querySelector<S extends string>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null
    querySelector<E extends Element = Element>(selector: string): E | null

    querySelectorAll<S extends keyof HTMLElementTagNameMap>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
    querySelectorAll<E extends Element = Element>(
      selector: string,
    ): NodeListOf<E>
  }

  interface DocumentFragment {
    querySelector<S extends keyof HTMLElementTagNameMap>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null
    querySelector<S extends string>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null
    querySelector<E extends Element = Element>(selector: string): E | null

    querySelectorAll<S extends keyof HTMLElementTagNameMap>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
    querySelectorAll<E extends Element = Element>(
      selector: string,
    ): NodeListOf<E>
  }
}