export const SCREENS = {
  HOME: '/',
  CREATE_NOTE: '/create',
  EDIT_NOTE: (id?: string) => `/edit/${id ? id: `:id`}`,
  ARCHIVES: '/archives',
  TRASH: '/trash',
  NOTE: (id?: string) => `/todo/${id ? id: ':id'}`
}