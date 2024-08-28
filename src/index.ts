import type { PluginFunc } from 'dayjs';
import { Lunar } from 'lunar-typescript';

const padStart = (string: string | number, length: number, pad: string) => {
  const s = String(string)
  if (!s || s.length >= length) return string
  return `${Array((length + 1) - s.length).join(pad)}${string}`
}

/**
 * 支持的占位符
 * YY - 两位数的年份
 * YYYY - 四位数的年份
 * 年 - 中文的年份
 * M - 月份，从 1 开始
 * MM - 月份，两位数
 * 月 - 中文的月份
 * D - 月份里的一天
 * DD - 月份里的一天，两位数
 * 日 - 中文的日期
 */
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|年|月|日/g

const lunar: PluginFunc<string> = (_option, dayjsClass) => {
  dayjsClass.prototype.lunar = function(template) {
    const date = this.toDate();
    const lunar = Lunar.fromDate(date);

    if (!template) return lunar.toString();

    const matches = (match: string) => {
      switch (match) {
        case 'YY':
          return String(lunar.getYear()).slice(-2);
        case "YYYY":
          return padStart(lunar.getYear(), 4, '0');
        case 'M':
          return lunar.getMonth();
        case 'MM':
          return padStart(lunar.getMonth(), 2, '0');
        case 'D':
          return lunar.getDay();
        case 'DD':
          return padStart(lunar.getDay(), 2, '0');
        case '年':
          return lunar.getYearInChinese() + match;
        case '月':
          return lunar.getMonthInChinese() + match;
        case '日':
          return lunar.getDayInChinese();
        default:
          break
      }

      return null;
    };

    return template.replace(REGEX_FORMAT, (match, $1) => $1 || matches(match) || "")
  }
}

export default lunar;
