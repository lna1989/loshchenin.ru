import {I18N_CIS_DATE_TIME_FORMATS, I18N_NUMBER_FORMATS} from '~/const/i18n'
import { CIS_PLURALIZATION_RULES } from '~/util/CISPluralizationRules'


export default defineI18nConfig(() => ({
    fallbackLocale: 'ru',

    // v8,9
    numberFormats: I18N_NUMBER_FORMATS,
    // v8
    dateTimeFormats: {
        ru: I18N_CIS_DATE_TIME_FORMATS,
        by: I18N_CIS_DATE_TIME_FORMATS,
    },
    // v9
    datetimeFormats: {
        ru: I18N_CIS_DATE_TIME_FORMATS,
        by: I18N_CIS_DATE_TIME_FORMATS,
    },
    // v8
    pluralRules: {
        ru: CIS_PLURALIZATION_RULES,
        by: CIS_PLURALIZATION_RULES,
    },
    // v9
    pluralizationRules: {
        ru: CIS_PLURALIZATION_RULES,
        by: CIS_PLURALIZATION_RULES,
    },
}))
