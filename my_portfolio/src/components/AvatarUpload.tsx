import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'

export function AvatarUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('No image selected')

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (!selectedFile) {
      return
    }

    setPreviewUrl((currentUrl) => {
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl)
      }

      return URL.createObjectURL(selectedFile)
    })
    setFileName(selectedFile.name)
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  return (
    <section className="portfolio-card">
      <h2 className="section-title">Avatar</h2>
      <p className="mt-2 text-sm text-slate-600">
        Upload a profile photo to personalize your portfolio.
      </p>

      <div className="mt-5 flex flex-col items-center gap-4">
        <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-slate-300 bg-slate-100">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Uploaded avatar preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-3xl font-semibold tracking-wide text-slate-400">
              DK
            </span>
          )}
        </div>

        <label className="cursor-pointer rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          Upload Avatar
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </label>

        <p className="text-xs text-slate-500">{fileName}</p>
      </div>
    </section>
  )
}
