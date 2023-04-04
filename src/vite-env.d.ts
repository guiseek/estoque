/// <reference types="vite/client" />

interface Product {
  id: number
  name: string
  price: string
  detail?: string
  amount?: string
  category?: string
  visible?: boolean
  created: Date
  updated: Date
}

interface CreateProductDto {
  name: string
  price: string
  detail?: string
  amount?: string
  category?: string
  visible?: boolean
}

interface UpdateProductDro extends Partial<CreateProductDto> {
  id: number
}
