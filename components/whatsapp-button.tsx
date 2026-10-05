import { MessageCircle } from 'lucide-react'
import { waLink } from '@/lib/site'

export function WhatsAppButton() {
  return (
    <a href={waLink('Hi! I have a question about goldengateiptv.com')} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-black shadow-xl transition hover:scale-110">
      <MessageCircle size={26} />
    </a>
  )
}
