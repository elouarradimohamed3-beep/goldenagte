import { MessageCircle } from 'lucide-react'
import { waLink } from '@/lib/site'

export function WhatsAppButton() {
  return (
    <a href={waLink('Hi! I have a question about goldengateiptv.com')} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105">
      <MessageCircle size={24} />
    </a>
  )
}
