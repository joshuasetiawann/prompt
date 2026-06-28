import {
  LayoutDashboard, Calendar, CalendarDays, Users, User, Settings, Bell, Search, Box, Boxes,
  Package, FileText, File, Files, CreditCard, Wallet, BarChart3, PieChart, LineChart, TrendingUp,
  ShoppingCart, ShoppingBag, Store, Tag, Heart, Star, Home, Building2, Bed, Car, Plane, MapPin,
  Stethoscope, Scissors, Dumbbell, GraduationCap, BookOpen, Briefcase, ClipboardList, ClipboardCheck,
  CheckSquare, Inbox, MessageSquare, MessagesSquare, Bot, Sparkles, PenTool, FileSignature, Image,
  Ticket, Megaphone, Mail, Phone, Truck, Warehouse, Clock, CalendarClock, BadgeCheck, ShieldCheck,
  Layers, Folder, FolderOpen, Database, Activity, Target, Award, Coffee, UtensilsCrossed, Receipt,
  Wrench, Globe, Link2, Palette, Music, Video, Mic, Repeat, Flame, ListChecks, KanbanSquare, Gauge,
  Wifi, Building, DollarSign, type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard, gauge: Gauge, calendar: Calendar, "calendar-days": CalendarDays,
  "calendar-clock": CalendarClock, clock: Clock, users: Users, user: User, settings: Settings,
  bell: Bell, search: Search, box: Box, boxes: Boxes, package: Package, file: File, files: Files,
  "file-text": FileText, "file-signature": FileSignature, "credit-card": CreditCard, wallet: Wallet,
  dollar: DollarSign, receipt: Receipt, chart: BarChart3, "bar-chart": BarChart3, "pie-chart": PieChart,
  "line-chart": LineChart, trending: TrendingUp, activity: Activity, cart: ShoppingCart,
  bag: ShoppingBag, store: Store, tag: Tag, heart: Heart, star: Star, home: Home, building: Building2,
  building2: Building, bed: Bed, car: Car, plane: Plane, "map-pin": MapPin, stethoscope: Stethoscope,
  scissors: Scissors, dumbbell: Dumbbell, "graduation-cap": GraduationCap, book: BookOpen,
  briefcase: Briefcase, clipboard: ClipboardList, "clipboard-check": ClipboardCheck,
  "check-square": CheckSquare, "list-checks": ListChecks, kanban: KanbanSquare, inbox: Inbox,
  message: MessageSquare, messages: MessagesSquare, bot: Bot, sparkles: Sparkles, pen: PenTool,
  image: Image, ticket: Ticket, megaphone: Megaphone, mail: Mail, phone: Phone, truck: Truck,
  warehouse: Warehouse, "badge-check": BadgeCheck, shield: ShieldCheck, layers: Layers,
  folder: Folder, "folder-open": FolderOpen, database: Database, target: Target, award: Award,
  coffee: Coffee, utensils: UtensilsCrossed, wrench: Wrench, globe: Globe, link: Link2,
  palette: Palette, music: Music, video: Video, mic: Mic, repeat: Repeat, flame: Flame, wifi: Wifi,
};

export function getIcon(name?: string): LucideIcon {
  return (name && ICONS[name]) || LayoutDashboard;
}
