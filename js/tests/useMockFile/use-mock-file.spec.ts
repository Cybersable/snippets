import { useMockFile } from './useMockFile'

describe('useMockFile', () => {
  it('Hook should be defined', () => {
    const { create } = useMockFile()
    const file: File = create({})

    expect(file).not.toBeNull()
  })

  it('Hook should have default values', () => {
    const { create } = useMockFile()
    const file: File = create({})

    expect(file.type).toBe('plain/txt')
    expect(file.name).toBe('mock.txt')
    expect(file.size).toBe(1024)
    expect(file.lastModified).not.toBeNull()
  })

  it('Hook should have spec values', () => {
    const { create } = useMockFile()
    const size = 128 * 2
    const name = 'pic.jpg'
    const mimeType = 'image/jpeg'

    const file: File = create({ name, size, mimeType })

    expect(file.name).toBe(name)
    expect(file.size).toBe(size)
    expect(file.type).toBe(mimeType)
  })
})
