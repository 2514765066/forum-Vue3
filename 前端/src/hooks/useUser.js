import * as api from "@/api";
import { $bus } from "@/hooks/useBus";

export const Login = (title, data) => {
	api.post("/user/login", data).then(({ data }) => {
		if (data) {
			$bus.emit("loadClose", () => {
				$bus.emit("tipShow", {
					title: "登录成功",
				});
			});
			return;
		}
		$bus.emit("loadClose", () => {
			$bus.emit("tipShow", {
				title: "登录失败,请检查账号或密码",
				type: false,
			});
		});
	});
	$bus.emit("loadShow", {
		title,
	});
};

export const Register = (title, data) => {
	api.post("/user/register", data).then(({ data }) => {
		if (data) {
			$bus.emit("loadClose", () => {
				$bus.emit("tipShow", {
					title: "注册成功",
				});
			});
			Login();
			return;
		}
		$bus.emit("loadClose", () => {
			$bus.emit("tipShow", {
				title: "该账号已被注册",
				type: false,
			});
		});
	});
	$bus.emit("loadShow", {
		title,
	});
};
