import clsx from 'clsx'
import React, { FC } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { CollectModuleType, UploadedVideo } from 'src/types/local'

type Props = {
  uploadedVideo: UploadedVideo
  // eslint-disable-next-line no-unused-vars
  setCollectType: (data: CollectModuleType) => void
}

const PermissionQuestion: FC<Props> = ({ uploadedVideo, setCollectType }) => {
  return (
    <div className="space-y-2">
      <h6>Who can mint this publication?</h6>
      <div className="flex flex-wrap gap-1.5 md:flex-nowrap">
        <button
          type="button"
          onClick={() =>
            setCollectType({
              type: 'freeCollectModule',
              followerOnly: false,
              isFree: true,
              referralFee: 0
            })
          }
          className={clsx(
            'flex items-center justify-between w-full px-4 py-3 text-sm border border-gray-200 hover:border-indigo-500 focus:outline-none dark:border-gray-800 rounded-xl',
            {
              'border-indigo-500': !uploadedVideo.collectModule.followerOnly
            }
          )}
        >
          <span>Anyone</span>
          {!uploadedVideo.collectModule.followerOnly && <AiOutlineCheck />}
        </button>
        <button
          type="button"
          onClick={() =>
            setCollectType({
              type: 'freeCollectModule',
              followerOnly: true,
              isFree: true,
              referralFee: 0
            })
          }
          className={clsx(
            'flex items-center justify-between w-full px-4 py-3 text-sm border border-gray-200 hover:border-indigo-500 focus:outline-none dark:border-gray-800 rounded-xl',
            {
              'border-indigo-500':
                uploadedVideo.collectModule.followerOnly &&
                uploadedVideo.collectModule.type !== 'revertCollectModule'
            }
          )}
        >
          <span>Subscribers</span>
          {uploadedVideo.collectModule.followerOnly &&
            uploadedVideo.collectModule.type !== 'revertCollectModule' && (
              <AiOutlineCheck />
            )}
        </button>
        <button
          type="button"
          onClick={() =>
            setCollectType({
              type: 'revertCollectModule',
              isFree: false,
              followerOnly: true,
              referralFee: 0
            })
          }
          className={clsx(
            'flex items-center justify-between w-full px-4 py-3 text-sm border border-gray-200 hover:border-indigo-500 focus:outline-none dark:border-gray-800 rounded-xl',
            {
              'border-indigo-500':
                uploadedVideo.collectModule.type === 'revertCollectModule'
            }
          )}
        >
          <span>None</span>
          {uploadedVideo.collectModule.type === 'revertCollectModule' && (
            <AiOutlineCheck />
          )}
        </button>
      </div>
    </div>
  )
}

export default PermissionQuestion
