import { mdiAccount, mdiAccountGroup, mdiAccountMultiple, mdiAlert, mdiArrowDown, mdiArrowLeft, mdiArrowRight, mdiArrowUp, mdiAt, mdiAttachment, mdiBell, mdiBookmark, mdiBullhorn, mdiCalendar, mdiCalendarClock, mdiCamera, mdiCart, mdiCartArrowDown, mdiChartArc, mdiCheck, mdiCheckBold, mdiChevronDown, mdiChevronLeft, mdiChevronRight, mdiChevronUp, mdiClockOutline, mdiClose, mdiCloudUpload, mdiCog, mdiCross, mdiDelete, mdiDotsHorizontal, mdiDotsVertical, mdiDownload, mdiEmail, mdiEye, mdiFacebook, mdiFile, mdiFilter, mdiFolder, mdiHammer, mdiHeart, mdiHelp, mdiHome, mdiImage, mdiImageMultipleOutline, mdiInformation, mdiLink, mdiLinkedin, mdiLoading, mdiMagnify, mdiMapMarker, mdiMenu, mdiMessage, mdiMicrophone, mdiMinus, mdiOfficeBuilding, mdiPause, mdiPencil, mdiPhone, mdiPlay, mdiPlus, mdiShare, mdiSpeaker, mdiTrendingUp, mdiTwitter, mdiUpload, mdiVideo, mdiViewGrid, mdiViewList } from '@mdi/js';
import { inject, InjectionKey, Plugin, reactive, readonly } from "vue";

type Theme = {
  colors: Record<string, string>,
  buttonClasses: Record<string, string>,
  textClasses: Record<string, string>,
  icons: Record<string, string>,
}

const baseTheme: Theme = {
  colors: {
    info: '#3a86ff',
    success: '#2a9d8f',
    warn: '#e9c46a',
    danger: '#e76f51',
  },
  buttonClasses: {
    default: 'UiButton_default',
    border: 'UiButton_border',
    text: 'UiButton_text'
  },
  textClasses: {
    p: 'UiText_p',
    h1: 'UiText_h1',
    h2: 'UiText_h2',
    h3: 'UiText_h3',
    small: 'UiText_small'
  },
  icons: {
    'account-group': mdiAccountGroup,
    'account-multiple': mdiAccountMultiple,
    'account': mdiAccount,
    'alert': mdiAlert,
    'arrow-down': mdiArrowDown,
    'arrow-left': mdiArrowLeft,
    'arrow-right': mdiArrowRight,
    'arrow-up': mdiArrowUp,
    'at': mdiAt,
    'attachment': mdiAttachment,
    'bell': mdiBell,
    'bookmark': mdiBookmark,
    'bullhorn': mdiBullhorn,
    'calendar-clock': mdiCalendarClock,
    'calendar': mdiCalendar,
    'camera': mdiCamera,
    'cart-arrow-down': mdiCartArrowDown,
    'cart': mdiCart,
    'chart-arc': mdiChartArc,
    'check-bold': mdiCheckBold,
    'check': mdiCheck,
    'chevron-down': mdiChevronDown,
    'chevron-left': mdiChevronLeft,
    'chevron-right': mdiChevronRight,
    'chevron-up': mdiChevronUp,
    'clock-outline': mdiClockOutline,
    'close': mdiClose,
    'cloud-upload': mdiCloudUpload,
    'cog': mdiCog,
    'cross': mdiCross,
    'delete': mdiDelete,
    'dots-horizontal': mdiDotsHorizontal,
    'dots-vertical': mdiDotsVertical,
    'download': mdiDownload,
    'email': mdiEmail,
    'eye': mdiEye,
    'facebook': mdiFacebook,
    'file': mdiFile,
    'filter': mdiFilter,
    'folder': mdiFolder,
    'hammer': mdiHammer,
    'heart': mdiHeart,
    'help': mdiHelp,
    'home': mdiHome,
    'image-multiple-outline': mdiImageMultipleOutline,
    'image': mdiImage,
    'information': mdiInformation,
    'link': mdiLink,
    'linkedin': mdiLinkedin,
    'loading': mdiLoading,
    'magnify': mdiMagnify,
    'map-marker': mdiMapMarker,
    'menu': mdiMenu,
    'message': mdiMessage,
    'microphone': mdiMicrophone,
    'minus': mdiMinus,
    'office-building': mdiOfficeBuilding,
    'pause': mdiPause,
    'pencil': mdiPencil,
    'phone': mdiPhone,
    'play': mdiPlay,
    'plus': mdiPlus,
    'share': mdiShare,
    'speaker': mdiSpeaker,
    'trending-up': mdiTrendingUp,
    'twitter': mdiTwitter,
    'upload': mdiUpload,
    'video': mdiVideo,
    'view-grid': mdiViewGrid,
    'view-list': mdiViewList,
  },
}

const key: InjectionKey<Theme> = Symbol('themeKey')

export function provideCustomTheme(customize?: (theme: Theme) => void): Plugin {
  return {
    install(app) {
      const theme = reactive(baseTheme)
      app.provide(key, theme)
      if (customize) customize(theme)
    },
  }
}

export function useTheme() {
  return readonly(inject(key, baseTheme))
}

export function useCustomTheme() {
  return inject(key)
}

export function useThemeColor(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.colors[name]) {
    throw new Error(`"${name}" is not a valid theme color (${Object.keys(theme.colors)})`)
  }
  return theme.colors[name]
}

export function useTextVariant(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.textClasses[name]) {
    throw new Error(`"${name}" is not a valid text variant (${Object.keys(theme.textClasses)})`)
  }
  return theme.textClasses[name]
}

export function useButtonVariant(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.buttonClasses[name]) {
    throw new Error(`"${name}" is not a valid button variant (${Object.keys(theme.buttonClasses)})`)
  }
  return theme.buttonClasses[name]
}

export function useIconSvgPath(name: string) {
  const theme = useTheme() ?? baseTheme
  if (!theme.icons[name]) {
    throw new Error(`"${name}" is not a valid icon name (${Object.keys(theme.icons)})`)
  }
  return theme.icons[name]
}
