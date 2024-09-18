export interface TestType {
  name: string
}

export const useViewer = () => {
  const s: TestType = { name: 'test' }
  console.log('use viewer', s)
  return s
}
