
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

interface _GlobalComponents {
  'AccountDetailsStep': typeof import("../../components/AccountDetailsStep.vue")['default']
  'CheckoutStep': typeof import("../../components/CheckoutStep.vue")['default']
  'CompanyDetailsStep': typeof import("../../components/CompanyDetailsStep.vue")['default']
  'DashboardLayout': typeof import("../../components/DashboardLayout.vue")['default']
  'PlanStep': typeof import("../../components/PlanStep.vue")['default']
  'SvgAdditionalinfo': typeof import("../../components/svg/additionalinfo.vue")['default']
  'SvgApplications': typeof import("../../components/svg/applications.vue")['default']
  'SvgCountries': typeof import("../../components/svg/countries.vue")['default']
  'SvgCoupons': typeof import("../../components/svg/coupons.vue")['default']
  'SvgCustomers': typeof import("../../components/svg/customers.vue")['default']
  'SvgDashboard': typeof import("../../components/svg/dashboard.vue")['default']
  'SvgEmbassies': typeof import("../../components/svg/embassies.vue")['default']
  'SvgFinances': typeof import("../../components/svg/finances.vue")['default']
  'SvgGuides': typeof import("../../components/svg/guides.vue")['default']
  'SvgNationalities': typeof import("../../components/svg/nationalities.vue")['default']
  'SvgUsers': typeof import("../../components/svg/users.vue")['default']
  'SvgVisaproducts': typeof import("../../components/svg/visaproducts.vue")['default']
  'UiAvatar': typeof import("../../components/ui/Avatar.vue")['default']
  'UiBadge': typeof import("../../components/ui/Badge.vue")['default']
  'UiButton': typeof import("../../components/ui/Button.vue")['default']
  'UiCard': typeof import("../../components/ui/Card.vue")['default']
  'UiCheckbox': typeof import("../../components/ui/Checkbox.vue")['default']
  'UiCustomDropdown': typeof import("../../components/ui/CustomDropdown.vue")['default']
  'UiDropdownMenu': typeof import("../../components/ui/DropdownMenu.vue")['default']
  'UiDropdownMenuItem': typeof import("../../components/ui/DropdownMenuItem.vue")['default']
  'UiInput': typeof import("../../components/ui/Input.vue")['default']
  'UiRichTextEditor': typeof import("../../components/ui/RichTextEditor.vue")['default']
  'UiTable': typeof import("../../components/ui/Table.vue")['default']
  'UiTableBody': typeof import("../../components/ui/TableBody.vue")['default']
  'UiTableCell': typeof import("../../components/ui/TableCell.vue")['default']
  'UiTableHead': typeof import("../../components/ui/TableHead.vue")['default']
  'UiTableHeader': typeof import("../../components/ui/TableHeader.vue")['default']
  'UiTableRow': typeof import("../../components/ui/TableRow.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyAccountDetailsStep': LazyComponent<typeof import("../../components/AccountDetailsStep.vue")['default']>
  'LazyCheckoutStep': LazyComponent<typeof import("../../components/CheckoutStep.vue")['default']>
  'LazyCompanyDetailsStep': LazyComponent<typeof import("../../components/CompanyDetailsStep.vue")['default']>
  'LazyDashboardLayout': LazyComponent<typeof import("../../components/DashboardLayout.vue")['default']>
  'LazyPlanStep': LazyComponent<typeof import("../../components/PlanStep.vue")['default']>
  'LazySvgAdditionalinfo': LazyComponent<typeof import("../../components/svg/additionalinfo.vue")['default']>
  'LazySvgApplications': LazyComponent<typeof import("../../components/svg/applications.vue")['default']>
  'LazySvgCountries': LazyComponent<typeof import("../../components/svg/countries.vue")['default']>
  'LazySvgCoupons': LazyComponent<typeof import("../../components/svg/coupons.vue")['default']>
  'LazySvgCustomers': LazyComponent<typeof import("../../components/svg/customers.vue")['default']>
  'LazySvgDashboard': LazyComponent<typeof import("../../components/svg/dashboard.vue")['default']>
  'LazySvgEmbassies': LazyComponent<typeof import("../../components/svg/embassies.vue")['default']>
  'LazySvgFinances': LazyComponent<typeof import("../../components/svg/finances.vue")['default']>
  'LazySvgGuides': LazyComponent<typeof import("../../components/svg/guides.vue")['default']>
  'LazySvgNationalities': LazyComponent<typeof import("../../components/svg/nationalities.vue")['default']>
  'LazySvgUsers': LazyComponent<typeof import("../../components/svg/users.vue")['default']>
  'LazySvgVisaproducts': LazyComponent<typeof import("../../components/svg/visaproducts.vue")['default']>
  'LazyUiAvatar': LazyComponent<typeof import("../../components/ui/Avatar.vue")['default']>
  'LazyUiBadge': LazyComponent<typeof import("../../components/ui/Badge.vue")['default']>
  'LazyUiButton': LazyComponent<typeof import("../../components/ui/Button.vue")['default']>
  'LazyUiCard': LazyComponent<typeof import("../../components/ui/Card.vue")['default']>
  'LazyUiCheckbox': LazyComponent<typeof import("../../components/ui/Checkbox.vue")['default']>
  'LazyUiCustomDropdown': LazyComponent<typeof import("../../components/ui/CustomDropdown.vue")['default']>
  'LazyUiDropdownMenu': LazyComponent<typeof import("../../components/ui/DropdownMenu.vue")['default']>
  'LazyUiDropdownMenuItem': LazyComponent<typeof import("../../components/ui/DropdownMenuItem.vue")['default']>
  'LazyUiInput': LazyComponent<typeof import("../../components/ui/Input.vue")['default']>
  'LazyUiRichTextEditor': LazyComponent<typeof import("../../components/ui/RichTextEditor.vue")['default']>
  'LazyUiTable': LazyComponent<typeof import("../../components/ui/Table.vue")['default']>
  'LazyUiTableBody': LazyComponent<typeof import("../../components/ui/TableBody.vue")['default']>
  'LazyUiTableCell': LazyComponent<typeof import("../../components/ui/TableCell.vue")['default']>
  'LazyUiTableHead': LazyComponent<typeof import("../../components/ui/TableHead.vue")['default']>
  'LazyUiTableHeader': LazyComponent<typeof import("../../components/ui/TableHeader.vue")['default']>
  'LazyUiTableRow': LazyComponent<typeof import("../../components/ui/TableRow.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
