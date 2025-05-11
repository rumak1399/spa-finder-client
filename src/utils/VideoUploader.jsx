'use client';

import { CldUploadWidget } from "next-cloudinary";


export function VideoUploader({ onUploadSuccess }) {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_UPLOAD_PRESET}
      signatureEndpoint="/api/signcloudinary-params"
      onSuccess={(result) => {
        if (typeof result.info === 'object' && 'secure_url' in result.info) {
          onUploadSuccess(result.info.secure_url);
        }
      }}
      options={{
        resourceType: 'video', // Important: specify video type
        singleUploadAutoClose: false,
      }}
    >
      {({ open }) => {
        return (
          <button
            type="button"
            onClick={() => open()}
            className="rounded-md bg-primary border border-borderColor px-2.5 py-1.5 text-sm font-semibold text-zinc-200 shadow-md hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Upload Video
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
