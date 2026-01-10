import { POST_QUERYResult } from '@/sanity/types'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>['publishedAt']
}

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="text-base text-slate-700">
      {dayjs(publishedAt).locale('fr').format('D MMMM YYYY')}
    </p>
  ) : null
}