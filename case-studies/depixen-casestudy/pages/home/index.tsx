import styles from './styles.module.scss'
import MainLayout from '../../views/layouts/Main'
import { useEffect, useState } from 'react'

function Home() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState()
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl: any = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }

  return (
    <MainLayout title="Home Page">
      <div className={styles.home}>
        <div className={styles.frame}>
          <form className="form p-3">
            <div className="form-group">
              {(title === null || isSubmit === true) && (
                <label
                  htmlFor="title"
                  onClick={() => {
                    if (!title) {
                      setTitle('New Title')
                    }
                  }}
                >
                  {title ? title : 'New Title'}
                </label>
              )}
              {title !== null && isSubmit === false && (
                <input
                  type="text"
                  className="form-control"
                  placeholder="New Title"
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                  value={title}
                />
              )}
            </div>
            <div className="form-group">
              {(description === null || isSubmit === true) && (
                <label
                  htmlFor="description"
                  onClick={() => {
                    if (!description) {
                      setDescription('New Description')
                    }
                  }}
                >
                  {description ? description : 'New Description'}
                </label>
              )}
              {description !== null && isSubmit === false && (
                <textarea
                  className="form-control"
                  placeholder="New Description"
                  rows={6}
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                  value={description}
                />
              )}
            </div>
            <label htmlFor="inputFile" className={styles.inputFile}>
              {!selectedFile && (
                <input type="file" id="inputFile" onChange={onSelectFile} />
              )}
              {!selectedFile && <div className={styles.inputFileIcon}></div>}
              {selectedFile && (
                <img className={styles.inputFilePreview} src={preview} />
              )}
            </label>
            {!isSubmit && (
              <button
                className="btn btn-primary"
                disabled={
                  title === null ||
                  description === null ||
                  selectedFile === null
                }
                onClick={() => {
                  setIsSubmit(true)
                }}
              >
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
