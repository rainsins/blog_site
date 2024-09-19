import os
import subprocess


# 只提取html和js文件
def is_file(file_path):
    ext = os.path.splitext(file_path)[1]
    if ext.lower() == ".html" or ext.lower() == ".js":
        return True
    else:
        return False

def remove_duplicates(text):
    """
    使用set去重
    """
    chars = set(text)
    return ''.join(chars)

# 最后得到的字符集
results = ''

def recursive_walk(directory):
    global results
    
    # 遍历_site文件夹下的js和html文件
    for root, dirs, files in os.walk(directory):
        for file in files:
            if is_file(file):
                with open(os.path.join(root, file),'r', encoding="utf-8") as f :
                    # 读取文件
                    content = f.read()
                    # 文件字符去重
                    texts = remove_duplicates(content)
                    # 拼接起来
                    results += texts

    # 上面的去重是每个文件去重一次，这次是所有的文件字符合起来再去重，然后按照字符编码排序
    results = ''.join(sorted(remove_duplicates(results)))

    # 将字符写入txt
    with open(r"./updatefont/font.txt", 'a+', encoding="utf-8") as f: 
        # 清空txt
        f.seek(0)
        f.truncate()

        # 写入txt
        f.write(results)
    print(results)  

    # 使用js的Fontmin处理这些字符生成压缩过的字体文件，并上传COS
    subprocess.run(["node", "./updatefont/update_font.js"]) 

# 使用函数遍历指定目录
recursive_walk('./_site')