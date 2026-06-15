import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers'
import {headers} from 'next/headers'
 
export default getRequestConfig(async () => {
  const store = await cookies()
  const headersList = await headers()
  
  // 优先从 cookies 获取用户选择
  const cookieLocale = store.get('locale')?.value
  
  // 如果没有 cookie，尝试从浏览器 Accept-Language 头部获取
  const acceptLanguage = headersList.get('accept-language')
  let browserLocale = 'en' // 默认值
  console.log(acceptLanguage, '===> acceptLanguage')
  
  if (acceptLanguage) {
    // 解析 Accept-Language 头部，取第一个支持的语言
    const languages = acceptLanguage.split(',').map(lang => {
      const [locale, q = 'q=1'] = lang.trim().split(';')
      const quality = parseFloat(q.split('=')[1] || '1')
      return {locale: locale.split('-')[0].toLowerCase(), quality}
    })
    
    // 按质量排序
    languages.sort((a, b) => b.quality - a.quality)
    
    // 检查是否有支持的语言
    const supportedLocales = ['en', 'zh']
    const matchedLocale = languages.find(lang => supportedLocales.includes(lang.locale))
    
    if (matchedLocale) {
      browserLocale = matchedLocale.locale
    }
  }
  
  const locale = cookieLocale || browserLocale
  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});