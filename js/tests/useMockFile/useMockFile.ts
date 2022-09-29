interface useMockFileCreateInterface {
  name?: string
  size?: number
  mimeType?: string
}

interface useMockFileResultInterface {
  create: ({ name, size, mimeType }: useMockFileCreateInterface) => File
}

const useMockFile = (): useMockFileResultInterface => {
  const create = ({
    name = 'mock.txt',
    size = 1024,
    mimeType = 'plain/txt',
  }: useMockFileCreateInterface): File => {
    const range = (count: number) => {
      let output = ''
      for (let i = 0; i < count; i++) {
        output += 'a'
      }
      return output
    }

    const blob = new Blob([range(size)])

    return new File([blob], name, {
      lastModified: new Date().getTime(),
      type: mimeType,
    })
  }

  return { create }
}

export { useMockFile }
