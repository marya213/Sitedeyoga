import { TYPE_STYLES } from '../../data/index'

export default function Pill({ type }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${TYPE_STYLES[type].pill}`}
    >
      {TYPE_STYLES[type].label}
    </span>
  )
}
