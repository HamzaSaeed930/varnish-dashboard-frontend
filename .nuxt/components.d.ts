
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AccountDetailsStep: typeof import("../components/AccountDetailsStep.vue")['default']
export const CheckoutStep: typeof import("../components/CheckoutStep.vue")['default']
export const CompanyDetailsStep: typeof import("../components/CompanyDetailsStep.vue")['default']
export const DashboardLayout: typeof import("../components/DashboardLayout.vue")['default']
export const PlanStep: typeof import("../components/PlanStep.vue")['default']
export const SvgAdditionalinfo: typeof import("../components/svg/additionalinfo.vue")['default']
export const SvgApplications: typeof import("../components/svg/applications.vue")['default']
export const SvgCountries: typeof import("../components/svg/countries.vue")['default']
export const SvgCoupons: typeof import("../components/svg/coupons.vue")['default']
export const SvgCustomers: typeof import("../components/svg/customers.vue")['default']
export const SvgDashboard: typeof import("../components/svg/dashboard.vue")['default']
export const SvgEmbassies: typeof import("../components/svg/embassies.vue")['default']
export const SvgFinances: typeof import("../components/svg/finances.vue")['default']
export const SvgGuides: typeof import("../components/svg/guides.vue")['default']
export const SvgNationalities: typeof import("../components/svg/nationalities.vue")['default']
export const SvgUsers: typeof import("../components/svg/users.vue")['default']
export const SvgVisaproducts: typeof import("../components/svg/visaproducts.vue")['default']
export const UiAvatar: typeof import("../components/ui/Avatar.vue")['default']
export const UiBadge: typeof import("../components/ui/Badge.vue")['default']
export const UiButton: typeof import("../components/ui/Button.vue")['default']
export const UiCard: typeof import("../components/ui/Card.vue")['default']
export const UiCheckbox: typeof import("../components/ui/Checkbox.vue")['default']
export const UiCustomDropdown: typeof import("../components/ui/CustomDropdown.vue")['default']
export const UiDropdownMenu: typeof import("../components/ui/DropdownMenu.vue")['default']
export const UiDropdownMenuItem: typeof import("../components/ui/DropdownMenuItem.vue")['default']
export const UiInput: typeof import("../components/ui/Input.vue")['default']
export const UiRichTextEditor: typeof import("../components/ui/RichTextEditor.vue")['default']
export const UiTable: typeof import("../components/ui/Table.vue")['default']
export const UiTableBody: typeof import("../components/ui/TableBody.vue")['default']
export const UiTableCell: typeof import("../components/ui/TableCell.vue")['default']
export const UiTableHead: typeof import("../components/ui/TableHead.vue")['default']
export const UiTableHeader: typeof import("../components/ui/TableHeader.vue")['default']
export const UiTableRow: typeof import("../components/ui/TableRow.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAccountDetailsStep: LazyComponent<typeof import("../components/AccountDetailsStep.vue")['default']>
export const LazyCheckoutStep: LazyComponent<typeof import("../components/CheckoutStep.vue")['default']>
export const LazyCompanyDetailsStep: LazyComponent<typeof import("../components/CompanyDetailsStep.vue")['default']>
export const LazyDashboardLayout: LazyComponent<typeof import("../components/DashboardLayout.vue")['default']>
export const LazyPlanStep: LazyComponent<typeof import("../components/PlanStep.vue")['default']>
export const LazySvgAdditionalinfo: LazyComponent<typeof import("../components/svg/additionalinfo.vue")['default']>
export const LazySvgApplications: LazyComponent<typeof import("../components/svg/applications.vue")['default']>
export const LazySvgCountries: LazyComponent<typeof import("../components/svg/countries.vue")['default']>
export const LazySvgCoupons: LazyComponent<typeof import("../components/svg/coupons.vue")['default']>
export const LazySvgCustomers: LazyComponent<typeof import("../components/svg/customers.vue")['default']>
export const LazySvgDashboard: LazyComponent<typeof import("../components/svg/dashboard.vue")['default']>
export const LazySvgEmbassies: LazyComponent<typeof import("../components/svg/embassies.vue")['default']>
export const LazySvgFinances: LazyComponent<typeof import("../components/svg/finances.vue")['default']>
export const LazySvgGuides: LazyComponent<typeof import("../components/svg/guides.vue")['default']>
export const LazySvgNationalities: LazyComponent<typeof import("../components/svg/nationalities.vue")['default']>
export const LazySvgUsers: LazyComponent<typeof import("../components/svg/users.vue")['default']>
export const LazySvgVisaproducts: LazyComponent<typeof import("../components/svg/visaproducts.vue")['default']>
export const LazyUiAvatar: LazyComponent<typeof import("../components/ui/Avatar.vue")['default']>
export const LazyUiBadge: LazyComponent<typeof import("../components/ui/Badge.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../components/ui/Button.vue")['default']>
export const LazyUiCard: LazyComponent<typeof import("../components/ui/Card.vue")['default']>
export const LazyUiCheckbox: LazyComponent<typeof import("../components/ui/Checkbox.vue")['default']>
export const LazyUiCustomDropdown: LazyComponent<typeof import("../components/ui/CustomDropdown.vue")['default']>
export const LazyUiDropdownMenu: LazyComponent<typeof import("../components/ui/DropdownMenu.vue")['default']>
export const LazyUiDropdownMenuItem: LazyComponent<typeof import("../components/ui/DropdownMenuItem.vue")['default']>
export const LazyUiInput: LazyComponent<typeof import("../components/ui/Input.vue")['default']>
export const LazyUiRichTextEditor: LazyComponent<typeof import("../components/ui/RichTextEditor.vue")['default']>
export const LazyUiTable: LazyComponent<typeof import("../components/ui/Table.vue")['default']>
export const LazyUiTableBody: LazyComponent<typeof import("../components/ui/TableBody.vue")['default']>
export const LazyUiTableCell: LazyComponent<typeof import("../components/ui/TableCell.vue")['default']>
export const LazyUiTableHead: LazyComponent<typeof import("../components/ui/TableHead.vue")['default']>
export const LazyUiTableHeader: LazyComponent<typeof import("../components/ui/TableHeader.vue")['default']>
export const LazyUiTableRow: LazyComponent<typeof import("../components/ui/TableRow.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
