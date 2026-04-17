OpenClaw 接入指南
================

概览
----
- 服务端通过 Next.js API 路由代理到 OpenClaw，避免在浏览器暴露密钥。
- 当前采用后台调用模式，不提供前端控制台入口。

环境变量
--------
- OPENCLAW_API_BASE：OpenClaw 基础 URL，例如 https://api.openclaw.example
- OPENCLAW_API_KEY：OpenClaw 访问密钥
- OPENCLAW_COMMAND_PATH：命令调用路径，默认为 /v1/commands
- OPENCLAW_ADMIN_TOKEN：服务端接口访问令牌（必须）

文件结构
--------
- lib/openclawClient.js：OpenClaw 客户端封装
- pages/api/openclaw/command.js：服务端代理，POST { command, params }（需 Bearer Token）
- .env.example：环境变量样例

使用
----
1. 复制 .env.example 为 .env.local 并填写 OPENCLAW_API_BASE、OPENCLAW_API_KEY 与 OPENCLAW_ADMIN_TOKEN
2. 本地开发：npm run dev
3. 通过服务端接口调用进行验证

API 代理
--------
POST /api/openclaw/command
Headers：
- Authorization: Bearer ${OPENCLAW_ADMIN_TOKEN}
请求体：
{
  "command": "your.command",
  "params": { "k": "v" }
}
响应：
{ "ok": true, "data": ... } 或 { "ok": false, "code": "...", "error": "..." }

注意
----
- 不要在客户端记录或暴露 OPENCLAW_API_KEY。
- 保管好 OPENCLAW_ADMIN_TOKEN，仅后端或受控客户端持有。
