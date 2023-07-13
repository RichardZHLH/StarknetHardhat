
#学习资料

## 1. 环境创建
ubuntu20
$ python3.9 -m venv ~/cairo_venv
$ source ~/cairo_venv/bin/activate
$ sudo apt install -y libgmp3-dev
$ pip install cairo-lang
手动安装cairo编译器
$ git clone https://github.com/starkware-libs/cairo/ .cairo
$ cd .cairo/
$ git checkout tags/v1.0.0-alpha.6
$ cargo build --all --release

## 2. cairo中的hash
https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/
cairo中没有ethereum中最常用的sha256/sha3。 而且cairo中hash的结果是felt 类型, 不是u256.所以与ethereum不同用.
在cairo中支持3中hash
𝑠𝑛_𝑘𝑒𝑐𝑐𝑎𝑘:{0,1}∗→𝔽𝑝
𝑝𝑒𝑑𝑒𝑟𝑠𝑒𝑛:𝔽∗𝑝→𝔽𝑝
𝑝𝑜𝑠𝑒𝑖𝑑𝑜𝑛:𝔽∗𝑝→𝔽𝑝
在js中计算cairo的hash, 可以用starknet.js
https://www.starknetjs.com/docs/guides/signature
可以用hash.computeHashOnElements. 没有实际些代码测试.
另外, 网上有一些第三方实现的sha256.仅供参考
https://github.com/Th0rgal/sphinx/blob/master/src/sphinx/sha256.cairo
另一个keccak的实现
https://github.com/0xSpaceShard/Keccak_example/tree/main
这里讲了cairo里hash的对齐问题
https://www.spaceshard.io/blog/keccak-hash-cairo-vs-solidity

## 3. 项目工具. hardhat 
参考:https://book.starknet.io/chapter_3/hardhat.html
我写的git仓库: https://github.com/RichardZHLH/StarknetHardhat

## 4. 用startnet.js部署账户
参考: https://github.com/RichardZHLH/StarknetHardhat/blob/main/tools/deployAccount.js

## 5. 签名验证.
cairo里面的曲线和eth不同, 为了兼容mpc. 需要实现一个secp256k1曲线的验证函数


## 其他参考资料:
语言语法:  cairo2.0 
https://book.cairo-lang.org/title-page.html
早期版本的文档
https://www.cairo-lang.org/docs/hello_starknet/index.html
https://book.starknet.io/index.html
starknet.js文档:https://www.starknetjs.com/docs/guides/intro
cario语言rust实现
https://github.com/starkware-libs/cairo
cairo编译器下载
https://github.com/starkware-libs/cairo-lang/releases

openzipplin的erc20合约. 开发中的分支.
https://github.com/OpenZeppelin/cairo-contracts/blob/cairo-2/src/openzeppelin/token/erc20/erc20.cairo
ERC20 合约参考. 基于cairo1.0 版本
https://github.com/wangshouh/helloERC20
一个部署ERC20的参考网站,中文的.对比了cairo和solidity.
https://blog.wssh.trade/posts/cairo1-with-erc20/
合约与l2/l1信息沟通
https://blog.csdn.net/WongSSH/article/details/130311981
starkware实现了一个帮助defi/crosschain等的lib,不知道有没有参考作用
https://github.com/starkware-libs/starkware-crypto-utils/tree/master
可升级合约参考
https://medium.com/starknet-edu/creating-upgradable-smart-contracts-on-starknet-12b7d9bd60c7
openzipplin的参考合约, release只到0.6.1,基于cairo0.11 但是它也有开发中的分支,支持cairo1.0 cairo2.0
https://docs.openzeppelin.com/contracts-cairo/0.6.1/