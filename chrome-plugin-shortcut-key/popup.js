/*
 * @Description:
 * @Version:
 * @Autor: chenyuanguang
 * @Date: 2021-06-09 16:19:27
 * @LastEditors: chenyuanguang
 * @LastEditTime: 2021-06-09 16:31:25
 */

setTimeout(function () {
  document.getElementById("navTab").innerHTML = jsonData.reduce(
    (pre, cur, index) => {
      return pre + `<span name="tab">${cur.application}</span>`;
    },
    ""
  );
  render(0);
  setTimeout(() => {
    let tabs = document.getElementsByName("tab");
    for (let i = 0; i < tabs.length; i++) {
      const element = tabs[i];
      element.onclick = () => {
        render(i);
      };
    }
  }, 100);
});

function render(index) {
  console.log(index);
  document.getElementById("content").innerHTML = jsonData[
    index
  ].children.reduce((pre, cur) => {
    let str = `<section><h3>${cur.module}</h3><ul>`;
    str =
      str +
      cur.child.reduce((pre, cur) => {
        return (
          pre +
          `<li>
                    <label for="">${cur.label}</label>
                    <span>${cur.value}</span>
                </li>`
        );
      }, "");
    str = str + `</ul></section>`;
    return pre + str;
  }, "");
}
var jsonData = [
  {
    application: "item2",
    children: [
      {
        module: "标签",
        child: [
          {
            label: "新建",
            value: "command + t",
          },
          {
            label: "关闭",
            value: "command + w",
          },
          {
            label: "切换标签",
            value: "command + 数字｜command+左右键",
          },
          {
            label: "切换全屏",
            value: "command + enter",
          },
          {
            label: "查找",
            value: "command + f",
          },
        ],
      },
      {
        module: "分屏",
        child: [
          {
            label: "垂直",
            value: "command + d",
          },
          {
            label: "水平",
            value: "command + shift + d",
          },
          {
            label: "切换屏幕",
            value: "command + option + 方向键｜command + [ | command + ]",
          },
          {
            label: "查看历史命令",
            value: "command + ;",
          },
          {
            label: "查看剪贴板历史",
            value: "command + shift+h",
          },
        ],
      },
    ],
  },
  {
    application: "vscode",
    children: [
      {
        module: "基本",
        child: [
          {
            label: "剪切（未选中文本的情况下，剪切光标所在行）",
            value: "Command + X ",
          },
          {
            label: "复制（未选中文本的情况下，复制光标所在行）",
            value: "command + C",
          },
          {
            label: "向上移动行",
            value: "Option + Up",
          },
          {
            label: "向下移动行",
            value: "Option + Down",
          },
          {
            label: "向上复制行",
            value: "Option + Shift + Up",
          },
          {
            label: "向下复制行",
            value: "Option + Shift + Down",
          },
          {
            label: "删除行",
            value: "Command + Shift + K",
          },
          {
            label: "下一行插入",
            value: "Command + Enter",
          },
          {
            label: "上一行插入",
            value: "Command + Shift + Enter",
          },
          {
            label: "跳转到匹配的括号",
            value: "Command + Shift + \\",
          },
          {
            label: "减少缩进",
            value: "Command + [",
          },
          {
            label: "增加缩进",
            value: "Command + ]",
          },
          {
            label: "跳转至行首",
            value: "fn+左箭头",
          },
          {
            label: "跳转到行尾",
            value: "fn+右箭头",
          },

          {
            label: "跳转至文件开头",
            value: "Command + fn + Up",
          },
          {
            label: "跳转至文件结尾",
            value: "Command + fn + Down",
          },

          {
            label: "按行向上滚动",
            value: "Ctrl + PgUp",
          },
          {
            label: "按行向下滚动",
            value: "Ctrl + PgDown",
          },
          {
            label: "按屏向上滚动",
            value: "Command + PgUp",
          },
          {
            label: "按屏向下滚动",
            value: "Command + PgDown",
          },
          {
            label: "折叠代码块",
            value: "Command + Shift + [",
          },
          {
            label: "展开代码块",
            value: "Command + Shift + ]",
          },
          {
            label: "折叠全部子代码块",
            value: "Command + K Command + [",
          },
          {
            label: "展开全部子代码块",
            value: "Command + K Command + ]",
          },
          {
            label: "折叠全部代码块",
            value: "Command + K Command + 0",
          },
          {
            label: "展开全部代码块",
            value: "Command + K Command + J",
          },
          {
            label: "添加行注释",
            value: "Command + /",
          },
          {
            label: "添加、移除块注释",
            value: "Option + Shift + A",
          },
          {
            label: "自动换行、取消自动换行",
            value: "Option + Z",
          },
        ],
      },
      {
        module: "多光标与选择",
        child: [
          {
            label: "插入多个光标",
            value: "Option + 点击",
          },
          {
            label: "向上插入光标",
            value: "Command + Option + Up",
          },
          {
            label: "向下插入光标",
            value: "Command + Option + Down",
          },
          {
            label: "撤销上一个光标操作",
            value: "Command + U",
          },
          {
            label: "在所选行的行尾插入光标",
            value: "Option + Shift + I",
          },
          {
            label: "选中当前行",
            value: "Command + I",
          },
          {
            label: "选中所有与当前选中内容相同部分",
            value: "Command + Shift + L",
          },
          {
            label: "选中所有与当前选中单词相同的单词",
            value: "Command + F2",
          },
          {
            label: "折叠选中",
            value: "Command + Ctrl + Shift + Left",
          },
          {
            label: "展开选中",
            value: "Command + Ctrl + Shift + Right",
          },
          {
            label: "选中代码块",
            value: "Alt + Shift + 拖动鼠标",
          },
          {
            label: "列选择 向上",
            value: "Command + Shift + Option + Up",
          },
          {
            label: "列选择 向下",
            value: "Command + Shift + Option + Down",
          },
          {
            label: "列选择 向左",
            value: "Command + Shift + Option + Left",
          },
          {
            label: "列选择 向右",
            value: "Command + Shift + Option + Right",
          },
          {
            label: "列选择 向上翻页",
            value: "Command + Shift + Option + PgUp",
          },
          {
            label: "列选择 向下翻页",
            value: "Command + Shift + Option + PgDown",
          },
        ],
      },
      {
        module: "查找替换",
        child: [
          {
            label: "查找",
            value: "Command + F ",
          },
          {
            label: "替换",
            value: "Command + Option + F",
          },
          {
            label: "查找下一个",
            value: "Command + G",
          },
          {
            label: "查找上一个",
            value: "Command + Shift + G",
          },
          {
            label: "选中所有匹配项",
            value: "Option + Enter",
          },
          {
            label: "向下选中相同内容",
            value: "Command + D",
          },
          {
            label: "移除前一个向下选中相同内容",
            value: "Command + K Command + D",
          },
        ],
      },
      {
        module: "全局",
        child: [
          {
            label: "显示命令面板",
            value: "Command + Shift + P / F1 ",
          },
          {
            label: "快速打开",
            value: "Command + P",
          },
          {
            label: "打开新窗口",
            value: "Command + Shift + N",
          },
          {
            label: "关闭窗口",
            value: "Command + W",
          },
        ],
      },
      {
        module: "进阶",
        child: [
          {
            label: "打开建议",
            value: "Ctrl + Space ",
          },
          {
            label: "参数提示",
            value: "Command + Shift + Space",
          },
          {
            label: "Emmet插件缩写补全",
            value: "Tab",
          },
          {
            label: "格式化",
            value: "Option + Shift + F",
          },
          {
            label: "格式化选中内容",
            value: "Command + K Command + F",
          },
          {
            label: "跳转到声明位置",
            value: "F12",
          },
          {
            label: "查看具体声明内容",
            value: "Option + F12",
          },
          {
            label: "分屏查看具体声明内容",
            value: "Command + K F12",
          },
          {
            label: "快速修复",
            value: "Command + .",
          },
          {
            label: "显示引用",
            value: "Shift + F12",
          },
          {
            label: "重命名符号",
            value: "F2",
          },
          {
            label: "替换为上一个值",
            value: "Command + Shift + .",
          },
          {
            label: "替换为下一个值",
            value: "Command + Shift + ,",
          },
          {
            label: "删除行尾多余空格",
            value: "Command + K Command + X",
          },
          {
            label: "更改文件语言",
            value: "Command + K M",
          },
        ],
      },
      {
        module: "文件管理",
        child: [
          {
            label: "新建文件",
            value: "Command + N",
          },
          {
            label: "打开文件",
            value: "Command + O",
          },
          {
            label: "保存文件",
            value: "Command + S",
          },
          {
            label: "另存为",
            value: "Command + Shift + S",
          },
          {
            label: "全部保存",
            value: "Command + Option + S",
          },
          {
            label: "关闭",
            value: "Command + W",
          },
          {
            label: "全部关闭",
            value: "Command + K Command + W",
          },
          {
            label: "重新打开被关闭的编辑器",
            value: "Command + Shift + T",
          },
          {
            label: "保持打开",
            value: "Command + K Enter",
          },
          {
            label: "打开下一个",
            value: "Ctrl + Tab",
          },
          {
            label: "打开上一个",
            value: "Ctrl + Shift + Tab",
          },
          {
            label: "复制当前文件路径",
            value: "Command + K P",
          },
          {
            label: "在资源管理器中查看当前文件",
            value: "Command + K R",
          },
          {
            label: "新窗口打开当前文件",
            value: "Command + K O",
          },
        ],
      },
      {
        module: "显示",
        child: [
          {
            label: "全屏、退出全屏",
            value: "Command + Ctrl + F",
          },
          {
            label: "切换编辑器分屏方式（横、竖）",
            value: "Command + Option + 1 ",
          },
          {
            label: "放大",
            value: "Command + +",
          },
          {
            label: "缩小",
            value: "Command + - ",
          },
          {
            label: "显示、隐藏侧边栏",
            value: "Command + B",
          },
          {
            label: "显示资源管理器 或 切换焦点",
            value: "Command + Shift + E",
          },
          {
            label: "显示搜索框",
            value: "Command + Shift + F",
          },
          {
            label: "显示Git面板",
            value: "Ctrl + Shift + G 显示Git面板",
          },
          {
            label: "显示调试面板",
            value: "Command + Shift + D",
          },
          {
            label: "显示插件面板",
            value: "Command + Shift + X",
          },
          {
            label: "全局搜索替换",
            value: "Command + Shift + H",
          },
          {
            label: "显示、隐藏高级搜索",
            value: "Command + Shift + J",
          },
          {
            label: "打开新终端",
            value: "Command + Shift + C",
          },
          {
            label: "显示输出面板",
            value: "Command + Shift + U",
          },
          {
            label: "Markdown预览窗口",
            value: "Command + Shift + V",
          },
          {
            label: "分屏显示 Markdown预览窗口",
            value: "Command + K V",
          },
        ],
      },
      {
        module: "调试",
        child: [
          {
            label: "设置 或 取消断点",
            value: "F9",
          },
          {
            label: "开始 或 继续",
            value: "F5",
          },
          {
            label: "进入",
            value: "F11",
          },
          {
            label: "跳出",
            value: "Shift + F11",
          },
          {
            label: "跳过",
            value: "F10",
          },
          {
            label: "显示悬停信息",
            value: "Command + K Command + I",
          },
        ],
      },
    ],
  },
];
