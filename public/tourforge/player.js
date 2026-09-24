//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, n = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
//#endregion
//#region ../../node_modules/.pnpm/three@0.185.1/node_modules/three/build/three.core.js
function r(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function i(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function a(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function o() {
	let e = a("canvas");
	return e.style.display = "block", e;
}
function s(...e) {
	let t = "THREE." + e.shift();
	en ? en("log", t, ...e) : console.log(t, ...e);
}
function c(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function l(...e) {
	e = c(e);
	let t = "THREE." + e.shift();
	if (en) en("warn", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function u(...e) {
	e = c(e);
	let t = "THREE." + e.shift();
	if (en) en("error", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function d(...e) {
	let t = e.join(" ");
	t in $t || ($t[t] = !0, l(...e));
}
function f(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
function p() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (rn[e & 255] + rn[e >> 8 & 255] + rn[e >> 16 & 255] + rn[e >> 24 & 255] + "-" + rn[t & 255] + rn[t >> 8 & 255] + "-" + rn[t >> 16 & 15 | 64] + rn[t >> 24 & 255] + "-" + rn[n & 63 | 128] + rn[n >> 8 & 255] + "-" + rn[n >> 16 & 255] + rn[n >> 24 & 255] + rn[r & 255] + rn[r >> 8 & 255] + rn[r >> 16 & 255] + rn[r >> 24 & 255]).toLowerCase();
}
function m(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function h(e, t) {
	return (e % t + t) % t;
}
function g(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function _(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function v(e, t, n) {
	return (1 - n) * e + n * t;
}
function y(e, t, n, r) {
	return v(e, t, 1 - Math.exp(-n * r));
}
function b(e, t = 1) {
	return t - Math.abs(h(e, t * 2) - t);
}
function x(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function S(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function C(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function w(e, t) {
	return e + Math.random() * (t - e);
}
function T(e) {
	return e * (.5 - Math.random());
}
function E(e) {
	e !== void 0 && (an = e);
	let t = an += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function D(e) {
	return e * on;
}
function O(e) {
	return e * sn;
}
function k(e) {
	return !(e & e - 1) && e !== 0;
}
function A(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function ee(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function te(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), u = a((t + r) / 2), d = o((t + r) / 2), f = a((t - r) / 2), p = o((t - r) / 2), m = a((r - t) / 2), h = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * d, c * f, c * p, s * u);
			break;
		case "YZY":
			e.set(c * p, s * d, c * f, s * u);
			break;
		case "ZXZ":
			e.set(c * f, c * p, s * d, s * u);
			break;
		case "XZX":
			e.set(s * d, c * h, c * m, s * u);
			break;
		case "YXY":
			e.set(c * m, s * d, c * h, s * u);
			break;
		case "ZYZ":
			e.set(c * h, c * m, s * d, s * u);
			break;
		default: l("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function ne(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
function j(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
function re() {
	let e = {
		enabled: !0,
		workingColorSpace: Kt,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n ? e : (this.spaces[t].transfer === "srgb" && (e.r = ie(e.r), e.g = ie(e.g), e.b = ie(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = ae(e.r), e.g = ae(e.g), e.b = ae(e.b)), e);
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? qt : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return d("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return d("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[Kt]: {
			primaries: t,
			whitePoint: r,
			transfer: qt,
			toXYZ: pn,
			fromXYZ: mn,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: Gt },
			outputColorSpaceConfig: { drawingBufferColorSpace: Gt }
		},
		[Gt]: {
			primaries: t,
			whitePoint: r,
			transfer: Jt,
			toXYZ: pn,
			fromXYZ: mn,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: Gt }
		}
	}), e;
}
function ie(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function ae(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
function M(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? gn.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (l("Texture: Unable to serialize Texture."), {});
}
function oe(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
function se(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		Fr.fromArray(e, a);
		let o = i.x * Math.abs(Fr.x) + i.y * Math.abs(Fr.y) + i.z * Math.abs(Fr.z), s = t.dot(Fr), c = n.dot(Fr), l = r.dot(Fr);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
function ce(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	Ti.copy(s), Ti.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(Ti);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: Ti.clone(),
		object: e
	};
}
function le(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, yi), e.getVertexPosition(c, bi), e.getVertexPosition(l, xi);
	let u = ce(e, t, n, r, yi, bi, xi, wi);
	if (u) {
		let e = new V();
		xr.getBarycoord(wi, yi, bi, xi, e), i && (u.uv = xr.getInterpolatedAttribute(i, s, c, l, e, new B())), a && (u.uv1 = xr.getInterpolatedAttribute(a, s, c, l, e, new B())), o && (u.normal = xr.getInterpolatedAttribute(o, s, c, l, e, new V()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new V(),
			materialIndex: 0
		};
		xr.getNormal(yi, bi, xi, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
function ue(e, t, n, r, i, a, o) {
	let s = e.geometry.attributes.position;
	if (oa.fromBufferAttribute(s, i), sa.fromBufferAttribute(s, a), n.distanceSqToSegment(oa, sa, da, fa) > r) return;
	da.applyMatrix4(e.matrixWorld);
	let c = t.ray.origin.distanceTo(da);
	if (!(c < t.near || c > t.far)) return {
		distance: c,
		point: fa.clone().applyMatrix4(e.matrixWorld),
		index: o,
		face: null,
		faceIndex: null,
		barycoord: null,
		object: e
	};
}
function de(e, t, n, r, i, a, o) {
	let s = ba.distanceSqToPoint(e);
	if (s < n) {
		let n = new V();
		ba.closestPointToPoint(e, n), n.applyMatrix4(r);
		let c = i.ray.origin.distanceTo(n);
		if (c < i.near || c > i.far) return;
		a.push({
			distance: c,
			distanceToRay: Math.sqrt(s),
			point: n,
			index: t,
			face: null,
			faceIndex: null,
			barycoord: null,
			object: o
		});
	}
}
function fe(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (pe(i)) i.isRenderTargetTexture ? (l("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) {
				if (pe(i[0])) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
					t[n][r] = e;
				} else t[n][r] = i.slice();
			} else t[n][r] = i;
		}
	}
	return t;
}
function N(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = fe(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function pe(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function me(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function he(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : U.workingColorSpace;
}
function ge(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function _e(e) {
	function t(t, n) {
		return e[t] - e[n];
	}
	let n = e.length, r = Array(n);
	for (let e = 0; e !== n; ++e) r[e] = e;
	return r.sort(t), r;
}
function ve(e, t, n) {
	let r = e.length, i = new e.constructor(r);
	for (let a = 0, o = 0; o !== r; ++a) {
		let r = n[a] * t;
		for (let n = 0; n !== t; ++n) i[o++] = e[r + n];
	}
	return i;
}
function ye(e, t, n, r) {
	let i = 1, a = e[0];
	for (; a !== void 0 && a[r] === void 0;) a = e[i++];
	if (a === void 0) return;
	let o = a[r];
	if (o !== void 0) {
		if (Array.isArray(o)) do
			o = a[r], o !== void 0 && (t.push(a.time), n.push(...o)), a = e[i++];
		while (a !== void 0);
		else if (o.toArray !== void 0) do
			o = a[r], o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), a = e[i++];
		while (a !== void 0);
		else do
			o = a[r], o !== void 0 && (t.push(a.time), n.push(o)), a = e[i++];
		while (a !== void 0);
	}
}
function be(e) {
	switch (e.toLowerCase()) {
		case "scalar":
		case "double":
		case "float":
		case "number":
		case "integer": return Qa;
		case "vector":
		case "vector2":
		case "vector3":
		case "vector4": return no;
		case "color": return Za;
		case "quaternion": return eo;
		case "bool":
		case "boolean": return Xa;
		case "string": return to;
	}
	throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function xe(e) {
	if (e.type === void 0) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
	let t = be(e.type);
	if (e.times === void 0) {
		let t = [], n = [];
		ye(e.keys, t, n, "value"), e.times = t, e.values = n;
	}
	return t.parse === void 0 ? new t(e.name, e.times, e.values, e.interpolation) : t.parse(e);
}
function Se(e) {
	try {
		let t = e.slice(e.indexOf(":") + 1);
		return new URL(t).protocol === "blob:";
	} catch {
		return !1;
	}
}
function Ce(e, t) {
	return e.distance - t.distance;
}
function we(e, t, n, r) {
	let i = !0;
	if (e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0) {
		let r = e.children;
		for (let e = 0, i = r.length; e < i; e++) we(r[e], t, n, !0);
	}
}
function Te(e, t, n, r) {
	let i = Ee(r);
	switch (n) {
		case We: return e * t;
		case Ye: return e * t / i.components * i.byteLength;
		case Xe: return e * t / i.components * i.byteLength;
		case Ze: return e * t * 2 / i.components * i.byteLength;
		case Qe: return e * t * 2 / i.components * i.byteLength;
		case Ge: return e * t * 3 / i.components * i.byteLength;
		case Ke: return e * t * 4 / i.components * i.byteLength;
		case $e: return e * t * 4 / i.components * i.byteLength;
		case et:
		case tt: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case nt:
		case rt: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case at:
		case st: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case it:
		case ot: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case ct:
		case lt:
		case dt:
		case ft: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case ut:
		case pt:
		case mt: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case ht: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case gt: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case _t: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case vt: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case yt: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case bt: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case xt: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case St: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case Ct: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case wt: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case Tt: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case Et: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case Dt: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case Ot: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case kt:
		case At:
		case jt: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case Mt:
		case Nt: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case Pt:
		case Ft: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function Ee(e) {
	switch (e) {
		case Me:
		case z: return {
			byteLength: 1,
			components: 1
		};
		case Pe:
		case Ne:
		case Re: return {
			byteLength: 2,
			components: 1
		};
		case ze:
		case Be: return {
			byteLength: 2,
			components: 4
		};
		case Ie:
		case Fe:
		case Le: return {
			byteLength: 4,
			components: 1
		};
		case He:
		case Ue: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
var De, Oe, P, ke, F, Ae, I, L, R, je, Me, z, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, B, ln, V, un, dn, H, fn, pn, mn, U, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, W, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, G, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns = t((() => {
	De = "attached", Oe = 1e3, P = 1001, ke = 1002, F = 1003, Ae = 1004, I = 1005, L = 1006, R = 1007, je = 1008, Me = 1009, z = 1010, Ne = 1011, Pe = 1012, Fe = 1013, Ie = 1014, Le = 1015, Re = 1016, ze = 1017, Be = 1018, Ve = 1020, He = 35902, Ue = 35899, We = 1021, Ge = 1022, Ke = 1023, qe = 1026, Je = 1027, Ye = 1028, Xe = 1029, Ze = 1030, Qe = 1031, $e = 1033, et = 33776, tt = 33777, nt = 33778, rt = 33779, it = 35840, at = 35841, ot = 35842, st = 35843, ct = 36196, lt = 37492, ut = 37496, dt = 37488, ft = 37489, pt = 37490, mt = 37491, ht = 37808, gt = 37809, _t = 37810, vt = 37811, yt = 37812, bt = 37813, xt = 37814, St = 37815, Ct = 37816, wt = 37817, Tt = 37818, Et = 37819, Dt = 37820, Ot = 37821, kt = 36492, At = 36494, jt = 36495, Mt = 36283, Nt = 36284, Pt = 36285, Ft = 36286, It = 2300, Lt = 2301, Rt = 2302, zt = 2303, Bt = 2400, Vt = 2401, Ht = 2402, Ut = 2500, Wt = 3200, Gt = "srgb", Kt = "srgb-linear", qt = "linear", Jt = "srgb", Yt = 7680, Xt = 35044, Zt = "300 es", Qt = 2e3, $t = {}, en = null, tn = {
		0: 1,
		2: 6,
		4: 7,
		3: 5,
		1: 0,
		6: 2,
		7: 4,
		5: 3
	}, nn = class {
		addEventListener(e, t) {
			this._listeners === void 0 && (this._listeners = {});
			let n = this._listeners;
			n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
		}
		hasEventListener(e, t) {
			let n = this._listeners;
			return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
		}
		removeEventListener(e, t) {
			let n = this._listeners;
			if (n === void 0) return;
			let r = n[e];
			if (r !== void 0) {
				let e = r.indexOf(t);
				e !== -1 && r.splice(e, 1);
			}
		}
		dispatchEvent(e) {
			let t = this._listeners;
			if (t === void 0) return;
			let n = t[e.type];
			if (n !== void 0) {
				e.target = this;
				let t = n.slice(0);
				for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
				e.target = null;
			}
		}
	}, rn = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), an = 1234567, on = Math.PI / 180, sn = 180 / Math.PI, cn = {
		DEG2RAD: on,
		RAD2DEG: sn,
		generateUUID: p,
		clamp: m,
		euclideanModulo: h,
		mapLinear: g,
		inverseLerp: _,
		lerp: v,
		damp: y,
		pingpong: b,
		smoothstep: x,
		smootherstep: S,
		randInt: C,
		randFloat: w,
		randFloatSpread: T,
		seededRandom: E,
		degToRad: D,
		radToDeg: O,
		isPowerOfTwo: k,
		ceilPowerOfTwo: A,
		floorPowerOfTwo: ee,
		setQuaternionFromProperEuler: te,
		normalize: j,
		denormalize: ne
	}, B = class e {
		static {
			e.prototype.isVector2 = !0;
		}
		constructor(e = 0, t = 0) {
			this.x = e, this.y = t;
		}
		get width() {
			return this.x;
		}
		set width(e) {
			this.x = e;
		}
		get height() {
			return this.y;
		}
		set height(e) {
			this.y = e;
		}
		set(e, t) {
			return this.x = e, this.y = t, this;
		}
		setScalar(e) {
			return this.x = e, this.y = e, this;
		}
		setX(e) {
			return this.x = e, this;
		}
		setY(e) {
			return this.y = e, this;
		}
		setComponent(e, t) {
			switch (e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				default: throw Error("THREE.Vector2: index is out of range: " + e);
			}
			return this;
		}
		getComponent(e) {
			switch (e) {
				case 0: return this.x;
				case 1: return this.y;
				default: throw Error("THREE.Vector2: index is out of range: " + e);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y);
		}
		copy(e) {
			return this.x = e.x, this.y = e.y, this;
		}
		add(e) {
			return this.x += e.x, this.y += e.y, this;
		}
		addScalar(e) {
			return this.x += e, this.y += e, this;
		}
		addVectors(e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this;
		}
		addScaledVector(e, t) {
			return this.x += e.x * t, this.y += e.y * t, this;
		}
		sub(e) {
			return this.x -= e.x, this.y -= e.y, this;
		}
		subScalar(e) {
			return this.x -= e, this.y -= e, this;
		}
		subVectors(e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this;
		}
		multiply(e) {
			return this.x *= e.x, this.y *= e.y, this;
		}
		multiplyScalar(e) {
			return this.x *= e, this.y *= e, this;
		}
		divide(e) {
			return this.x /= e.x, this.y /= e.y, this;
		}
		divideScalar(e) {
			return this.multiplyScalar(1 / e);
		}
		applyMatrix3(e) {
			let t = this.x, n = this.y, r = e.elements;
			return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
		}
		min(e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
		}
		max(e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
		}
		clamp(e, t) {
			return this.x = m(this.x, e.x, t.x), this.y = m(this.y, e.y, t.y), this;
		}
		clampScalar(e, t) {
			return this.x = m(this.x, e, t), this.y = m(this.y, e, t), this;
		}
		clampLength(e, t) {
			let n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(m(n, e, t));
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
		}
		roundToZero() {
			return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this;
		}
		dot(e) {
			return this.x * e.x + this.y * e.y;
		}
		cross(e) {
			return this.x * e.y - this.y * e.x;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		angle() {
			return Math.atan2(-this.y, -this.x) + Math.PI;
		}
		angleTo(e) {
			let t = Math.sqrt(this.lengthSq() * e.lengthSq());
			if (t === 0) return Math.PI / 2;
			let n = this.dot(e) / t;
			return Math.acos(m(n, -1, 1));
		}
		distanceTo(e) {
			return Math.sqrt(this.distanceToSquared(e));
		}
		distanceToSquared(e) {
			let t = this.x - e.x, n = this.y - e.y;
			return t * t + n * n;
		}
		manhattanDistanceTo(e) {
			return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
		}
		setLength(e) {
			return this.normalize().multiplyScalar(e);
		}
		lerp(e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
		}
		lerpVectors(e, t, n) {
			return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
		}
		equals(e) {
			return e.x === this.x && e.y === this.y;
		}
		fromArray(e, t = 0) {
			return this.x = e[t], this.y = e[t + 1], this;
		}
		toArray(e = [], t = 0) {
			return e[t] = this.x, e[t + 1] = this.y, e;
		}
		fromBufferAttribute(e, t) {
			return this.x = e.getX(t), this.y = e.getY(t), this;
		}
		rotateAround(e, t) {
			let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
			return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y;
		}
	}, ln = class {
		constructor(e = 0, t = 0, n = 0, r = 1) {
			this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
		}
		static slerpFlat(e, t, n, r, i, a, o) {
			let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
			if (u !== m || s !== d || c !== f || l !== p) {
				let e = s * d + c * f + l * p + u * m;
				e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
				let t = 1 - o;
				if (e < .9995) {
					let n = Math.acos(e), r = Math.sin(n);
					t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				} else {
					s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
					let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
					s *= e, c *= e, l *= e, u *= e;
				}
			}
			e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
		}
		static multiplyQuaternionsFlat(e, t, n, r, i, a) {
			let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
			return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
		}
		get x() {
			return this._x;
		}
		set x(e) {
			this._x = e, this._onChangeCallback();
		}
		get y() {
			return this._y;
		}
		set y(e) {
			this._y = e, this._onChangeCallback();
		}
		get z() {
			return this._z;
		}
		set z(e) {
			this._z = e, this._onChangeCallback();
		}
		get w() {
			return this._w;
		}
		set w(e) {
			this._w = e, this._onChangeCallback();
		}
		set(e, t, n, r) {
			return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._w);
		}
		copy(e) {
			return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
		}
		setFromEuler(e, t = !0) {
			let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), u = o(r / 2), d = o(i / 2), f = s(n / 2), p = s(r / 2), m = s(i / 2);
			switch (a) {
				case "XYZ":
					this._x = f * u * d + c * p * m, this._y = c * p * d - f * u * m, this._z = c * u * m + f * p * d, this._w = c * u * d - f * p * m;
					break;
				case "YXZ":
					this._x = f * u * d + c * p * m, this._y = c * p * d - f * u * m, this._z = c * u * m - f * p * d, this._w = c * u * d + f * p * m;
					break;
				case "ZXY":
					this._x = f * u * d - c * p * m, this._y = c * p * d + f * u * m, this._z = c * u * m + f * p * d, this._w = c * u * d - f * p * m;
					break;
				case "ZYX":
					this._x = f * u * d - c * p * m, this._y = c * p * d + f * u * m, this._z = c * u * m - f * p * d, this._w = c * u * d + f * p * m;
					break;
				case "YZX":
					this._x = f * u * d + c * p * m, this._y = c * p * d + f * u * m, this._z = c * u * m - f * p * d, this._w = c * u * d - f * p * m;
					break;
				case "XZY":
					this._x = f * u * d - c * p * m, this._y = c * p * d - f * u * m, this._z = c * u * m + f * p * d, this._w = c * u * d + f * p * m;
					break;
				default: l("Quaternion: .setFromEuler() encountered an unknown order: " + a);
			}
			return t === !0 && this._onChangeCallback(), this;
		}
		setFromAxisAngle(e, t) {
			let n = t / 2, r = Math.sin(n);
			return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
		}
		setFromRotationMatrix(e) {
			let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
			if (d > 0) {
				let e = .5 / Math.sqrt(d + 1);
				this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
			} else if (n > o && n > u) {
				let e = 2 * Math.sqrt(1 + n - o - u);
				this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
			} else if (o > u) {
				let e = 2 * Math.sqrt(1 + o - n - u);
				this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
			} else {
				let e = 2 * Math.sqrt(1 + u - n - o);
				this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
			}
			return this._onChangeCallback(), this;
		}
		setFromUnitVectors(e, t) {
			let n = e.dot(t) + 1;
			return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
		}
		angleTo(e) {
			return 2 * Math.acos(Math.abs(m(this.dot(e), -1, 1)));
		}
		rotateTowards(e, t) {
			let n = this.angleTo(e);
			if (n === 0) return this;
			let r = Math.min(1, t / n);
			return this.slerp(e, r), this;
		}
		identity() {
			return this.set(0, 0, 0, 1);
		}
		invert() {
			return this.conjugate();
		}
		conjugate() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
		}
		dot(e) {
			return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
		}
		lengthSq() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
		}
		length() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
		}
		normalize() {
			let e = this.length();
			return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
		}
		multiply(e) {
			return this.multiplyQuaternions(this, e);
		}
		premultiply(e) {
			return this.multiplyQuaternions(e, this);
		}
		multiplyQuaternions(e, t) {
			let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
			return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
		}
		slerp(e, t) {
			let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
			o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
			let s = 1 - t;
			if (o < .9995) {
				let e = Math.acos(o), c = Math.sin(e);
				s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
			} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
			return this;
		}
		slerpQuaternions(e, t, n) {
			return this.copy(e).slerp(t, n);
		}
		random() {
			let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
			return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
		}
		equals(e) {
			return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
		}
		fromArray(e, t = 0) {
			return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
		}
		toArray(e = [], t = 0) {
			return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
		}
		fromBufferAttribute(e, t) {
			return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
		}
		toJSON() {
			return this.toArray();
		}
		_onChange(e) {
			return this._onChangeCallback = e, this;
		}
		_onChangeCallback() {}
		*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._w;
		}
	}, V = class e {
		static {
			e.prototype.isVector3 = !0;
		}
		constructor(e = 0, t = 0, n = 0) {
			this.x = e, this.y = t, this.z = n;
		}
		set(e, t, n) {
			return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
		}
		setScalar(e) {
			return this.x = e, this.y = e, this.z = e, this;
		}
		setX(e) {
			return this.x = e, this;
		}
		setY(e) {
			return this.y = e, this;
		}
		setZ(e) {
			return this.z = e, this;
		}
		setComponent(e, t) {
			switch (e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				case 2:
					this.z = t;
					break;
				default: throw Error("THREE.Vector3: index is out of range: " + e);
			}
			return this;
		}
		getComponent(e) {
			switch (e) {
				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				default: throw Error("THREE.Vector3: index is out of range: " + e);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z);
		}
		copy(e) {
			return this.x = e.x, this.y = e.y, this.z = e.z, this;
		}
		add(e) {
			return this.x += e.x, this.y += e.y, this.z += e.z, this;
		}
		addScalar(e) {
			return this.x += e, this.y += e, this.z += e, this;
		}
		addVectors(e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
		}
		addScaledVector(e, t) {
			return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
		}
		sub(e) {
			return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
		}
		subScalar(e) {
			return this.x -= e, this.y -= e, this.z -= e, this;
		}
		subVectors(e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
		}
		multiply(e) {
			return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
		}
		multiplyScalar(e) {
			return this.x *= e, this.y *= e, this.z *= e, this;
		}
		multiplyVectors(e, t) {
			return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
		}
		applyEuler(e) {
			return this.applyQuaternion(dn.setFromEuler(e));
		}
		applyAxisAngle(e, t) {
			return this.applyQuaternion(dn.setFromAxisAngle(e, t));
		}
		applyMatrix3(e) {
			let t = this.x, n = this.y, r = this.z, i = e.elements;
			return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
		}
		applyNormalMatrix(e) {
			return this.applyMatrix3(e).normalize();
		}
		applyMatrix4(e) {
			let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
			return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
		}
		applyQuaternion(e) {
			let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
			return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
		}
		project(e) {
			return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
		}
		unproject(e) {
			return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
		}
		transformDirection(e) {
			let t = this.x, n = this.y, r = this.z, i = e.elements;
			return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
		}
		divide(e) {
			return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
		}
		divideScalar(e) {
			return this.multiplyScalar(1 / e);
		}
		min(e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
		}
		max(e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
		}
		clamp(e, t) {
			return this.x = m(this.x, e.x, t.x), this.y = m(this.y, e.y, t.y), this.z = m(this.z, e.z, t.z), this;
		}
		clampScalar(e, t) {
			return this.x = m(this.x, e, t), this.y = m(this.y, e, t), this.z = m(this.z, e, t), this;
		}
		clampLength(e, t) {
			let n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(m(n, e, t));
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
		}
		roundToZero() {
			return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
		}
		dot(e) {
			return this.x * e.x + this.y * e.y + this.z * e.z;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		setLength(e) {
			return this.normalize().multiplyScalar(e);
		}
		lerp(e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
		}
		lerpVectors(e, t, n) {
			return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
		}
		cross(e) {
			return this.crossVectors(this, e);
		}
		crossVectors(e, t) {
			let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
			return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
		}
		projectOnVector(e) {
			let t = e.lengthSq();
			if (t === 0) return this.set(0, 0, 0);
			let n = e.dot(this) / t;
			return this.copy(e).multiplyScalar(n);
		}
		projectOnPlane(e) {
			return un.copy(this).projectOnVector(e), this.sub(un);
		}
		reflect(e) {
			return this.sub(un.copy(e).multiplyScalar(2 * this.dot(e)));
		}
		angleTo(e) {
			let t = Math.sqrt(this.lengthSq() * e.lengthSq());
			if (t === 0) return Math.PI / 2;
			let n = this.dot(e) / t;
			return Math.acos(m(n, -1, 1));
		}
		distanceTo(e) {
			return Math.sqrt(this.distanceToSquared(e));
		}
		distanceToSquared(e) {
			let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
			return t * t + n * n + r * r;
		}
		manhattanDistanceTo(e) {
			return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
		}
		setFromSpherical(e) {
			return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
		}
		setFromSphericalCoords(e, t, n) {
			let r = Math.sin(t) * e;
			return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
		}
		setFromCylindrical(e) {
			return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
		}
		setFromCylindricalCoords(e, t, n) {
			return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
		}
		setFromMatrixPosition(e) {
			let t = e.elements;
			return this.x = t[12], this.y = t[13], this.z = t[14], this;
		}
		setFromMatrixScale(e) {
			let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
			return this.x = t, this.y = n, this.z = r, this;
		}
		setFromMatrixColumn(e, t) {
			return this.fromArray(e.elements, t * 4);
		}
		setFromMatrix3Column(e, t) {
			return this.fromArray(e.elements, t * 3);
		}
		setFromEuler(e) {
			return this.x = e._x, this.y = e._y, this.z = e._z, this;
		}
		setFromColor(e) {
			return this.x = e.r, this.y = e.g, this.z = e.b, this;
		}
		equals(e) {
			return e.x === this.x && e.y === this.y && e.z === this.z;
		}
		fromArray(e, t = 0) {
			return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
		}
		toArray(e = [], t = 0) {
			return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
		}
		fromBufferAttribute(e, t) {
			return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
		}
		randomDirection() {
			let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
			return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z;
		}
	}, un = /*@__PURE__*/ new V(), dn = /*@__PURE__*/ new ln(), H = class e {
		static {
			e.prototype.isMatrix3 = !0;
		}
		constructor(e, t, n, r, i, a, o, s, c) {
			this.elements = [
				1,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				1
			], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
		}
		set(e, t, n, r, i, a, o, s, c) {
			let l = this.elements;
			return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
		}
		identity() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
		}
		copy(e) {
			let t = this.elements, n = e.elements;
			return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
		}
		extractBasis(e, t, n) {
			return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
		}
		setFromMatrix4(e) {
			let t = e.elements;
			return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
		}
		multiply(e) {
			return this.multiplyMatrices(this, e);
		}
		premultiply(e) {
			return this.multiplyMatrices(e, this);
		}
		multiplyMatrices(e, t) {
			let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
			return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
		}
		multiplyScalar(e) {
			let t = this.elements;
			return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
		}
		determinant() {
			let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
			return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
		}
		invert() {
			let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
			if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			let m = 1 / p;
			return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
		}
		transpose() {
			let e, t = this.elements;
			return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
		}
		getNormalMatrix(e) {
			return this.setFromMatrix4(e).invert().transpose();
		}
		transposeIntoArray(e) {
			let t = this.elements;
			return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
		}
		setUvTransform(e, t, n, r, i, a, o) {
			let s = Math.cos(i), c = Math.sin(i);
			return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
		}
		scale(e, t) {
			return d("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(fn.makeScale(e, t)), this;
		}
		rotate(e) {
			return d("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(fn.makeRotation(-e)), this;
		}
		translate(e, t) {
			return d("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(fn.makeTranslation(e, t)), this;
		}
		makeTranslation(e, t) {
			return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
		}
		makeRotation(e) {
			let t = Math.cos(e), n = Math.sin(e);
			return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
		}
		makeScale(e, t) {
			return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
		}
		equals(e) {
			let t = this.elements, n = e.elements;
			for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
			return !0;
		}
		fromArray(e, t = 0) {
			for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
			return this;
		}
		toArray(e = [], t = 0) {
			let n = this.elements;
			return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
		}
		clone() {
			return new this.constructor().fromArray(this.elements);
		}
	}, fn = /*@__PURE__*/ new H(), pn = /*@__PURE__*/ new H().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), mn = /*@__PURE__*/ new H().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715), U = /*@__PURE__*/ re(), gn = class {
		static getDataURL(e, t = "image/png") {
			if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
			let n;
			if (e instanceof HTMLCanvasElement) n = e;
			else {
				hn === void 0 && (hn = a("canvas")), hn.width = e.width, hn.height = e.height;
				let t = hn.getContext("2d");
				e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = hn;
			}
			return n.toDataURL(t);
		}
		static sRGBToLinear(e) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
				let t = a("canvas");
				t.width = e.width, t.height = e.height;
				let n = t.getContext("2d");
				n.drawImage(e, 0, 0, e.width, e.height);
				let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
				for (let e = 0; e < i.length; e++) i[e] = ie(i[e] / 255) * 255;
				return n.putImageData(r, 0, 0), t;
			}
			if (e.data) {
				let t = e.data.slice(0);
				for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(ie(t[e] / 255) * 255) : t[e] = ie(t[e]);
				return {
					data: t,
					width: e.width,
					height: e.height
				};
			}
			return l("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
		}
	}, _n = 0, vn = class {
		constructor(e = null) {
			this.isSource = !0, Object.defineProperty(this, "id", { value: _n++ }), this.uuid = p(), this.data = e, this.dataReady = !0, this.version = 0;
		}
		getSize(e) {
			let t = this.data;
			return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
		}
		set needsUpdate(e) {
			e === !0 && this.version++;
		}
		toJSON(e) {
			let t = e === void 0 || typeof e == "string";
			if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
			let n = {
				uuid: this.uuid,
				url: ""
			}, r = this.data;
			if (r !== null) {
				let e;
				if (Array.isArray(r)) {
					e = [];
					for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(M(r[t].image)) : e.push(M(r[t]));
				} else e = M(r);
				n.url = e;
			}
			return t || (e.images[this.uuid] = n), n;
		}
	}, yn = 0, bn = /*@__PURE__*/ new V(), xn = class e extends nn {
		constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = P, i = P, a = L, o = je, s = Ke, c = Me, l = e.DEFAULT_ANISOTROPY, u = "") {
			super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: yn++ }), this.uuid = p(), this.name = "", this.source = new vn(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new B(0, 0), this.repeat = new B(1, 1), this.center = new B(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new H(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
		}
		get width() {
			return this.source.getSize(bn).x;
		}
		get height() {
			return this.source.getSize(bn).y;
		}
		get depth() {
			return this.source.getSize(bn).z;
		}
		get image() {
			return this.source.data;
		}
		set image(e) {
			this.source.data = e;
		}
		updateMatrix() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
		}
		addUpdateRange(e, t) {
			this.updateRanges.push({
				start: e,
				count: t
			});
		}
		clearUpdateRanges() {
			this.updateRanges.length = 0;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(e) {
			return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
		}
		setValues(e) {
			for (let t in e) {
				let n = e[t];
				if (n === void 0) {
					l(`Texture.setValues(): parameter '${t}' has value of undefined.`);
					continue;
				}
				let r = this[t];
				if (r === void 0) {
					l(`Texture.setValues(): property '${t}' does not exist.`);
					continue;
				}
				r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
			}
		}
		toJSON(e) {
			let t = e === void 0 || typeof e == "string";
			if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
			let n = {
				metadata: {
					version: 4.7,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				image: this.source.toJSON(e).uuid,
				mapping: this.mapping,
				channel: this.channel,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				internalFormat: this.internalFormat,
				type: this.type,
				normalized: this.normalized,
				colorSpace: this.colorSpace,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				generateMipmaps: this.generateMipmaps,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment
			};
			return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
		transformUv(e) {
			if (this.mapping !== 300) return e;
			if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
				case Oe:
					e.x -= Math.floor(e.x);
					break;
				case P:
					e.x = e.x < 0 ? 0 : 1;
					break;
				case ke: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
			}
			if (e.y < 0 || e.y > 1) switch (this.wrapT) {
				case Oe:
					e.y -= Math.floor(e.y);
					break;
				case P:
					e.y = e.y < 0 ? 0 : 1;
					break;
				case ke: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
			}
			return this.flipY && (e.y = 1 - e.y), e;
		}
		set needsUpdate(e) {
			e === !0 && (this.version++, this.source.needsUpdate = !0);
		}
		set needsPMREMUpdate(e) {
			e === !0 && this.pmremVersion++;
		}
	}, xn.DEFAULT_IMAGE = null, xn.DEFAULT_MAPPING = 300, xn.DEFAULT_ANISOTROPY = 1, Sn = class e {
		static {
			e.prototype.isVector4 = !0;
		}
		constructor(e = 0, t = 0, n = 0, r = 1) {
			this.x = e, this.y = t, this.z = n, this.w = r;
		}
		get width() {
			return this.z;
		}
		set width(e) {
			this.z = e;
		}
		get height() {
			return this.w;
		}
		set height(e) {
			this.w = e;
		}
		set(e, t, n, r) {
			return this.x = e, this.y = t, this.z = n, this.w = r, this;
		}
		setScalar(e) {
			return this.x = e, this.y = e, this.z = e, this.w = e, this;
		}
		setX(e) {
			return this.x = e, this;
		}
		setY(e) {
			return this.y = e, this;
		}
		setZ(e) {
			return this.z = e, this;
		}
		setW(e) {
			return this.w = e, this;
		}
		setComponent(e, t) {
			switch (e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				case 2:
					this.z = t;
					break;
				case 3:
					this.w = t;
					break;
				default: throw Error("THREE.Vector4: index is out of range: " + e);
			}
			return this;
		}
		getComponent(e) {
			switch (e) {
				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				case 3: return this.w;
				default: throw Error("THREE.Vector4: index is out of range: " + e);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z, this.w);
		}
		copy(e) {
			return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
		}
		add(e) {
			return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
		}
		addScalar(e) {
			return this.x += e, this.y += e, this.z += e, this.w += e, this;
		}
		addVectors(e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
		}
		addScaledVector(e, t) {
			return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
		}
		sub(e) {
			return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
		}
		subScalar(e) {
			return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
		}
		subVectors(e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
		}
		multiply(e) {
			return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
		}
		multiplyScalar(e) {
			return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
		}
		applyMatrix4(e) {
			let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
			return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
		}
		divide(e) {
			return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
		}
		divideScalar(e) {
			return this.multiplyScalar(1 / e);
		}
		setAxisAngleFromQuaternion(e) {
			this.w = 2 * Math.acos(e.w);
			let t = Math.sqrt(1 - e.w * e.w);
			return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
		}
		setAxisAngleFromRotationMatrix(e) {
			let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
			if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
				if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
				t = Math.PI;
				let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
				return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
			}
			let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
			return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
		}
		setFromMatrixPosition(e) {
			let t = e.elements;
			return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
		}
		min(e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
		}
		max(e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
		}
		clamp(e, t) {
			return this.x = m(this.x, e.x, t.x), this.y = m(this.y, e.y, t.y), this.z = m(this.z, e.z, t.z), this.w = m(this.w, e.w, t.w), this;
		}
		clampScalar(e, t) {
			return this.x = m(this.x, e, t), this.y = m(this.y, e, t), this.z = m(this.z, e, t), this.w = m(this.w, e, t), this;
		}
		clampLength(e, t) {
			let n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(m(n, e, t));
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
		}
		roundToZero() {
			return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
		}
		dot(e) {
			return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		setLength(e) {
			return this.normalize().multiplyScalar(e);
		}
		lerp(e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
		}
		lerpVectors(e, t, n) {
			return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
		}
		equals(e) {
			return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
		}
		fromArray(e, t = 0) {
			return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
		}
		toArray(e = [], t = 0) {
			return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
		}
		fromBufferAttribute(e, t) {
			return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z, yield this.w;
		}
	}, Cn = class extends nn {
		constructor(e = 1, t = 1, n = {}) {
			super(), n = Object.assign({
				generateMipmaps: !1,
				internalFormat: null,
				minFilter: L,
				depthBuffer: !0,
				stencilBuffer: !1,
				resolveDepthBuffer: !0,
				resolveStencilBuffer: !0,
				depthTexture: null,
				samples: 0,
				count: 1,
				depth: 1,
				multiview: !1,
				useArrayDepthTexture: !1
			}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Sn(0, 0, e, t), this.scissorTest = !1, this.viewport = new Sn(0, 0, e, t), this.textures = [];
			let r = {
				width: e,
				height: t,
				depth: n.depth
			}, i = new xn(r), a = n.count;
			for (let e = 0; e < a; e++) this.textures[e] = i.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
			this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
		}
		_setTextureOptions(e = {}) {
			let t = {
				minFilter: L,
				generateMipmaps: !1,
				flipY: !1,
				internalFormat: null
			};
			e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
			for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
		}
		get texture() {
			return this.textures[0];
		}
		set texture(e) {
			this.textures[0] = e;
		}
		set depthTexture(e) {
			this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
		}
		get depthTexture() {
			return this._depthTexture;
		}
		setSize(e, t, n = 1) {
			if (this.width !== e || this.height !== t || this.depth !== n) {
				this.width = e, this.height = t, this.depth = n;
				for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
				this.dispose();
			}
			this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(e) {
			this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
			for (let t = 0, n = e.textures.length; t < n; t++) {
				this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
				let n = Object.assign({}, e.textures[t].image);
				this.textures[t].source = new vn(n);
			}
			return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	}, wn = class extends Cn {
		constructor(e = 1, t = 1, n = {}) {
			super(e, t, n), this.isWebGLRenderTarget = !0;
		}
	}, Tn = class extends xn {
		constructor(e = null, t = 1, n = 1, r = 1) {
			super(null), this.isDataArrayTexture = !0, this.image = {
				data: e,
				width: t,
				height: n,
				depth: r
			}, this.magFilter = F, this.minFilter = F, this.wrapR = P, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
		}
		addLayerUpdate(e) {
			this.layerUpdates.add(e);
		}
		clearLayerUpdates() {
			this.layerUpdates.clear();
		}
	}, En = class extends xn {
		constructor(e = null, t = 1, n = 1, r = 1) {
			super(null), this.isData3DTexture = !0, this.image = {
				data: e,
				width: t,
				height: n,
				depth: r
			}, this.magFilter = F, this.minFilter = F, this.wrapR = P, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
		}
	}, W = class e {
		static {
			e.prototype.isMatrix4 = !0;
		}
		constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
			this.elements = [
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1
			], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
		}
		set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
			let g = this.elements;
			return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
		}
		identity() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
		}
		clone() {
			return new e().fromArray(this.elements);
		}
		copy(e) {
			let t = this.elements, n = e.elements;
			return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
		}
		copyPosition(e) {
			let t = this.elements, n = e.elements;
			return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
		}
		setFromMatrix3(e) {
			let t = e.elements;
			return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
		}
		extractBasis(e, t, n) {
			return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
		}
		makeBasis(e, t, n) {
			return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
		}
		extractRotation(e) {
			if (e.determinantAffine() === 0) return this.identity();
			let t = this.elements, n = e.elements, r = 1 / Dn.setFromMatrixColumn(e, 0).length(), i = 1 / Dn.setFromMatrixColumn(e, 1).length(), a = 1 / Dn.setFromMatrixColumn(e, 2).length();
			return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
		}
		makeRotationFromEuler(e) {
			let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
			if (e.order === "XYZ") {
				let e = a * l, n = a * u, r = o * l, i = o * u;
				t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
			} else if (e.order === "YXZ") {
				let e = s * l, n = s * u, r = c * l, i = c * u;
				t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
			} else if (e.order === "ZXY") {
				let e = s * l, n = s * u, r = c * l, i = c * u;
				t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
			} else if (e.order === "ZYX") {
				let e = a * l, n = a * u, r = o * l, i = o * u;
				t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
			} else if (e.order === "YZX") {
				let e = a * s, n = a * c, r = o * s, i = o * c;
				t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
			} else if (e.order === "XZY") {
				let e = a * s, n = a * c, r = o * s, i = o * c;
				t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
			}
			return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
		}
		makeRotationFromQuaternion(e) {
			return this.compose(kn, e, An);
		}
		lookAt(e, t, n) {
			let r = this.elements;
			return Nn.subVectors(e, t), Nn.lengthSq() === 0 && (Nn.z = 1), Nn.normalize(), jn.crossVectors(n, Nn), jn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Nn.x += 1e-4 : Nn.z += 1e-4, Nn.normalize(), jn.crossVectors(n, Nn)), jn.normalize(), Mn.crossVectors(Nn, jn), r[0] = jn.x, r[4] = Mn.x, r[8] = Nn.x, r[1] = jn.y, r[5] = Mn.y, r[9] = Nn.y, r[2] = jn.z, r[6] = Mn.z, r[10] = Nn.z, this;
		}
		multiply(e) {
			return this.multiplyMatrices(this, e);
		}
		premultiply(e) {
			return this.multiplyMatrices(e, this);
		}
		multiplyMatrices(e, t) {
			let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], ee = r[10], te = r[14], ne = r[3], j = r[7], re = r[11], ie = r[15];
			return i[0] = a * x + o * T + s * k + c * ne, i[4] = a * S + o * E + s * A + c * j, i[8] = a * C + o * D + s * ee + c * re, i[12] = a * w + o * O + s * te + c * ie, i[1] = l * x + u * T + d * k + f * ne, i[5] = l * S + u * E + d * A + f * j, i[9] = l * C + u * D + d * ee + f * re, i[13] = l * w + u * O + d * te + f * ie, i[2] = p * x + m * T + h * k + g * ne, i[6] = p * S + m * E + h * A + g * j, i[10] = p * C + m * D + h * ee + g * re, i[14] = p * w + m * O + h * te + g * ie, i[3] = _ * x + v * T + y * k + b * ne, i[7] = _ * S + v * E + y * A + b * j, i[11] = _ * C + v * D + y * ee + b * re, i[15] = _ * w + v * O + y * te + b * ie, this;
		}
		multiplyScalar(e) {
			let t = this.elements;
			return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
		}
		determinant() {
			let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
			return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
		}
		determinantAffine() {
			let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], o = e[9], s = e[2], c = e[6], l = e[10];
			return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
		}
		transpose() {
			let e = this.elements, t;
			return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
		}
		setPosition(e, t, n) {
			let r = this.elements;
			return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
		}
		invert() {
			let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
			if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			let A = 1 / k;
			return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
		}
		scale(e) {
			let t = this.elements, n = e.x, r = e.y, i = e.z;
			return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
		}
		getMaxScaleOnAxis() {
			let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
			return Math.sqrt(Math.max(t, n, r));
		}
		makeTranslation(e, t, n) {
			return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
		}
		makeRotationX(e) {
			let t = Math.cos(e), n = Math.sin(e);
			return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
		}
		makeRotationY(e) {
			let t = Math.cos(e), n = Math.sin(e);
			return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
		}
		makeRotationZ(e) {
			let t = Math.cos(e), n = Math.sin(e);
			return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
		}
		makeRotationAxis(e, t) {
			let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
			return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
		}
		makeScale(e, t, n) {
			return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
		}
		makeShear(e, t, n, r, i, a) {
			return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
		}
		compose(e, t, n) {
			let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
			return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
		}
		decompose(e, t, n) {
			let r = this.elements;
			e.x = r[12], e.y = r[13], e.z = r[14];
			let i = this.determinantAffine();
			if (i === 0) return n.set(1, 1, 1), t.identity(), this;
			let a = Dn.set(r[0], r[1], r[2]).length(), o = Dn.set(r[4], r[5], r[6]).length(), s = Dn.set(r[8], r[9], r[10]).length();
			i < 0 && (a = -a), On.copy(this);
			let c = 1 / a, l = 1 / o, u = 1 / s;
			return On.elements[0] *= c, On.elements[1] *= c, On.elements[2] *= c, On.elements[4] *= l, On.elements[5] *= l, On.elements[6] *= l, On.elements[8] *= u, On.elements[9] *= u, On.elements[10] *= u, t.setFromRotationMatrix(On), n.x = a, n.y = o, n.z = s, this;
		}
		makePerspective(e, t, n, r, i, a, o = Qt, s = !1) {
			let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
			if (s) p = i / (a - i), m = a * i / (a - i);
			else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
			else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
			else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
			return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
		}
		makeOrthographic(e, t, n, r, i, a, o = Qt, s = !1) {
			let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
			if (s) p = 1 / (a - i), m = a / (a - i);
			else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
			else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
			else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
			return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
		}
		equals(e) {
			let t = this.elements, n = e.elements;
			for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
			return !0;
		}
		fromArray(e, t = 0) {
			for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
			return this;
		}
		toArray(e = [], t = 0) {
			let n = this.elements;
			return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
		}
	}, Dn = /*@__PURE__*/ new V(), On = /*@__PURE__*/ new W(), kn = /*@__PURE__*/ new V(0, 0, 0), An = /*@__PURE__*/ new V(1, 1, 1), jn = /*@__PURE__*/ new V(), Mn = /*@__PURE__*/ new V(), Nn = /*@__PURE__*/ new V(), Pn = /*@__PURE__*/ new W(), Fn = /*@__PURE__*/ new ln(), In = class e {
		constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
			this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
		}
		get x() {
			return this._x;
		}
		set x(e) {
			this._x = e, this._onChangeCallback();
		}
		get y() {
			return this._y;
		}
		set y(e) {
			this._y = e, this._onChangeCallback();
		}
		get z() {
			return this._z;
		}
		set z(e) {
			this._z = e, this._onChangeCallback();
		}
		get order() {
			return this._order;
		}
		set order(e) {
			this._order = e, this._onChangeCallback();
		}
		set(e, t, n, r = this._order) {
			return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._order);
		}
		copy(e) {
			return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
		}
		setFromRotationMatrix(e, t = this._order, n = !0) {
			let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], u = r[9], d = r[2], f = r[6], p = r[10];
			switch (t) {
				case "XYZ":
					this._y = Math.asin(m(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(f, c), this._z = 0);
					break;
				case "YXZ":
					this._x = Math.asin(-m(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-d, i), this._z = 0);
					break;
				case "ZXY":
					this._x = Math.asin(m(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
					break;
				case "ZYX":
					this._y = Math.asin(-m(d, -1, 1)), Math.abs(d) < .9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
					break;
				case "YZX":
					this._z = Math.asin(m(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, i)) : (this._x = 0, this._y = Math.atan2(o, p));
					break;
				case "XZY":
					this._z = Math.asin(-m(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-u, p), this._y = 0);
					break;
				default: l("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
			}
			return this._order = t, n === !0 && this._onChangeCallback(), this;
		}
		setFromQuaternion(e, t, n) {
			return Pn.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Pn, t, n);
		}
		setFromVector3(e, t = this._order) {
			return this.set(e.x, e.y, e.z, t);
		}
		reorder(e) {
			return Fn.setFromEuler(this), this.setFromQuaternion(Fn, e);
		}
		equals(e) {
			return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
		}
		fromArray(e) {
			return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
		}
		toArray(e = [], t = 0) {
			return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
		}
		_onChange(e) {
			return this._onChangeCallback = e, this;
		}
		_onChangeCallback() {}
		*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._order;
		}
	}, In.DEFAULT_ORDER = "XYZ", Ln = class {
		constructor() {
			this.mask = 1;
		}
		set(e) {
			this.mask = (1 << e | 0) >>> 0;
		}
		enable(e) {
			this.mask |= 1 << e | 0;
		}
		enableAll() {
			this.mask = -1;
		}
		toggle(e) {
			this.mask ^= 1 << e | 0;
		}
		disable(e) {
			this.mask &= ~(1 << e | 0);
		}
		disableAll() {
			this.mask = 0;
		}
		test(e) {
			return (this.mask & e.mask) !== 0;
		}
		isEnabled(e) {
			return !!(this.mask & (1 << e | 0));
		}
	}, Rn = 0, zn = /*@__PURE__*/ new V(), Bn = /*@__PURE__*/ new ln(), Vn = /*@__PURE__*/ new W(), Hn = /*@__PURE__*/ new V(), Un = /*@__PURE__*/ new V(), Wn = /*@__PURE__*/ new V(), Gn = /*@__PURE__*/ new ln(), Kn = /*@__PURE__*/ new V(1, 0, 0), qn = /*@__PURE__*/ new V(0, 1, 0), Jn = /*@__PURE__*/ new V(0, 0, 1), Yn = { type: "added" }, Xn = { type: "removed" }, Zn = {
		type: "childadded",
		child: null
	}, Qn = {
		type: "childremoved",
		child: null
	}, $n = class e extends nn {
		constructor() {
			super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Rn++ }), this.uuid = p(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
			let t = new V(), n = new In(), r = new ln(), i = new V(1, 1, 1);
			function a() {
				r.setFromEuler(n, !1);
			}
			function o() {
				n.setFromQuaternion(r, void 0, !1);
			}
			n._onChange(a), r._onChange(o), Object.defineProperties(this, {
				position: {
					configurable: !0,
					enumerable: !0,
					value: t
				},
				rotation: {
					configurable: !0,
					enumerable: !0,
					value: n
				},
				quaternion: {
					configurable: !0,
					enumerable: !0,
					value: r
				},
				scale: {
					configurable: !0,
					enumerable: !0,
					value: i
				},
				modelViewMatrix: { value: new W() },
				normalMatrix: { value: new H() }
			}), this.matrix = new W(), this.matrixWorld = new W(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ln(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
		}
		onBeforeShadow() {}
		onAfterShadow() {}
		onBeforeRender() {}
		onAfterRender() {}
		applyMatrix4(e) {
			this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
		}
		applyQuaternion(e) {
			return this.quaternion.premultiply(e), this;
		}
		setRotationFromAxisAngle(e, t) {
			this.quaternion.setFromAxisAngle(e, t);
		}
		setRotationFromEuler(e) {
			this.quaternion.setFromEuler(e, !0);
		}
		setRotationFromMatrix(e) {
			this.quaternion.setFromRotationMatrix(e);
		}
		setRotationFromQuaternion(e) {
			this.quaternion.copy(e);
		}
		rotateOnAxis(e, t) {
			return Bn.setFromAxisAngle(e, t), this.quaternion.multiply(Bn), this;
		}
		rotateOnWorldAxis(e, t) {
			return Bn.setFromAxisAngle(e, t), this.quaternion.premultiply(Bn), this;
		}
		rotateX(e) {
			return this.rotateOnAxis(Kn, e);
		}
		rotateY(e) {
			return this.rotateOnAxis(qn, e);
		}
		rotateZ(e) {
			return this.rotateOnAxis(Jn, e);
		}
		translateOnAxis(e, t) {
			return zn.copy(e).applyQuaternion(this.quaternion), this.position.add(zn.multiplyScalar(t)), this;
		}
		translateX(e) {
			return this.translateOnAxis(Kn, e);
		}
		translateY(e) {
			return this.translateOnAxis(qn, e);
		}
		translateZ(e) {
			return this.translateOnAxis(Jn, e);
		}
		localToWorld(e) {
			return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
		}
		worldToLocal(e) {
			return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Vn.copy(this.matrixWorld).invert());
		}
		lookAt(e, t, n) {
			e.isVector3 ? Hn.copy(e) : Hn.set(e, t, n);
			let r = this.parent;
			this.updateWorldMatrix(!0, !1), Un.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Vn.lookAt(Un, Hn, this.up) : Vn.lookAt(Hn, Un, this.up), this.quaternion.setFromRotationMatrix(Vn), r && (Vn.extractRotation(r.matrixWorld), Bn.setFromRotationMatrix(Vn), this.quaternion.premultiply(Bn.invert()));
		}
		add(e) {
			if (arguments.length > 1) {
				for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
				return this;
			}
			return e === this ? (u("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Yn), Zn.child = e, this.dispatchEvent(Zn), Zn.child = null) : u("Object3D.add: object not an instance of THREE.Object3D.", e), this);
		}
		remove(e) {
			if (arguments.length > 1) {
				for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
				return this;
			}
			let t = this.children.indexOf(e);
			return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Xn), Qn.child = e, this.dispatchEvent(Qn), Qn.child = null), this;
		}
		removeFromParent() {
			let e = this.parent;
			return e !== null && e.remove(this), this;
		}
		clear() {
			return this.remove(...this.children);
		}
		attach(e) {
			return this.updateWorldMatrix(!0, !1), Vn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Vn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Vn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Yn), Zn.child = e, this.dispatchEvent(Zn), Zn.child = null, this;
		}
		getObjectById(e) {
			return this.getObjectByProperty("id", e);
		}
		getObjectByName(e) {
			return this.getObjectByProperty("name", e);
		}
		getObjectByProperty(e, t) {
			if (this[e] === t) return this;
			for (let n = 0, r = this.children.length; n < r; n++) {
				let r = this.children[n].getObjectByProperty(e, t);
				if (r !== void 0) return r;
			}
		}
		getObjectsByProperty(e, t, n = []) {
			this[e] === t && n.push(this);
			let r = this.children;
			for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
			return n;
		}
		getWorldPosition(e) {
			return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
		}
		getWorldQuaternion(e) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Un, e, Wn), e;
		}
		getWorldScale(e) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Un, Gn, e), e;
		}
		getWorldDirection(e) {
			this.updateWorldMatrix(!0, !1);
			let t = this.matrixWorld.elements;
			return e.set(t[8], t[9], t[10]).normalize();
		}
		raycast() {}
		traverse(e) {
			e(this);
			let t = this.children;
			for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
		}
		traverseVisible(e) {
			if (this.visible === !1) return;
			e(this);
			let t = this.children;
			for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
		}
		traverseAncestors(e) {
			let t = this.parent;
			t !== null && (e(t), t.traverseAncestors(e));
		}
		updateMatrix() {
			this.matrix.compose(this.position, this.quaternion, this.scale);
			let e = this.pivot;
			if (e !== null) {
				let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
				i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
			}
			this.matrixWorldNeedsUpdate = !0;
		}
		updateMatrixWorld(e) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
			let t = this.children;
			for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
		}
		updateWorldMatrix(e, t, n = !1) {
			let r = this.parent;
			if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
				let e = this.children;
				for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
			}
		}
		toJSON(e) {
			let t = e === void 0 || typeof e == "string", n = {};
			t && (e = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			}, n.metadata = {
				version: 4.7,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			let r = {};
			r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
				...e,
				boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
				boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
			})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
			function i(t, n) {
				return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
			}
			if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
			else if (this.isMesh || this.isLine || this.isPoints) {
				r.geometry = i(e.geometries, this.geometry);
				let t = this.geometry.parameters;
				if (t !== void 0 && t.shapes !== void 0) {
					let n = t.shapes;
					if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
						let r = n[t];
						i(e.shapes, r);
					}
					else i(e.shapes, n);
				}
			}
			if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
				if (Array.isArray(this.material)) {
					let t = [];
					for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
					r.material = t;
				} else r.material = i(e.materials, this.material);
			}
			if (this.children.length > 0) {
				r.children = [];
				for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
			}
			if (this.animations.length > 0) {
				r.animations = [];
				for (let t = 0; t < this.animations.length; t++) {
					let n = this.animations[t];
					r.animations.push(i(e.animations, n));
				}
			}
			if (t) {
				let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
				t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
			}
			return n.object = r, n;
			function a(e) {
				let t = [];
				for (let n in e) {
					let r = e[n];
					delete r.metadata, t.push(r);
				}
				return t;
			}
		}
		clone(e) {
			return new this.constructor().copy(this, e);
		}
		copy(e, t = !0) {
			if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
				let n = e.children[t];
				this.add(n.clone());
			}
			return this;
		}
	}, $n.DEFAULT_UP = /*@__PURE__*/ new V(0, 1, 0), $n.DEFAULT_MATRIX_AUTO_UPDATE = !0, $n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0, er = class extends $n {
		constructor() {
			super(), this.isGroup = !0, this.type = "Group";
		}
	}, tr = { type: "move" }, nr = class {
		constructor() {
			this._targetRay = null, this._grip = null, this._hand = null;
		}
		getHandSpace() {
			return this._hand === null && (this._hand = new er(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
		}
		getTargetRaySpace() {
			return this._targetRay === null && (this._targetRay = new er(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new V(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new V()), this._targetRay;
		}
		getGripSpace() {
			return this._grip === null && (this._grip = new er(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new V(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new V(), this._grip.eventsEnabled = !1), this._grip;
		}
		dispatchEvent(e) {
			return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
		}
		connect(e) {
			if (e && e.hand) {
				let t = this._hand;
				if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
			}
			return this.dispatchEvent({
				type: "connected",
				data: e
			}), this;
		}
		disconnect(e) {
			return this.dispatchEvent({
				type: "disconnected",
				data: e
			}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
		}
		update(e, t, n) {
			let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
			if (e && t.session.visibilityState !== "visible-blurred") {
				if (c && e.hand) {
					a = !0;
					for (let r of e.hand.values()) {
						let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
						e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
					}
					let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
					c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
						type: "pinchend",
						handedness: e.handedness,
						target: this
					})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
						type: "pinchstart",
						handedness: e.handedness,
						target: this
					}));
				} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
					type: "gripUpdated",
					data: e,
					target: this
				})));
				o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(tr)));
			}
			return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
		}
		_getHandJoint(e, t) {
			if (e.joints[t.jointName] === void 0) {
				let n = new er();
				n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
			}
			return e.joints[t.jointName];
		}
	}, rr = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	}, ir = {
		h: 0,
		s: 0,
		l: 0
	}, ar = {
		h: 0,
		s: 0,
		l: 0
	}, G = class {
		constructor(e, t, n) {
			return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
		}
		set(e, t, n) {
			if (t === void 0 && n === void 0) {
				let t = e;
				t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
			} else this.setRGB(e, t, n);
			return this;
		}
		setScalar(e) {
			return this.r = e, this.g = e, this.b = e, this;
		}
		setHex(e, t = Gt) {
			return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, U.colorSpaceToWorking(this, t), this;
		}
		setRGB(e, t, n, r = U.workingColorSpace) {
			return this.r = e, this.g = t, this.b = n, U.colorSpaceToWorking(this, r), this;
		}
		setHSL(e, t, n, r = U.workingColorSpace) {
			if (e = h(e, 1), t = m(t, 0, 1), n = m(n, 0, 1), t === 0) this.r = this.g = this.b = n;
			else {
				let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
				this.r = oe(i, r, e + 1 / 3), this.g = oe(i, r, e), this.b = oe(i, r, e - 1 / 3);
			}
			return U.colorSpaceToWorking(this, r), this;
		}
		setStyle(e, t = Gt) {
			function n(t) {
				t !== void 0 && parseFloat(t) < 1 && l("Color: Alpha component of " + e + " will be ignored.");
			}
			let r;
			if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
				let i, a = r[1], o = r[2];
				switch (a) {
					case "rgb":
					case "rgba":
						if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
						if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
						break;
					case "hsl":
					case "hsla":
						if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
						break;
					default: l("Color: Unknown color model " + e);
				}
			} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
				let n = r[1], i = n.length;
				if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
				if (i === 6) return this.setHex(parseInt(n, 16), t);
				l("Color: Invalid hex color " + e);
			} else if (e && e.length > 0) return this.setColorName(e, t);
			return this;
		}
		setColorName(e, t = Gt) {
			let n = rr[e.toLowerCase()];
			return n === void 0 ? l("Color: Unknown color " + e) : this.setHex(n, t), this;
		}
		clone() {
			return new this.constructor(this.r, this.g, this.b);
		}
		copy(e) {
			return this.r = e.r, this.g = e.g, this.b = e.b, this;
		}
		copySRGBToLinear(e) {
			return this.r = ie(e.r), this.g = ie(e.g), this.b = ie(e.b), this;
		}
		copyLinearToSRGB(e) {
			return this.r = ae(e.r), this.g = ae(e.g), this.b = ae(e.b), this;
		}
		convertSRGBToLinear() {
			return this.copySRGBToLinear(this), this;
		}
		convertLinearToSRGB() {
			return this.copyLinearToSRGB(this), this;
		}
		getHex(e = Gt) {
			return U.workingToColorSpace(or.copy(this), e), Math.round(m(or.r * 255, 0, 255)) * 65536 + Math.round(m(or.g * 255, 0, 255)) * 256 + Math.round(m(or.b * 255, 0, 255));
		}
		getHexString(e = Gt) {
			return ("000000" + this.getHex(e).toString(16)).slice(-6);
		}
		getHSL(e, t = U.workingColorSpace) {
			U.workingToColorSpace(or.copy(this), t);
			let n = or.r, r = or.g, i = or.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
			if (o === a) s = 0, c = 0;
			else {
				let e = a - o;
				switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
					case n:
						s = (r - i) / e + (r < i ? 6 : 0);
						break;
					case r:
						s = (i - n) / e + 2;
						break;
					case i: s = (n - r) / e + 4;
				}
				s /= 6;
			}
			return e.h = s, e.s = c, e.l = l, e;
		}
		getRGB(e, t = U.workingColorSpace) {
			return U.workingToColorSpace(or.copy(this), t), e.r = or.r, e.g = or.g, e.b = or.b, e;
		}
		getStyle(e = Gt) {
			U.workingToColorSpace(or.copy(this), e);
			let t = or.r, n = or.g, r = or.b;
			return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
		}
		offsetHSL(e, t, n) {
			return this.getHSL(ir), this.setHSL(ir.h + e, ir.s + t, ir.l + n);
		}
		add(e) {
			return this.r += e.r, this.g += e.g, this.b += e.b, this;
		}
		addColors(e, t) {
			return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
		}
		addScalar(e) {
			return this.r += e, this.g += e, this.b += e, this;
		}
		sub(e) {
			return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
		}
		multiply(e) {
			return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
		}
		multiplyScalar(e) {
			return this.r *= e, this.g *= e, this.b *= e, this;
		}
		lerp(e, t) {
			return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
		}
		lerpColors(e, t, n) {
			return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
		}
		lerpHSL(e, t) {
			this.getHSL(ir), e.getHSL(ar);
			let n = v(ir.h, ar.h, t), r = v(ir.s, ar.s, t), i = v(ir.l, ar.l, t);
			return this.setHSL(n, r, i), this;
		}
		setFromVector3(e) {
			return this.r = e.x, this.g = e.y, this.b = e.z, this;
		}
		applyMatrix3(e) {
			let t = this.r, n = this.g, r = this.b, i = e.elements;
			return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
		}
		equals(e) {
			return e.r === this.r && e.g === this.g && e.b === this.b;
		}
		fromArray(e, t = 0) {
			return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
		}
		toArray(e = [], t = 0) {
			return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
		}
		fromBufferAttribute(e, t) {
			return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
		}
		toJSON() {
			return this.getHex();
		}
		*[Symbol.iterator]() {
			yield this.r, yield this.g, yield this.b;
		}
	}, or = /*@__PURE__*/ new G(), G.NAMES = rr, sr = class extends $n {
		constructor() {
			super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new In(), this.environmentIntensity = 1, this.environmentRotation = new In(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
		}
		copy(e, t) {
			return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
		}
	}, cr = /*@__PURE__*/ new V(), lr = /*@__PURE__*/ new V(), ur = /*@__PURE__*/ new V(), dr = /*@__PURE__*/ new V(), fr = /*@__PURE__*/ new V(), pr = /*@__PURE__*/ new V(), mr = /*@__PURE__*/ new V(), hr = /*@__PURE__*/ new V(), gr = /*@__PURE__*/ new V(), _r = /*@__PURE__*/ new V(), vr = /*@__PURE__*/ new Sn(), yr = /*@__PURE__*/ new Sn(), br = /*@__PURE__*/ new Sn(), xr = class e {
		constructor(e = new V(), t = new V(), n = new V()) {
			this.a = e, this.b = t, this.c = n;
		}
		static getNormal(e, t, n, r) {
			r.subVectors(n, t), cr.subVectors(e, t), r.cross(cr);
			let i = r.lengthSq();
			return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
		}
		static getBarycoord(e, t, n, r, i) {
			cr.subVectors(r, t), lr.subVectors(n, t), ur.subVectors(e, t);
			let a = cr.dot(cr), o = cr.dot(lr), s = cr.dot(ur), c = lr.dot(lr), l = lr.dot(ur), u = a * c - o * o;
			if (u === 0) return i.set(0, 0, 0), null;
			let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
			return i.set(1 - f - p, p, f);
		}
		static containsPoint(e, t, n, r) {
			return this.getBarycoord(e, t, n, r, dr) !== null && dr.x >= 0 && dr.y >= 0 && dr.x + dr.y <= 1;
		}
		static getInterpolation(e, t, n, r, i, a, o, s) {
			return this.getBarycoord(e, t, n, r, dr) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, dr.x), s.addScaledVector(a, dr.y), s.addScaledVector(o, dr.z), s);
		}
		static getInterpolatedAttribute(e, t, n, r, i, a) {
			return vr.setScalar(0), yr.setScalar(0), br.setScalar(0), vr.fromBufferAttribute(e, t), yr.fromBufferAttribute(e, n), br.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(vr, i.x), a.addScaledVector(yr, i.y), a.addScaledVector(br, i.z), a;
		}
		static isFrontFacing(e, t, n, r) {
			return cr.subVectors(n, t), lr.subVectors(e, t), cr.cross(lr).dot(r) < 0;
		}
		set(e, t, n) {
			return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
		}
		setFromPointsAndIndices(e, t, n, r) {
			return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
		}
		setFromAttributeAndIndices(e, t, n, r) {
			return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(e) {
			return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
		}
		getArea() {
			return cr.subVectors(this.c, this.b), lr.subVectors(this.a, this.b), cr.cross(lr).length() * .5;
		}
		getMidpoint(e) {
			return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
		}
		getNormal(t) {
			return e.getNormal(this.a, this.b, this.c, t);
		}
		getPlane(e) {
			return e.setFromCoplanarPoints(this.a, this.b, this.c);
		}
		getBarycoord(t, n) {
			return e.getBarycoord(t, this.a, this.b, this.c, n);
		}
		getInterpolation(t, n, r, i, a) {
			return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
		}
		containsPoint(t) {
			return e.containsPoint(t, this.a, this.b, this.c);
		}
		isFrontFacing(t) {
			return e.isFrontFacing(this.a, this.b, this.c, t);
		}
		intersectsBox(e) {
			return e.intersectsTriangle(this);
		}
		closestPointToPoint(e, t) {
			let n = this.a, r = this.b, i = this.c, a, o;
			fr.subVectors(r, n), pr.subVectors(i, n), hr.subVectors(e, n);
			let s = fr.dot(hr), c = pr.dot(hr);
			if (s <= 0 && c <= 0) return t.copy(n);
			gr.subVectors(e, r);
			let l = fr.dot(gr), u = pr.dot(gr);
			if (l >= 0 && u <= l) return t.copy(r);
			let d = s * u - l * c;
			if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(fr, a);
			_r.subVectors(e, i);
			let f = fr.dot(_r), p = pr.dot(_r);
			if (p >= 0 && f <= p) return t.copy(i);
			let m = f * c - s * p;
			if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(pr, o);
			let h = l * p - f * u;
			if (h <= 0 && u - l >= 0 && f - p >= 0) return mr.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(mr, o);
			let g = 1 / (h + m + d);
			return a = m * g, o = d * g, t.copy(n).addScaledVector(fr, a).addScaledVector(pr, o);
		}
		equals(e) {
			return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
		}
	}, Sr = class {
		constructor(e = new V(Infinity, Infinity, Infinity), t = new V(-Infinity, -Infinity, -Infinity)) {
			this.isBox3 = !0, this.min = e, this.max = t;
		}
		set(e, t) {
			return this.min.copy(e), this.max.copy(t), this;
		}
		setFromArray(e) {
			this.makeEmpty();
			for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(wr.fromArray(e, t));
			return this;
		}
		setFromBufferAttribute(e) {
			this.makeEmpty();
			for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(wr.fromBufferAttribute(e, t));
			return this;
		}
		setFromPoints(e) {
			this.makeEmpty();
			for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
			return this;
		}
		setFromCenterAndSize(e, t) {
			let n = wr.copy(t).multiplyScalar(.5);
			return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
		}
		setFromObject(e, t = !1) {
			return this.makeEmpty(), this.expandByObject(e, t);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(e) {
			return this.min.copy(e.min), this.max.copy(e.max), this;
		}
		makeEmpty() {
			return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
		}
		isEmpty() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
		}
		getCenter(e) {
			return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
		}
		getSize(e) {
			return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
		}
		expandByPoint(e) {
			return this.min.min(e), this.max.max(e), this;
		}
		expandByVector(e) {
			return this.min.sub(e), this.max.add(e), this;
		}
		expandByScalar(e) {
			return this.min.addScalar(-e), this.max.addScalar(e), this;
		}
		expandByObject(e, t = !1) {
			e.updateWorldMatrix(!1, !1);
			let n = e.geometry;
			if (n !== void 0) {
				let r = n.getAttribute("position");
				if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, wr) : wr.fromBufferAttribute(r, t), wr.applyMatrix4(e.matrixWorld), this.expandByPoint(wr);
				else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), Tr.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), Tr.copy(e.boundingBox)), Tr.applyMatrix4(e.matrixWorld), this.union(Tr);
			}
			let r = e.children;
			for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
			return this;
		}
		containsPoint(e) {
			return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
		}
		containsBox(e) {
			return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
		}
		getParameter(e, t) {
			return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
		}
		intersectsBox(e) {
			return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
		}
		intersectsSphere(e) {
			return this.clampPoint(e.center, wr), wr.distanceToSquared(e.center) <= e.radius * e.radius;
		}
		intersectsPlane(e) {
			let t, n;
			return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
		}
		intersectsTriangle(e) {
			if (this.isEmpty()) return !1;
			this.getCenter(Mr), Nr.subVectors(this.max, Mr), Er.subVectors(e.a, Mr), Dr.subVectors(e.b, Mr), Or.subVectors(e.c, Mr), kr.subVectors(Dr, Er), Ar.subVectors(Or, Dr), jr.subVectors(Er, Or);
			let t = [
				0,
				-kr.z,
				kr.y,
				0,
				-Ar.z,
				Ar.y,
				0,
				-jr.z,
				jr.y,
				kr.z,
				0,
				-kr.x,
				Ar.z,
				0,
				-Ar.x,
				jr.z,
				0,
				-jr.x,
				-kr.y,
				kr.x,
				0,
				-Ar.y,
				Ar.x,
				0,
				-jr.y,
				jr.x,
				0
			];
			return !se(t, Er, Dr, Or, Nr) || (t = [
				1,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				1
			], !se(t, Er, Dr, Or, Nr)) ? !1 : (Pr.crossVectors(kr, Ar), t = [
				Pr.x,
				Pr.y,
				Pr.z
			], se(t, Er, Dr, Or, Nr));
		}
		clampPoint(e, t) {
			return t.copy(e).clamp(this.min, this.max);
		}
		distanceToPoint(e) {
			return this.clampPoint(e, wr).distanceTo(e);
		}
		getBoundingSphere(e) {
			return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(wr).length() * .5), e;
		}
		intersect(e) {
			return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
		}
		union(e) {
			return this.min.min(e.min), this.max.max(e.max), this;
		}
		applyMatrix4(e) {
			return this.isEmpty() ? this : (Cr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Cr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Cr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Cr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Cr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Cr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Cr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Cr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Cr), this);
		}
		translate(e) {
			return this.min.add(e), this.max.add(e), this;
		}
		equals(e) {
			return e.min.equals(this.min) && e.max.equals(this.max);
		}
		toJSON() {
			return {
				min: this.min.toArray(),
				max: this.max.toArray()
			};
		}
		fromJSON(e) {
			return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
		}
	}, Cr = [
		/*@__PURE__*/ new V(),
		/*@__PURE__*/ new V(),
		/*@__PURE__*/ new V(),
		/*@__PURE__*/ new V(),
		/*@__PURE__*/ new V(),
		/*@__PURE__*/ new V(),
		/*@__PURE__*/ new V(),
		/*@__PURE__*/ new V()
	], wr = /*@__PURE__*/ new V(), Tr = /*@__PURE__*/ new Sr(), Er = /*@__PURE__*/ new V(), Dr = /*@__PURE__*/ new V(), Or = /*@__PURE__*/ new V(), kr = /*@__PURE__*/ new V(), Ar = /*@__PURE__*/ new V(), jr = /*@__PURE__*/ new V(), Mr = /*@__PURE__*/ new V(), Nr = /*@__PURE__*/ new V(), Pr = /*@__PURE__*/ new V(), Fr = /*@__PURE__*/ new V(), Ir = /*@__PURE__*/ new V(), Lr = /*@__PURE__*/ new B(), Rr = 0, zr = class extends nn {
		constructor(e, t, n = !1) {
			if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Rr++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = Xt, this.updateRanges = [], this.gpuType = Le, this.version = 0;
		}
		onUploadCallback() {}
		set needsUpdate(e) {
			e === !0 && this.version++;
		}
		setUsage(e) {
			return this.usage = e, this;
		}
		addUpdateRange(e, t) {
			this.updateRanges.push({
				start: e,
				count: t
			});
		}
		clearUpdateRanges() {
			this.updateRanges.length = 0;
		}
		copy(e) {
			return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
		}
		copyAt(e, t, n) {
			e *= this.itemSize, n *= t.itemSize;
			for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
			return this;
		}
		copyArray(e) {
			return this.array.set(e), this;
		}
		applyMatrix3(e) {
			if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Lr.fromBufferAttribute(this, t), Lr.applyMatrix3(e), this.setXY(t, Lr.x, Lr.y);
			else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Ir.fromBufferAttribute(this, t), Ir.applyMatrix3(e), this.setXYZ(t, Ir.x, Ir.y, Ir.z);
			return this;
		}
		applyMatrix4(e) {
			for (let t = 0, n = this.count; t < n; t++) Ir.fromBufferAttribute(this, t), Ir.applyMatrix4(e), this.setXYZ(t, Ir.x, Ir.y, Ir.z);
			return this;
		}
		applyNormalMatrix(e) {
			for (let t = 0, n = this.count; t < n; t++) Ir.fromBufferAttribute(this, t), Ir.applyNormalMatrix(e), this.setXYZ(t, Ir.x, Ir.y, Ir.z);
			return this;
		}
		transformDirection(e) {
			for (let t = 0, n = this.count; t < n; t++) Ir.fromBufferAttribute(this, t), Ir.transformDirection(e), this.setXYZ(t, Ir.x, Ir.y, Ir.z);
			return this;
		}
		set(e, t = 0) {
			return this.array.set(e, t), this;
		}
		getComponent(e, t) {
			let n = this.array[e * this.itemSize + t];
			return this.normalized && (n = ne(n, this.array)), n;
		}
		setComponent(e, t, n) {
			return this.normalized && (n = j(n, this.array)), this.array[e * this.itemSize + t] = n, this;
		}
		getX(e) {
			let t = this.array[e * this.itemSize];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		setX(e, t) {
			return this.normalized && (t = j(t, this.array)), this.array[e * this.itemSize] = t, this;
		}
		getY(e) {
			let t = this.array[e * this.itemSize + 1];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		setY(e, t) {
			return this.normalized && (t = j(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
		}
		getZ(e) {
			let t = this.array[e * this.itemSize + 2];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		setZ(e, t) {
			return this.normalized && (t = j(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
		}
		getW(e) {
			let t = this.array[e * this.itemSize + 3];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		setW(e, t) {
			return this.normalized && (t = j(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
		}
		setXY(e, t, n) {
			return e *= this.itemSize, this.normalized && (t = j(t, this.array), n = j(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
		}
		setXYZ(e, t, n, r) {
			return e *= this.itemSize, this.normalized && (t = j(t, this.array), n = j(n, this.array), r = j(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
		}
		setXYZW(e, t, n, r, i) {
			return e *= this.itemSize, this.normalized && (t = j(t, this.array), n = j(n, this.array), r = j(r, this.array), i = j(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
		}
		onUpload(e) {
			return this.onUploadCallback = e, this;
		}
		clone() {
			return new this.constructor(this.array, this.itemSize).copy(this);
		}
		toJSON() {
			let e = {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: Array.from(this.array),
				normalized: this.normalized
			};
			return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	}, Br = class extends zr {
		constructor(e, t, n) {
			super(new Uint16Array(e), t, n);
		}
	}, Vr = class extends zr {
		constructor(e, t, n) {
			super(new Uint32Array(e), t, n);
		}
	}, Hr = class extends zr {
		constructor(e, t, n) {
			super(new Float32Array(e), t, n);
		}
	}, Ur = /*@__PURE__*/ new Sr(), Wr = /*@__PURE__*/ new V(), Gr = /*@__PURE__*/ new V(), Kr = class {
		constructor(e = new V(), t = -1) {
			this.isSphere = !0, this.center = e, this.radius = t;
		}
		set(e, t) {
			return this.center.copy(e), this.radius = t, this;
		}
		setFromPoints(e, t) {
			let n = this.center;
			t === void 0 ? Ur.setFromPoints(e).getCenter(n) : n.copy(t);
			let r = 0;
			for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
			return this.radius = Math.sqrt(r), this;
		}
		copy(e) {
			return this.center.copy(e.center), this.radius = e.radius, this;
		}
		isEmpty() {
			return this.radius < 0;
		}
		makeEmpty() {
			return this.center.set(0, 0, 0), this.radius = -1, this;
		}
		containsPoint(e) {
			return e.distanceToSquared(this.center) <= this.radius * this.radius;
		}
		distanceToPoint(e) {
			return e.distanceTo(this.center) - this.radius;
		}
		intersectsSphere(e) {
			let t = this.radius + e.radius;
			return e.center.distanceToSquared(this.center) <= t * t;
		}
		intersectsBox(e) {
			return e.intersectsSphere(this);
		}
		intersectsPlane(e) {
			return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
		}
		clampPoint(e, t) {
			let n = this.center.distanceToSquared(e);
			return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
		}
		getBoundingBox(e) {
			return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
		}
		applyMatrix4(e) {
			return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
		}
		translate(e) {
			return this.center.add(e), this;
		}
		expandByPoint(e) {
			if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
			Wr.subVectors(e, this.center);
			let t = Wr.lengthSq();
			if (t > this.radius * this.radius) {
				let e = Math.sqrt(t), n = (e - this.radius) * .5;
				this.center.addScaledVector(Wr, n / e), this.radius += n;
			}
			return this;
		}
		union(e) {
			return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Gr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Wr.copy(e.center).add(Gr)), this.expandByPoint(Wr.copy(e.center).sub(Gr))), this);
		}
		equals(e) {
			return e.center.equals(this.center) && e.radius === this.radius;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		toJSON() {
			return {
				radius: this.radius,
				center: this.center.toArray()
			};
		}
		fromJSON(e) {
			return this.radius = e.radius, this.center.fromArray(e.center), this;
		}
	}, qr = 0, Jr = /*@__PURE__*/ new W(), Yr = /*@__PURE__*/ new $n(), Xr = /*@__PURE__*/ new V(), Zr = /*@__PURE__*/ new Sr(), Qr = /*@__PURE__*/ new Sr(), $r = /*@__PURE__*/ new V(), ei = class e extends nn {
		constructor() {
			super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: qr++ }), this.uuid = p(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
				start: 0,
				count: Infinity
			}, this.userData = {}, this._transformed = !1;
		}
		getIndex() {
			return this.index;
		}
		setIndex(e) {
			return this.index = Array.isArray(e) ? new (r(e) ? Vr : Br)(e, 1) : e, this;
		}
		setIndirect(e, t = 0) {
			return this.indirect = e, this.indirectOffset = t, this;
		}
		getIndirect() {
			return this.indirect;
		}
		getAttribute(e) {
			return this.attributes[e];
		}
		setAttribute(e, t) {
			return this.attributes[e] = t, this;
		}
		deleteAttribute(e) {
			return delete this.attributes[e], this;
		}
		hasAttribute(e) {
			return this.attributes[e] !== void 0;
		}
		addGroup(e, t, n = 0) {
			this.groups.push({
				start: e,
				count: t,
				materialIndex: n
			});
		}
		clearGroups() {
			this.groups = [];
		}
		setDrawRange(e, t) {
			this.drawRange.start = e, this.drawRange.count = t;
		}
		applyMatrix4(e) {
			let t = this.attributes.position;
			t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
			let n = this.attributes.normal;
			if (n !== void 0) {
				let t = new H().getNormalMatrix(e);
				n.applyNormalMatrix(t), n.needsUpdate = !0;
			}
			let r = this.attributes.tangent;
			return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
		}
		applyQuaternion(e) {
			return Jr.makeRotationFromQuaternion(e), this.applyMatrix4(Jr), this;
		}
		rotateX(e) {
			return Jr.makeRotationX(e), this.applyMatrix4(Jr), this;
		}
		rotateY(e) {
			return Jr.makeRotationY(e), this.applyMatrix4(Jr), this;
		}
		rotateZ(e) {
			return Jr.makeRotationZ(e), this.applyMatrix4(Jr), this;
		}
		translate(e, t, n) {
			return Jr.makeTranslation(e, t, n), this.applyMatrix4(Jr), this;
		}
		scale(e, t, n) {
			return Jr.makeScale(e, t, n), this.applyMatrix4(Jr), this;
		}
		lookAt(e) {
			return Yr.lookAt(e), Yr.updateMatrix(), this.applyMatrix4(Yr.matrix), this;
		}
		center() {
			return this.computeBoundingBox(), this.boundingBox.getCenter(Xr).negate(), this.translate(Xr.x, Xr.y, Xr.z), this;
		}
		setFromPoints(e) {
			let t = this.getAttribute("position");
			if (t === void 0) {
				let t = [];
				for (let n = 0, r = e.length; n < r; n++) {
					let r = e[n];
					t.push(r.x, r.y, r.z || 0);
				}
				this.setAttribute("position", new Hr(t, 3));
			} else {
				let n = Math.min(e.length, t.count);
				for (let r = 0; r < n; r++) {
					let n = e[r];
					t.setXYZ(r, n.x, n.y, n.z || 0);
				}
				e.length > t.count && l("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
			}
			return this;
		}
		computeBoundingBox() {
			this.boundingBox === null && (this.boundingBox = new Sr());
			let e = this.attributes.position, t = this.morphAttributes.position;
			if (e && e.isGLBufferAttribute) {
				u("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new V(-Infinity, -Infinity, -Infinity), new V(Infinity, Infinity, Infinity));
				return;
			}
			if (e !== void 0) {
				if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					Zr.setFromBufferAttribute(n), this.morphTargetsRelative ? ($r.addVectors(this.boundingBox.min, Zr.min), this.boundingBox.expandByPoint($r), $r.addVectors(this.boundingBox.max, Zr.max), this.boundingBox.expandByPoint($r)) : (this.boundingBox.expandByPoint(Zr.min), this.boundingBox.expandByPoint(Zr.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && u("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
		computeBoundingSphere() {
			this.boundingSphere === null && (this.boundingSphere = new Kr());
			let e = this.attributes.position, t = this.morphAttributes.position;
			if (e && e.isGLBufferAttribute) {
				u("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new V(), Infinity);
				return;
			}
			if (e) {
				let n = this.boundingSphere.center;
				if (Zr.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					Qr.setFromBufferAttribute(n), this.morphTargetsRelative ? ($r.addVectors(Zr.min, Qr.min), Zr.expandByPoint($r), $r.addVectors(Zr.max, Qr.max), Zr.expandByPoint($r)) : (Zr.expandByPoint(Qr.min), Zr.expandByPoint(Qr.max));
				}
				Zr.getCenter(n);
				let r = 0;
				for (let t = 0, i = e.count; t < i; t++) $r.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared($r));
				if (t) for (let i = 0, a = t.length; i < a; i++) {
					let a = t[i], o = this.morphTargetsRelative;
					for (let t = 0, i = a.count; t < i; t++) $r.fromBufferAttribute(a, t), o && (Xr.fromBufferAttribute(e, t), $r.add(Xr)), r = Math.max(r, n.distanceToSquared($r));
				}
				this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && u("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
			}
		}
		computeTangents() {
			let e = this.index, t = this.attributes;
			if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
				u("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
				return;
			}
			let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
			(a === void 0 || a.count !== n.count) && (a = new zr(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
			let o = [], s = [];
			for (let e = 0; e < n.count; e++) o[e] = new V(), s[e] = new V();
			let c = new V(), l = new V(), d = new V(), f = new B(), p = new B(), m = new B(), h = new V(), g = new V();
			function _(e, t, r) {
				c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), d.fromBufferAttribute(n, r), f.fromBufferAttribute(i, e), p.fromBufferAttribute(i, t), m.fromBufferAttribute(i, r), l.sub(c), d.sub(c), p.sub(f), m.sub(f);
				let a = 1 / (p.x * m.y - m.x * p.y);
				isFinite(a) && (h.copy(l).multiplyScalar(m.y).addScaledVector(d, -p.y).multiplyScalar(a), g.copy(d).multiplyScalar(p.x).addScaledVector(l, -m.x).multiplyScalar(a), o[e].add(h), o[t].add(h), o[r].add(h), s[e].add(g), s[t].add(g), s[r].add(g));
			}
			let v = this.groups;
			v.length === 0 && (v = [{
				start: 0,
				count: e.count
			}]);
			for (let t = 0, n = v.length; t < n; ++t) {
				let n = v[t], r = n.start, i = n.count;
				for (let t = r, n = r + i; t < n; t += 3) _(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
			}
			let y = new V(), b = new V(), x = new V(), S = new V();
			function C(e) {
				x.fromBufferAttribute(r, e), S.copy(x);
				let t = o[e];
				y.copy(t), y.sub(x.multiplyScalar(x.dot(t))).normalize(), b.crossVectors(S, t);
				let n = b.dot(s[e]) < 0 ? -1 : 1;
				a.setXYZW(e, y.x, y.y, y.z, n);
			}
			for (let t = 0, n = v.length; t < n; ++t) {
				let n = v[t], r = n.start, i = n.count;
				for (let t = r, n = r + i; t < n; t += 3) C(e.getX(t + 0)), C(e.getX(t + 1)), C(e.getX(t + 2));
			}
			this._transformed = !0;
		}
		computeVertexNormals() {
			let e = this.index, t = this.getAttribute("position");
			if (t !== void 0) {
				let n = this.getAttribute("normal");
				if (n === void 0 || n.count !== t.count) n = new zr(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
				else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
				let r = new V(), i = new V(), a = new V(), o = new V(), s = new V(), c = new V(), l = new V(), u = new V();
				if (e) for (let d = 0, f = e.count; d < f; d += 3) {
					let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
					r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
				}
				else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
				this.normalizeNormals(), n.needsUpdate = !0;
			}
		}
		normalizeNormals() {
			let e = this.attributes.normal;
			for (let t = 0, n = e.count; t < n; t++) $r.fromBufferAttribute(e, t), $r.normalize(), e.setXYZ(t, $r.x, $r.y, $r.z);
		}
		toNonIndexed() {
			function t(e, t) {
				let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
				for (let i = 0, c = t.length; i < c; i++) {
					o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
					for (let e = 0; e < r; e++) a[s++] = n[o++];
				}
				return new zr(a, r, i);
			}
			if (this.index === null) return l("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
			let n = new e(), r = this.index.array, i = this.attributes;
			for (let e in i) {
				let a = i[e], o = t(a, r);
				n.setAttribute(e, o);
			}
			let a = this.morphAttributes;
			for (let e in a) {
				let i = [], o = a[e];
				for (let e = 0, n = o.length; e < n; e++) {
					let n = o[e], a = t(n, r);
					i.push(a);
				}
				n.morphAttributes[e] = i;
			}
			n.morphTargetsRelative = this.morphTargetsRelative;
			let o = this.groups;
			for (let e = 0, t = o.length; e < t; e++) {
				let t = o[e];
				n.addGroup(t.start, t.count, t.materialIndex);
			}
			return n;
		}
		toJSON() {
			let e = { metadata: {
				version: 4.7,
				type: "BufferGeometry",
				generator: "BufferGeometry.toJSON"
			} };
			if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
				let t = this.parameters;
				for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
				return e;
			}
			e.data = { attributes: {} };
			let t = this.index;
			t !== null && (e.data.index = {
				type: t.array.constructor.name,
				array: Array.prototype.slice.call(t.array)
			});
			let n = this.attributes;
			for (let t in n) {
				let r = n[t];
				e.data.attributes[t] = r.toJSON(e.data);
			}
			let r = {}, i = !1;
			for (let t in this.morphAttributes) {
				let n = this.morphAttributes[t], a = [];
				for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					a.push(r.toJSON(e.data));
				}
				a.length > 0 && (r[t] = a, i = !0);
			}
			i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
			let a = this.groups;
			a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
			let o = this.boundingSphere;
			return o !== null && (e.data.boundingSphere = o.toJSON()), e;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(e) {
			this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
			let t = {};
			this.name = e.name;
			let n = e.index;
			n !== null && this.setIndex(n.clone());
			let r = e.attributes;
			for (let e in r) {
				let n = r[e];
				this.setAttribute(e, n.clone(t));
			}
			let i = e.morphAttributes;
			for (let e in i) {
				let n = [], r = i[e];
				for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
				this.morphAttributes[e] = n;
			}
			this.morphTargetsRelative = e.morphTargetsRelative;
			let a = e.groups;
			for (let e = 0, t = a.length; e < t; e++) {
				let t = a[e];
				this.addGroup(t.start, t.count, t.materialIndex);
			}
			let o = e.boundingBox;
			o !== null && (this.boundingBox = o.clone());
			let s = e.boundingSphere;
			return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	}, ti = class {
		constructor(e, t) {
			this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e === void 0 ? 0 : e.length / t, this.usage = Xt, this.updateRanges = [], this.version = 0, this.uuid = p();
		}
		onUploadCallback() {}
		set needsUpdate(e) {
			e === !0 && this.version++;
		}
		setUsage(e) {
			return this.usage = e, this;
		}
		addUpdateRange(e, t) {
			this.updateRanges.push({
				start: e,
				count: t
			});
		}
		clearUpdateRanges() {
			this.updateRanges.length = 0;
		}
		copy(e) {
			return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
		}
		copyAt(e, t, n) {
			e *= this.stride, n *= t.stride;
			for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
			return this;
		}
		set(e, t = 0) {
			return this.array.set(e, t), this;
		}
		clone(e) {
			e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = p()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
			let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
			return n.setUsage(this.usage), n;
		}
		onUpload(e) {
			return this.onUploadCallback = e, this;
		}
		toJSON(e) {
			return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = p()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
				uuid: this.uuid,
				buffer: this.array.buffer._uuid,
				type: this.array.constructor.name,
				stride: this.stride
			};
		}
	}, ni = /*@__PURE__*/ new V(), ri = class e {
		constructor(e, t, n, r = !1) {
			this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
		}
		get count() {
			return this.data.count;
		}
		get array() {
			return this.data.array;
		}
		set needsUpdate(e) {
			this.data.needsUpdate = e;
		}
		applyMatrix4(e) {
			for (let t = 0, n = this.data.count; t < n; t++) ni.fromBufferAttribute(this, t), ni.applyMatrix4(e), this.setXYZ(t, ni.x, ni.y, ni.z);
			return this;
		}
		applyNormalMatrix(e) {
			for (let t = 0, n = this.count; t < n; t++) ni.fromBufferAttribute(this, t), ni.applyNormalMatrix(e), this.setXYZ(t, ni.x, ni.y, ni.z);
			return this;
		}
		transformDirection(e) {
			for (let t = 0, n = this.count; t < n; t++) ni.fromBufferAttribute(this, t), ni.transformDirection(e), this.setXYZ(t, ni.x, ni.y, ni.z);
			return this;
		}
		getComponent(e, t) {
			let n = this.array[e * this.data.stride + this.offset + t];
			return this.normalized && (n = ne(n, this.array)), n;
		}
		setComponent(e, t, n) {
			return this.normalized && (n = j(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
		}
		setX(e, t) {
			return this.normalized && (t = j(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
		}
		setY(e, t) {
			return this.normalized && (t = j(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
		}
		setZ(e, t) {
			return this.normalized && (t = j(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
		}
		setW(e, t) {
			return this.normalized && (t = j(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
		}
		getX(e) {
			let t = this.data.array[e * this.data.stride + this.offset];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		getY(e) {
			let t = this.data.array[e * this.data.stride + this.offset + 1];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		getZ(e) {
			let t = this.data.array[e * this.data.stride + this.offset + 2];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		getW(e) {
			let t = this.data.array[e * this.data.stride + this.offset + 3];
			return this.normalized && (t = ne(t, this.array)), t;
		}
		setXY(e, t, n) {
			return e = e * this.data.stride + this.offset, this.normalized && (t = j(t, this.array), n = j(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
		}
		setXYZ(e, t, n, r) {
			return e = e * this.data.stride + this.offset, this.normalized && (t = j(t, this.array), n = j(n, this.array), r = j(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
		}
		setXYZW(e, t, n, r, i) {
			return e = e * this.data.stride + this.offset, this.normalized && (t = j(t, this.array), n = j(n, this.array), r = j(r, this.array), i = j(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
		}
		clone(t) {
			if (t === void 0) {
				s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
				let e = [];
				for (let t = 0; t < this.count; t++) {
					let n = t * this.data.stride + this.offset;
					for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
				}
				return new zr(new this.array.constructor(e), this.itemSize, this.normalized);
			}
			return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
		}
		toJSON(e) {
			if (e === void 0) {
				s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
				let e = [];
				for (let t = 0; t < this.count; t++) {
					let n = t * this.data.stride + this.offset;
					for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
				}
				return {
					itemSize: this.itemSize,
					type: this.array.constructor.name,
					array: e,
					normalized: this.normalized
				};
			}
			return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
				isInterleavedBufferAttribute: !0,
				itemSize: this.itemSize,
				data: this.data.uuid,
				offset: this.offset,
				normalized: this.normalized
			};
		}
	}, ii = 0, ai = class extends nn {
		constructor() {
			super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ii++ }), this.uuid = p(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new G(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Yt, this.stencilZFail = Yt, this.stencilZPass = Yt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
		}
		get alphaTest() {
			return this._alphaTest;
		}
		set alphaTest(e) {
			this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
		}
		onBeforeRender() {}
		onBeforeCompile() {}
		customProgramCacheKey() {
			return this.onBeforeCompile.toString();
		}
		setValues(e) {
			if (e !== void 0) for (let t in e) {
				let n = e[t];
				if (n === void 0) {
					l(`Material: parameter '${t}' has value of undefined.`);
					continue;
				}
				let r = this[t];
				if (r === void 0) {
					l(`Material: '${t}' is not a property of THREE.${this.type}.`);
					continue;
				}
				r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
			}
		}
		toJSON(e) {
			let t = e === void 0 || typeof e == "string";
			t && (e = {
				textures: {},
				images: {}
			});
			let n = { metadata: {
				version: 4.7,
				type: "Material",
				generator: "Material.toJSON"
			} };
			n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
			function r(e) {
				let t = [];
				for (let n in e) {
					let r = e[n];
					delete r.metadata, t.push(r);
				}
				return t;
			}
			if (t) {
				let t = r(e.textures), i = r(e.images);
				t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
			}
			return n;
		}
		fromJSON(e, t) {
			if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new G().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (this.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
				let t = e.normalScale;
				Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new B().fromArray(t);
			}
			return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new B().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(e) {
			this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
			let t = e.clippingPlanes, n = null;
			if (t !== null) {
				let e = t.length;
				n = Array(e);
				for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
			}
			return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
		set needsUpdate(e) {
			e === !0 && this.version++;
		}
	}, oi = /*@__PURE__*/ new V(), si = /*@__PURE__*/ new V(), ci = /*@__PURE__*/ new V(), li = /*@__PURE__*/ new V(), ui = /*@__PURE__*/ new V(), di = /*@__PURE__*/ new V(), fi = /*@__PURE__*/ new V(), pi = class {
		constructor(e = new V(), t = new V(0, 0, -1)) {
			this.origin = e, this.direction = t;
		}
		set(e, t) {
			return this.origin.copy(e), this.direction.copy(t), this;
		}
		copy(e) {
			return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
		}
		at(e, t) {
			return t.copy(this.origin).addScaledVector(this.direction, e);
		}
		lookAt(e) {
			return this.direction.copy(e).sub(this.origin).normalize(), this;
		}
		recast(e) {
			return this.origin.copy(this.at(e, oi)), this;
		}
		closestPointToPoint(e, t) {
			t.subVectors(e, this.origin);
			let n = t.dot(this.direction);
			return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
		}
		distanceToPoint(e) {
			return Math.sqrt(this.distanceSqToPoint(e));
		}
		distanceSqToPoint(e) {
			let t = oi.subVectors(e, this.origin).dot(this.direction);
			return t < 0 ? this.origin.distanceToSquared(e) : (oi.copy(this.origin).addScaledVector(this.direction, t), oi.distanceToSquared(e));
		}
		distanceSqToSegment(e, t, n, r) {
			si.copy(e).add(t).multiplyScalar(.5), ci.copy(t).sub(e).normalize(), li.copy(this.origin).sub(si);
			let i = e.distanceTo(t) * .5, a = -this.direction.dot(ci), o = li.dot(this.direction), s = -li.dot(ci), c = li.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
			if (l > 0) {
				if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
					if (d >= -p) {
						if (d <= p) {
							let e = 1 / l;
							u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
						} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
					} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
			} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(si).addScaledVector(ci, d), f;
		}
		intersectSphere(e, t) {
			oi.subVectors(e.center, this.origin);
			let n = oi.dot(this.direction), r = oi.dot(oi) - n * n, i = e.radius * e.radius;
			if (r > i) return null;
			let a = Math.sqrt(i - r), o = n - a, s = n + a;
			return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
		}
		intersectsSphere(e) {
			return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
		}
		distanceToPlane(e) {
			let t = e.normal.dot(this.direction);
			if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
			let n = -(this.origin.dot(e.normal) + e.constant) / t;
			return n >= 0 ? n : null;
		}
		intersectPlane(e, t) {
			let n = this.distanceToPlane(e);
			return n === null ? null : this.at(n, t);
		}
		intersectsPlane(e) {
			let t = e.distanceToPoint(this.origin);
			return t === 0 || e.normal.dot(this.direction) * t < 0;
		}
		intersectBox(e, t) {
			let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
			return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
		}
		intersectsBox(e) {
			return this.intersectBox(e, oi) !== null;
		}
		intersectTriangle(e, t, n, r, i) {
			ui.subVectors(t, e), di.subVectors(n, e), fi.crossVectors(ui, di);
			let a = this.direction.dot(fi), o;
			if (a > 0) {
				if (r) return null;
				o = 1;
			} else if (a < 0) o = -1, a = -a;
			else return null;
			li.subVectors(this.origin, e);
			let s = o * this.direction.dot(di.crossVectors(li, di));
			if (s < 0) return null;
			let c = o * this.direction.dot(ui.cross(li));
			if (c < 0 || s + c > a) return null;
			let l = -o * li.dot(fi);
			return l < 0 ? null : this.at(l / a, i);
		}
		applyMatrix4(e) {
			return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
		}
		equals(e) {
			return e.origin.equals(this.origin) && e.direction.equals(this.direction);
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}, mi = class extends ai {
		constructor(e) {
			super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new G(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new In(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
		}
		copy(e) {
			return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
		}
	}, hi = /*@__PURE__*/ new W(), gi = /*@__PURE__*/ new pi(), _i = /*@__PURE__*/ new Kr(), vi = /*@__PURE__*/ new V(), yi = /*@__PURE__*/ new V(), bi = /*@__PURE__*/ new V(), xi = /*@__PURE__*/ new V(), Si = /*@__PURE__*/ new V(), Ci = /*@__PURE__*/ new V(), wi = /*@__PURE__*/ new V(), Ti = /*@__PURE__*/ new V(), Ei = class extends $n {
		constructor(e = new ei(), t = new mi()) {
			super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
		}
		copy(e, t) {
			return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
		}
		updateMorphTargets() {
			let e = this.geometry.morphAttributes, t = Object.keys(e);
			if (t.length > 0) {
				let n = e[t[0]];
				if (n !== void 0) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let e = 0, t = n.length; e < t; e++) {
						let t = n[e].name || String(e);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
					}
				}
			}
		}
		getVertexPosition(e, t) {
			let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
			t.fromBufferAttribute(r, e);
			let o = this.morphTargetInfluences;
			if (i && o) {
				Ci.set(0, 0, 0);
				for (let n = 0, r = i.length; n < r; n++) {
					let r = o[n], s = i[n];
					r !== 0 && (Si.fromBufferAttribute(s, e), a ? Ci.addScaledVector(Si, r) : Ci.addScaledVector(Si.sub(t), r));
				}
				t.add(Ci);
			}
			return t;
		}
		raycast(e, t) {
			let n = this.geometry, r = this.material, i = this.matrixWorld;
			r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), _i.copy(n.boundingSphere), _i.applyMatrix4(i), gi.copy(e.ray).recast(e.near), !(_i.containsPoint(gi.origin) === !1 && (gi.intersectSphere(_i, vi) === null || gi.origin.distanceToSquared(vi) > (e.far - e.near) ** 2)) && (hi.copy(i).invert(), gi.copy(e.ray).applyMatrix4(hi), (n.boundingBox === null || gi.intersectsBox(n.boundingBox) !== !1) && this._computeIntersections(e, t, gi)));
		}
		_computeIntersections(e, t, n) {
			let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
			if (o !== null) {
				if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
					let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
					for (let i = m, a = h; i < a; i += 3) {
						let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
						r = le(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
					}
				}
				else {
					let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
					for (let d = i, f = s; d < f; d += 3) {
						let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
						r = le(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
					}
				}
			} else if (s !== void 0) {
				if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
					let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
					for (let i = m, a = h; i < a; i += 3) {
						let a = i, s = i + 1, d = i + 2;
						r = le(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
					}
				}
				else {
					let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
					for (let s = i, d = o; s < d; s += 3) {
						let i = s, o = s + 1, d = s + 2;
						r = le(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
					}
				}
			}
		}
	}, Di = /*@__PURE__*/ new Sn(), Oi = /*@__PURE__*/ new Sn(), ki = /*@__PURE__*/ new Sn(), Ai = /*@__PURE__*/ new Sn(), ji = /*@__PURE__*/ new W(), Mi = /*@__PURE__*/ new V(), Ni = /*@__PURE__*/ new Kr(), Pi = /*@__PURE__*/ new W(), Fi = /*@__PURE__*/ new pi(), Ii = class extends Ei {
		constructor(e, t) {
			super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = De, this.bindMatrix = new W(), this.bindMatrixInverse = new W(), this.boundingBox = null, this.boundingSphere = null;
		}
		computeBoundingBox() {
			let e = this.geometry;
			this.boundingBox === null && (this.boundingBox = new Sr()), this.boundingBox.makeEmpty();
			let t = e.getAttribute("position");
			for (let e = 0; e < t.count; e++) this.getVertexPosition(e, Mi), this.boundingBox.expandByPoint(Mi);
		}
		computeBoundingSphere() {
			let e = this.geometry;
			this.boundingSphere === null && (this.boundingSphere = new Kr()), this.boundingSphere.makeEmpty();
			let t = e.getAttribute("position");
			for (let e = 0; e < t.count; e++) this.getVertexPosition(e, Mi), this.boundingSphere.expandByPoint(Mi);
		}
		copy(e, t) {
			return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
		}
		raycast(e, t) {
			let n = this.material, r = this.matrixWorld;
			n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ni.copy(this.boundingSphere), Ni.applyMatrix4(r), e.ray.intersectsSphere(Ni) !== !1 && (Pi.copy(r).invert(), Fi.copy(e.ray).applyMatrix4(Pi), (this.boundingBox === null || Fi.intersectsBox(this.boundingBox) !== !1) && this._computeIntersections(e, t, Fi)));
		}
		getVertexPosition(e, t) {
			return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
		}
		bind(e, t) {
			this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
		}
		pose() {
			this.skeleton.pose();
		}
		normalizeSkinWeights() {
			let e = new Sn(), t = this.geometry.attributes.skinWeight;
			for (let n = 0, r = t.count; n < r; n++) {
				e.fromBufferAttribute(t, n);
				let r = 1 / e.manhattanLength();
				r === Infinity ? e.set(1, 0, 0, 0) : e.multiplyScalar(r), t.setXYZW(n, e.x, e.y, e.z, e.w);
			}
		}
		updateMatrixWorld(e) {
			super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : l("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
		}
		applyBoneTransform(e, t) {
			let n = this.skeleton, r = this.geometry;
			Oi.fromBufferAttribute(r.attributes.skinIndex, e), ki.fromBufferAttribute(r.attributes.skinWeight, e), t.isVector4 ? (Di.copy(t), t.set(0, 0, 0, 0)) : (Di.set(...t, 1), t.set(0, 0, 0)), Di.applyMatrix4(this.bindMatrix);
			for (let e = 0; e < 4; e++) {
				let r = ki.getComponent(e);
				if (r !== 0) {
					let i = Oi.getComponent(e);
					ji.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]), t.addScaledVector(Ai.copy(Di).applyMatrix4(ji), r);
				}
			}
			return t.isVector4 && (t.w = Di.w), t.applyMatrix4(this.bindMatrixInverse);
		}
	}, Li = class extends $n {
		constructor() {
			super(), this.isBone = !0, this.type = "Bone";
		}
	}, Ri = class extends xn {
		constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = F, l = F, u, d) {
			super(null, a, o, s, c, l, r, i, u, d), this.isDataTexture = !0, this.image = {
				data: e,
				width: t,
				height: n
			}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
		}
	}, zi = /*@__PURE__*/ new W(), Bi = /*@__PURE__*/ new W(), Vi = class e {
		constructor(e = [], t = []) {
			this.uuid = p(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
		}
		init() {
			let e = this.bones, t = this.boneInverses;
			if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
			else if (e.length !== t.length) {
				l("Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
				for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new W());
			}
		}
		calculateInverses() {
			this.boneInverses.length = 0;
			for (let e = 0, t = this.bones.length; e < t; e++) {
				let t = new W();
				this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(t);
			}
		}
		pose() {
			for (let e = 0, t = this.bones.length; e < t; e++) {
				let t = this.bones[e];
				t && t.matrixWorld.copy(this.boneInverses[e]).invert();
			}
			for (let e = 0, t = this.bones.length; e < t; e++) {
				let t = this.bones[e];
				t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale));
			}
		}
		update() {
			let e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture;
			for (let r = 0, i = e.length; r < i; r++) {
				let i = e[r] ? e[r].matrixWorld : Bi;
				zi.multiplyMatrices(i, t[r]), zi.toArray(n, r * 16);
			}
			r !== null && (r.needsUpdate = !0);
		}
		clone() {
			return new e(this.bones, this.boneInverses);
		}
		computeBoneTexture() {
			let e = Math.sqrt(this.bones.length * 4);
			e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
			let t = new Float32Array(e * e * 4);
			t.set(this.boneMatrices);
			let n = new Ri(t, e, e, Ke, Le);
			return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
		}
		getBoneByName(e) {
			for (let t = 0, n = this.bones.length; t < n; t++) {
				let n = this.bones[t];
				if (n.name === e) return n;
			}
		}
		dispose() {
			this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
		}
		fromJSON(e, t) {
			this.uuid = e.uuid;
			for (let n = 0, r = e.bones.length; n < r; n++) {
				let r = e.bones[n], i = t[r];
				i === void 0 && (l("Skeleton: No bone found with UUID:", r), i = new Li()), this.bones.push(i), this.boneInverses.push(new W().fromArray(e.boneInverses[n]));
			}
			return this.init(), this;
		}
		toJSON() {
			let e = {
				metadata: {
					version: 4.7,
					type: "Skeleton",
					generator: "Skeleton.toJSON"
				},
				bones: [],
				boneInverses: []
			};
			e.uuid = this.uuid;
			let t = this.bones, n = this.boneInverses;
			for (let r = 0, i = t.length; r < i; r++) {
				let i = t[r];
				e.bones.push(i.uuid);
				let a = n[r];
				e.boneInverses.push(a.toArray());
			}
			return e;
		}
	}, Hi = class extends zr {
		constructor(e, t, n, r = 1) {
			super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
		}
		copy(e) {
			return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
		}
		toJSON() {
			let e = super.toJSON();
			return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
		}
	}, Ui = /*@__PURE__*/ new W(), Wi = /*@__PURE__*/ new W(), Gi = [], Ki = /*@__PURE__*/ new Sr(), qi = /*@__PURE__*/ new W(), Ji = /*@__PURE__*/ new Ei(), Yi = /*@__PURE__*/ new Kr(), Xi = class extends Ei {
		constructor(e, t, n) {
			super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Hi(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
			for (let e = 0; e < n; e++) this.setMatrixAt(e, qi);
		}
		computeBoundingBox() {
			let e = this.geometry, t = this.count;
			this.boundingBox === null && (this.boundingBox = new Sr()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
			for (let n = 0; n < t; n++) this.getMatrixAt(n, Ui), Ki.copy(e.boundingBox).applyMatrix4(Ui), this.boundingBox.union(Ki);
		}
		computeBoundingSphere() {
			let e = this.geometry, t = this.count;
			this.boundingSphere === null && (this.boundingSphere = new Kr()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
			for (let n = 0; n < t; n++) this.getMatrixAt(n, Ui), Yi.copy(e.boundingSphere).applyMatrix4(Ui), this.boundingSphere.union(Yi);
		}
		copy(e, t) {
			return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
		}
		getColorAt(e, t) {
			return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
		}
		getMatrixAt(e, t) {
			return t.fromArray(this.instanceMatrix.array, e * 16);
		}
		getMorphAt(e, t) {
			let n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, i = e * (n.length + 1) + 1;
			for (let e = 0; e < n.length; e++) n[e] = r[i + e];
		}
		raycast(e, t) {
			let n = this.matrixWorld, r = this.count;
			if (Ji.geometry = this.geometry, Ji.material = this.material, Ji.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Yi.copy(this.boundingSphere), Yi.applyMatrix4(n), e.ray.intersectsSphere(Yi) !== !1)) for (let i = 0; i < r; i++) {
				this.getMatrixAt(i, Ui), Wi.multiplyMatrices(n, Ui), Ji.matrixWorld = Wi, Ji.raycast(e, Gi);
				for (let e = 0, n = Gi.length; e < n; e++) {
					let n = Gi[e];
					n.instanceId = i, n.object = this, t.push(n);
				}
				Gi.length = 0;
			}
		}
		setColorAt(e, t) {
			return this.instanceColor === null && (this.instanceColor = new Hi(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
		}
		setMatrixAt(e, t) {
			return t.toArray(this.instanceMatrix.array, e * 16), this;
		}
		setMorphAt(e, t) {
			let n = t.morphTargetInfluences, r = n.length + 1;
			this.morphTexture === null && (this.morphTexture = new Ri(new Float32Array(r * this.count), r, this.count, Ye, Le));
			let i = this.morphTexture.source.data.data, a = 0;
			for (let e = 0; e < n.length; e++) a += n[e];
			let o = this.geometry.morphTargetsRelative ? 1 : 1 - a, s = r * e;
			return i[s] = o, i.set(n, s + 1), this;
		}
		updateMorphTargets() {}
		dispose() {
			this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
		}
	}, Zi = /*@__PURE__*/ new V(), Qi = /*@__PURE__*/ new V(), $i = /*@__PURE__*/ new H(), ea = class {
		constructor(e = new V(1, 0, 0), t = 0) {
			this.isPlane = !0, this.normal = e, this.constant = t;
		}
		set(e, t) {
			return this.normal.copy(e), this.constant = t, this;
		}
		setComponents(e, t, n, r) {
			return this.normal.set(e, t, n), this.constant = r, this;
		}
		setFromNormalAndCoplanarPoint(e, t) {
			return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
		}
		setFromCoplanarPoints(e, t, n) {
			let r = Zi.subVectors(n, t).cross(Qi.subVectors(e, t)).normalize();
			return this.setFromNormalAndCoplanarPoint(r, e), this;
		}
		copy(e) {
			return this.normal.copy(e.normal), this.constant = e.constant, this;
		}
		normalize() {
			let e = 1 / this.normal.length();
			return this.normal.multiplyScalar(e), this.constant *= e, this;
		}
		negate() {
			return this.constant *= -1, this.normal.negate(), this;
		}
		distanceToPoint(e) {
			return this.normal.dot(e) + this.constant;
		}
		distanceToSphere(e) {
			return this.distanceToPoint(e.center) - e.radius;
		}
		projectPoint(e, t) {
			return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
		}
		intersectLine(e, t, n = !0) {
			let r = e.delta(Zi), i = this.normal.dot(r);
			if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
			let a = -(e.start.dot(this.normal) + this.constant) / i;
			return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
		}
		intersectsLine(e) {
			let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
			return t < 0 && n > 0 || n < 0 && t > 0;
		}
		intersectsBox(e) {
			return e.intersectsPlane(this);
		}
		intersectsSphere(e) {
			return e.intersectsPlane(this);
		}
		coplanarPoint(e) {
			return e.copy(this.normal).multiplyScalar(-this.constant);
		}
		applyMatrix4(e, t) {
			let n = t || $i.getNormalMatrix(e), r = this.coplanarPoint(Zi).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
			return this.constant = -r.dot(i), this;
		}
		translate(e) {
			return this.constant -= e.dot(this.normal), this;
		}
		equals(e) {
			return e.normal.equals(this.normal) && e.constant === this.constant;
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}, ta = /*@__PURE__*/ new Kr(), na = /*@__PURE__*/ new B(.5, .5), ra = /*@__PURE__*/ new V(), ia = class {
		constructor(e = new ea(), t = new ea(), n = new ea(), r = new ea(), i = new ea(), a = new ea()) {
			this.planes = [
				e,
				t,
				n,
				r,
				i,
				a
			];
		}
		set(e, t, n, r, i, a) {
			let o = this.planes;
			return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
		}
		copy(e) {
			let t = this.planes;
			for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
			return this;
		}
		setFromProjectionMatrix(e, t = Qt, n = !1) {
			let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
			if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
			else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
			else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
			else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
			return this;
		}
		intersectsObject(e) {
			if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
			else {
				let t = e.geometry;
				t.boundingSphere === null && t.computeBoundingSphere(), ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
			}
			return this.intersectsSphere(ta);
		}
		intersectsSprite(e) {
			ta.center.set(0, 0, 0);
			let t = na.distanceTo(e.center);
			return ta.radius = .7071067811865476 + t, ta.applyMatrix4(e.matrixWorld), this.intersectsSphere(ta);
		}
		intersectsSphere(e) {
			let t = this.planes, n = e.center, r = -e.radius;
			for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
			return !0;
		}
		intersectsBox(e) {
			let t = this.planes;
			for (let n = 0; n < 6; n++) {
				let r = t[n];
				if (ra.x = r.normal.x > 0 ? e.max.x : e.min.x, ra.y = r.normal.y > 0 ? e.max.y : e.min.y, ra.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(ra) < 0) return !1;
			}
			return !0;
		}
		containsPoint(e) {
			let t = this.planes;
			for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
			return !0;
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}, aa = class extends ai {
		constructor(e) {
			super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new G(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
		}
		copy(e) {
			return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
		}
	}, oa = /*@__PURE__*/ new V(), sa = /*@__PURE__*/ new V(), ca = /*@__PURE__*/ new W(), la = /*@__PURE__*/ new pi(), ua = /*@__PURE__*/ new Kr(), da = /*@__PURE__*/ new V(), fa = /*@__PURE__*/ new V(), pa = class extends $n {
		constructor(e = new ei(), t = new aa()) {
			super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
		}
		copy(e, t) {
			return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
		}
		computeLineDistances() {
			let e = this.geometry;
			if (e.index === null) {
				let t = e.attributes.position, n = [0];
				for (let e = 1, r = t.count; e < r; e++) oa.fromBufferAttribute(t, e - 1), sa.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += oa.distanceTo(sa);
				e.setAttribute("lineDistance", new Hr(n, 1));
			} else l("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
			return this;
		}
		raycast(e, t) {
			let n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
			if (n.boundingSphere === null && n.computeBoundingSphere(), ua.copy(n.boundingSphere), ua.applyMatrix4(r), ua.radius += i, e.ray.intersectsSphere(ua) === !1) return;
			ca.copy(r).invert(), la.copy(e.ray).applyMatrix4(ca);
			let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = this.isLineSegments ? 2 : 1, l = n.index, u = n.attributes.position;
			if (l !== null) {
				let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count);
				for (let i = n, a = r - 1; i < a; i += c) {
					let n = l.getX(i), r = l.getX(i + 1), a = ue(this, e, la, s, n, r, i);
					a && t.push(a);
				}
				if (this.isLineLoop) {
					let i = l.getX(r - 1), a = l.getX(n), o = ue(this, e, la, s, i, a, r - 1);
					o && t.push(o);
				}
			} else {
				let n = Math.max(0, a.start), r = Math.min(u.count, a.start + a.count);
				for (let i = n, a = r - 1; i < a; i += c) {
					let n = ue(this, e, la, s, i, i + 1, i);
					n && t.push(n);
				}
				if (this.isLineLoop) {
					let i = ue(this, e, la, s, r - 1, n, r - 1);
					i && t.push(i);
				}
			}
		}
		updateMorphTargets() {
			let e = this.geometry.morphAttributes, t = Object.keys(e);
			if (t.length > 0) {
				let n = e[t[0]];
				if (n !== void 0) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let e = 0, t = n.length; e < t; e++) {
						let t = n[e].name || String(e);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
					}
				}
			}
		}
	}, ma = /*@__PURE__*/ new V(), ha = /*@__PURE__*/ new V(), ga = class extends pa {
		constructor(e, t) {
			super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
		}
		computeLineDistances() {
			let e = this.geometry;
			if (e.index === null) {
				let t = e.attributes.position, n = [];
				for (let e = 0, r = t.count; e < r; e += 2) ma.fromBufferAttribute(t, e), ha.fromBufferAttribute(t, e + 1), n[e] = e === 0 ? 0 : n[e - 1], n[e + 1] = n[e] + ma.distanceTo(ha);
				e.setAttribute("lineDistance", new Hr(n, 1));
			} else l("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
			return this;
		}
	}, _a = class extends pa {
		constructor(e, t) {
			super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
		}
	}, va = class extends ai {
		constructor(e) {
			super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new G(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
		}
		copy(e) {
			return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
		}
	}, ya = /*@__PURE__*/ new W(), ba = /*@__PURE__*/ new pi(), xa = /*@__PURE__*/ new Kr(), Sa = /*@__PURE__*/ new V(), Ca = class extends $n {
		constructor(e = new ei(), t = new va()) {
			super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
		}
		copy(e, t) {
			return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
		}
		raycast(e, t) {
			let n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold, a = n.drawRange;
			if (n.boundingSphere === null && n.computeBoundingSphere(), xa.copy(n.boundingSphere), xa.applyMatrix4(r), xa.radius += i, e.ray.intersectsSphere(xa) === !1) return;
			ya.copy(r).invert(), ba.copy(e.ray).applyMatrix4(ya);
			let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = n.index, l = n.attributes.position;
			if (c !== null) {
				let n = Math.max(0, a.start), i = Math.min(c.count, a.start + a.count);
				for (let a = n, o = i; a < o; a++) {
					let n = c.getX(a);
					Sa.fromBufferAttribute(l, n), de(Sa, n, s, r, e, t, this);
				}
			} else {
				let n = Math.max(0, a.start), i = Math.min(l.count, a.start + a.count);
				for (let a = n, o = i; a < o; a++) Sa.fromBufferAttribute(l, a), de(Sa, a, s, r, e, t, this);
			}
		}
		updateMorphTargets() {
			let e = this.geometry.morphAttributes, t = Object.keys(e);
			if (t.length > 0) {
				let n = e[t[0]];
				if (n !== void 0) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let e = 0, t = n.length; e < t; e++) {
						let t = n[e].name || String(e);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
					}
				}
			}
		}
	}, wa = class extends xn {
		constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
			super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
		}
		get images() {
			return this.image;
		}
		set images(e) {
			this.image = e;
		}
	}, Ta = class extends xn {
		constructor(e, t, n, r, i, a, o, s, c) {
			super(e, t, n, r, i, a, o, s, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
		}
	}, Ea = class extends xn {
		constructor(e, t, n = Ie, r, i, a, o = F, s = F, c, l = qe, u = 1) {
			if (l !== 1026 && l !== 1027) throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
			super({
				width: e,
				height: t,
				depth: u
			}, r, i, a, o, s, l, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
		}
		copy(e) {
			return super.copy(e), this.source = new vn(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
		}
	}, Da = class extends Ea {
		constructor(e, t = Ie, n = 301, r, i, a = F, o = F, s, c = qe) {
			let l = {
				width: e,
				height: e,
				depth: 1
			}, u = [
				l,
				l,
				l,
				l,
				l,
				l
			];
			super(e, e, t, n, r, i, a, o, s, c), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
		}
		get images() {
			return this.image;
		}
		set images(e) {
			this.image = e;
		}
	}, Oa = class extends xn {
		constructor(e = null) {
			super(), this.sourceTexture = e, this.isExternalTexture = !0;
		}
		copy(e) {
			return super.copy(e), this.sourceTexture = e.sourceTexture, this;
		}
	}, ka = class e extends ei {
		constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
			super(), this.type = "BoxGeometry", this.parameters = {
				width: e,
				height: t,
				depth: n,
				widthSegments: r,
				heightSegments: i,
				depthSegments: a
			};
			let o = this;
			r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
			let s = [], c = [], l = [], u = [], d = 0, f = 0;
			p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new Hr(c, 3)), this.setAttribute("normal", new Hr(l, 3)), this.setAttribute("uv", new Hr(u, 2));
			function p(e, t, n, r, i, a, p, m, h, g, _) {
				let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new V();
				for (let a = 0; a < w; a++) {
					let o = a * y - x;
					for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
				}
				for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
					let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
					s.push(n, r, a), s.push(r, i, a), E += 6;
				}
				o.addGroup(f, E, _), f += E, d += T;
			}
		}
		copy(e) {
			return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
		}
		static fromJSON(t) {
			return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
		}
	}, Aa = class e extends ei {
		constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
			super(), this.type = "CircleGeometry", this.parameters = {
				radius: e,
				segments: t,
				thetaStart: n,
				thetaLength: r
			}, t = Math.max(3, t);
			let i = [], a = [], o = [], s = [], c = new V(), l = new B();
			a.push(0, 0, 0), o.push(0, 0, 1), s.push(.5, .5);
			for (let i = 0, u = 3; i <= t; i++, u += 3) {
				let d = n + i / t * r;
				c.x = e * Math.cos(d), c.y = e * Math.sin(d), a.push(c.x, c.y, c.z), o.push(0, 0, 1), l.x = (a[u] / e + 1) / 2, l.y = (a[u + 1] / e + 1) / 2, s.push(l.x, l.y);
			}
			for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
			this.setIndex(i), this.setAttribute("position", new Hr(a, 3)), this.setAttribute("normal", new Hr(o, 3)), this.setAttribute("uv", new Hr(s, 2));
		}
		copy(e) {
			return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
		}
		static fromJSON(t) {
			return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
		}
	}, ja = class e extends ei {
		constructor(e = [], t = [], n = 1, r = 0) {
			super(), this.type = "PolyhedronGeometry", this.parameters = {
				vertices: e,
				indices: t,
				radius: n,
				detail: r
			};
			let i = [], a = [];
			o(r), c(n), l(), this.setAttribute("position", new Hr(i, 3)), this.setAttribute("normal", new Hr(i.slice(), 3)), this.setAttribute("uv", new Hr(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
			function o(e) {
				let n = new V(), r = new V(), i = new V();
				for (let a = 0; a < t.length; a += 3) f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e);
			}
			function s(e, t, n, r) {
				let i = r + 1, a = [];
				for (let r = 0; r <= i; r++) {
					a[r] = [];
					let o = e.clone().lerp(n, r / i), s = t.clone().lerp(n, r / i), c = i - r;
					for (let e = 0; e <= c; e++) e === 0 && r === i ? a[r][e] = o : a[r][e] = o.clone().lerp(s, e / c);
				}
				for (let e = 0; e < i; e++) for (let t = 0; t < 2 * (i - e) - 1; t++) {
					let n = Math.floor(t / 2);
					t % 2 == 0 ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n])) : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
				}
			}
			function c(e) {
				let t = new V();
				for (let n = 0; n < i.length; n += 3) t.x = i[n + 0], t.y = i[n + 1], t.z = i[n + 2], t.normalize().multiplyScalar(e), i[n + 0] = t.x, i[n + 1] = t.y, i[n + 2] = t.z;
			}
			function l() {
				let e = new V();
				for (let t = 0; t < i.length; t += 3) {
					e.x = i[t + 0], e.y = i[t + 1], e.z = i[t + 2];
					let n = h(e) / 2 / Math.PI + .5, r = g(e) / Math.PI + .5;
					a.push(n, 1 - r);
				}
				p(), u();
			}
			function u() {
				for (let e = 0; e < a.length; e += 6) {
					let t = a[e + 0], n = a[e + 2], r = a[e + 4];
					Math.max(t, n, r) > .9 && Math.min(t, n, r) < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), r < .2 && (a[e + 4] += 1));
				}
			}
			function d(e) {
				i.push(e.x, e.y, e.z);
			}
			function f(t, n) {
				let r = t * 3;
				n.x = e[r + 0], n.y = e[r + 1], n.z = e[r + 2];
			}
			function p() {
				let e = new V(), t = new V(), n = new V(), r = new V(), o = new B(), s = new B(), c = new B();
				for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
					e.set(i[l + 0], i[l + 1], i[l + 2]), t.set(i[l + 3], i[l + 4], i[l + 5]), n.set(i[l + 6], i[l + 7], i[l + 8]), o.set(a[u + 0], a[u + 1]), s.set(a[u + 2], a[u + 3]), c.set(a[u + 4], a[u + 5]), r.copy(e).add(t).add(n).divideScalar(3);
					let d = h(r);
					m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d);
				}
			}
			function m(e, t, n, r) {
				r < 0 && e.x === 1 && (a[t] = e.x - 1), n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + .5);
			}
			function h(e) {
				return Math.atan2(e.z, -e.x);
			}
			function g(e) {
				return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
			}
		}
		copy(e) {
			return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
		}
		static fromJSON(t) {
			return new e(t.vertices, t.indices, t.radius, t.detail);
		}
	}, Ma = class e extends ja {
		constructor(e = 1, t = 0) {
			let n = (1 + Math.sqrt(5)) / 2, r = [
				-1,
				n,
				0,
				1,
				n,
				0,
				-1,
				-n,
				0,
				1,
				-n,
				0,
				0,
				-1,
				n,
				0,
				1,
				n,
				0,
				-1,
				-n,
				0,
				1,
				-n,
				n,
				0,
				-1,
				n,
				0,
				1,
				-n,
				0,
				-1,
				-n,
				0,
				1
			];
			super(r, [
				0,
				11,
				5,
				0,
				5,
				1,
				0,
				1,
				7,
				0,
				7,
				10,
				0,
				10,
				11,
				1,
				5,
				9,
				5,
				11,
				4,
				11,
				10,
				2,
				10,
				7,
				6,
				7,
				1,
				8,
				3,
				9,
				4,
				3,
				4,
				2,
				3,
				2,
				6,
				3,
				6,
				8,
				3,
				8,
				9,
				4,
				9,
				5,
				2,
				4,
				11,
				6,
				2,
				10,
				8,
				6,
				7,
				9,
				8,
				1
			], e, t), this.type = "IcosahedronGeometry", this.parameters = {
				radius: e,
				detail: t
			};
		}
		static fromJSON(t) {
			return new e(t.radius, t.detail);
		}
	}, Na = class e extends ei {
		constructor(e = 1, t = 1, n = 1, r = 1) {
			super(), this.type = "PlaneGeometry", this.parameters = {
				width: e,
				height: t,
				widthSegments: n,
				heightSegments: r
			};
			let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
			for (let e = 0; e < l; e++) {
				let t = e * d - a;
				for (let n = 0; n < c; n++) {
					let r = n * u - i;
					p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
				}
			}
			for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
				let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
				f.push(n, r, a), f.push(r, i, a);
			}
			this.setIndex(f), this.setAttribute("position", new Hr(p, 3)), this.setAttribute("normal", new Hr(m, 3)), this.setAttribute("uv", new Hr(h, 2));
		}
		copy(e) {
			return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
		}
		static fromJSON(t) {
			return new e(t.width, t.height, t.widthSegments, t.heightSegments);
		}
	}, Pa = class e extends ei {
		constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
			super(), this.type = "SphereGeometry", this.parameters = {
				radius: e,
				widthSegments: t,
				heightSegments: n,
				phiStart: r,
				phiLength: i,
				thetaStart: a,
				thetaLength: o
			}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
			let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new V(), d = new V(), f = [], p = [], m = [], h = [];
			for (let f = 0; f <= n; f++) {
				let g = [], _ = f / n, v = a + _ * o, y = e * Math.cos(v), b = Math.sqrt(e * e - y * y), x = 0;
				f === 0 && a === 0 ? x = .5 / t : f === n && s === Math.PI && (x = -.5 / t);
				for (let e = 0; e <= t; e++) {
					let n = e / t, a = r + n * i;
					u.x = -b * Math.cos(a), u.y = y, u.z = b * Math.sin(a), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(n + x, 1 - _), g.push(c++);
				}
				l.push(g);
			}
			for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
				let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
				(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
			}
			this.setIndex(f), this.setAttribute("position", new Hr(p, 3)), this.setAttribute("normal", new Hr(m, 3)), this.setAttribute("uv", new Hr(h, 2));
		}
		copy(e) {
			return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
		}
		static fromJSON(t) {
			return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
		}
	}, Fa = {
		clone: fe,
		merge: N
	}, Ia = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", La = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Ra = class extends ai {
		constructor(e) {
			super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ia, this.fragmentShader = La, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
				clipCullDistance: !1,
				multiDraw: !1
			}, this.defaultAttributeValues = {
				color: [
					1,
					1,
					1
				],
				uv: [0, 0],
				uv1: [0, 0]
			}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
		}
		copy(e) {
			return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = fe(e.uniforms), this.uniformsGroups = me(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
		}
		toJSON(e) {
			let t = super.toJSON(e);
			t.glslVersion = this.glslVersion, t.uniforms = {};
			for (let n in this.uniforms) {
				let r = this.uniforms[n].value;
				r && r.isTexture ? t.uniforms[n] = {
					type: "t",
					value: r.toJSON(e).uuid
				} : r && r.isColor ? t.uniforms[n] = {
					type: "c",
					value: r.getHex()
				} : r && r.isVector2 ? t.uniforms[n] = {
					type: "v2",
					value: r.toArray()
				} : r && r.isVector3 ? t.uniforms[n] = {
					type: "v3",
					value: r.toArray()
				} : r && r.isVector4 ? t.uniforms[n] = {
					type: "v4",
					value: r.toArray()
				} : r && r.isMatrix3 ? t.uniforms[n] = {
					type: "m3",
					value: r.toArray()
				} : r && r.isMatrix4 ? t.uniforms[n] = {
					type: "m4",
					value: r.toArray()
				} : t.uniforms[n] = { value: r };
			}
			Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
			let n = {};
			for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
			return Object.keys(n).length > 0 && (t.extensions = n), t;
		}
		fromJSON(e, t) {
			if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
				let r = e.uniforms[n];
				switch (this.uniforms[n] = {}, r.type) {
					case "t":
						this.uniforms[n].value = t[r.value] || null;
						break;
					case "c":
						this.uniforms[n].value = new G().setHex(r.value);
						break;
					case "v2":
						this.uniforms[n].value = new B().fromArray(r.value);
						break;
					case "v3":
						this.uniforms[n].value = new V().fromArray(r.value);
						break;
					case "v4":
						this.uniforms[n].value = new Sn().fromArray(r.value);
						break;
					case "m3":
						this.uniforms[n].value = new H().fromArray(r.value);
						break;
					case "m4":
						this.uniforms[n].value = new W().fromArray(r.value);
						break;
					default: this.uniforms[n].value = r.value;
				}
			}
			if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
			return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
		}
	}, za = class extends Ra {
		constructor(e) {
			super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
		}
	}, Ba = class extends ai {
		constructor(e) {
			super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new G(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new G(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new B(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new In(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
		}
		copy(e) {
			return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
		}
	}, Va = class extends Ba {
		constructor(e) {
			super(), this.isMeshPhysicalMaterial = !0, this.defines = {
				STANDARD: "",
				PHYSICAL: ""
			}, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new B(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
				get: function() {
					return m(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
				},
				set: function(e) {
					this.ior = (1 + .4 * e) / (1 - .4 * e);
				}
			}), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new G(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = Infinity, this.attenuationColor = new G(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new G(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
		}
		get anisotropy() {
			return this._anisotropy;
		}
		set anisotropy(e) {
			this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
		}
		get clearcoat() {
			return this._clearcoat;
		}
		set clearcoat(e) {
			this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
		}
		get iridescence() {
			return this._iridescence;
		}
		set iridescence(e) {
			this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
		}
		get dispersion() {
			return this._dispersion;
		}
		set dispersion(e) {
			this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
		}
		get sheen() {
			return this._sheen;
		}
		set sheen(e) {
			this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
		}
		get transmission() {
			return this._transmission;
		}
		set transmission(e) {
			this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
		}
		copy(e) {
			return super.copy(e), this.defines = {
				STANDARD: "",
				PHYSICAL: ""
			}, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
		}
	}, Ha = class extends ai {
		constructor(e) {
			super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Wt, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
		}
		copy(e) {
			return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
		}
	}, Ua = class extends ai {
		constructor(e) {
			super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
		}
		copy(e) {
			return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
		}
	}, Wa = class {
		constructor(e, t, n, r) {
			this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
		}
		evaluate(e) {
			let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
			validate_interval: {
				seek: {
					let a;
					linear_scan: {
						forward_scan: if (!(e < r)) {
							for (let a = n + 2;;) {
								if (r === void 0) {
									if (e < i) break forward_scan;
									return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
								}
								if (n === a) break;
								if (i = r, r = t[++n], e < r) break seek;
							}
							a = t.length;
							break linear_scan;
						}
						if (!(e >= i)) {
							let o = t[1];
							e < o && (n = 2, i = o);
							for (let a = n - 2;;) {
								if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
								if (n === a) break;
								if (r = i, i = t[--n - 1], e >= i) break seek;
							}
							a = n, n = 0;
							break linear_scan;
						}
						break validate_interval;
					}
					for (; n < a;) {
						let r = n + a >>> 1;
						e < t[r] ? a = r : n = r + 1;
					}
					if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
					if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
				}
				this._cachedIndex = n, this.intervalChanged_(n, i, r);
			}
			return this.interpolate_(n, i, e, r);
		}
		getSettings_() {
			return this.settings || this.DefaultSettings_;
		}
		copySampleValue_(e) {
			let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
			for (let e = 0; e !== r; ++e) t[e] = n[i + e];
			return t;
		}
		interpolate_() {
			throw Error("THREE.Interpolant: Call to abstract method.");
		}
		intervalChanged_() {}
	}, Ga = class extends Wa {
		constructor(e, t, n, r) {
			super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
				endingStart: Bt,
				endingEnd: Bt
			};
		}
		intervalChanged_(e, t, n) {
			let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
			if (o === void 0) switch (this.getSettings_().endingStart) {
				case Vt:
					i = e, o = 2 * t - n;
					break;
				case Ht:
					i = r.length - 2, o = t + r[i] - r[i + 1];
					break;
				default: i = e, o = n;
			}
			if (s === void 0) switch (this.getSettings_().endingEnd) {
				case Vt:
					a = e, s = 2 * n - t;
					break;
				case Ht:
					a = 1, s = n + r[1] - r[0];
					break;
				default: a = e - 1, s = t;
			}
			let c = (n - t) * .5, l = this.valueSize;
			this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
		}
		interpolate_(e, t, n, r) {
			let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
			for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
			return i;
		}
	}, Ka = class extends Wa {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
		interpolate_(e, t, n, r) {
			let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
			for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
			return i;
		}
	}, qa = class extends Wa {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
		interpolate_(e) {
			return this.copySampleValue_(e - 1);
		}
	}, Ja = class extends Wa {
		interpolate_(e, t, n, r) {
			let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.inTangents, u = this.outTangents;
			if (!l || !u) {
				let e = (n - t) / (r - t), l = 1 - e;
				for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
				return i;
			}
			let d = o * 2, f = e - 1;
			for (let p = 0; p !== o; ++p) {
				let o = a[c + p], m = a[s + p], h = f * d + p * 2, g = u[h], _ = u[h + 1], v = e * d + p * 2, y = l[v], b = l[v + 1], x = (n - t) / (r - t), S, C, w, T, E;
				for (let e = 0; e < 8; e++) {
					S = x * x, C = S * x, w = 1 - x, T = w * w, E = T * w;
					let e = E * t + 3 * T * x * g + 3 * w * S * y + C * r - n;
					if (Math.abs(e) < 1e-10) break;
					let i = 3 * T * (g - t) + 6 * w * x * (y - g) + 3 * S * (r - y);
					if (Math.abs(i) < 1e-10) break;
					x -= e / i, x = Math.max(0, Math.min(1, x));
				}
				i[p] = E * o + 3 * T * x * _ + 3 * w * S * b + C * m;
			}
			return i;
		}
	}, Ya = class {
		constructor(e, t, n, r) {
			if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
			if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
			this.name = e, this.times = ge(t, this.TimeBufferType), this.values = ge(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
		}
		static toJSON(e) {
			let t = e.constructor, n;
			if (t.toJSON !== this.toJSON) n = t.toJSON(e);
			else {
				n = {
					name: e.name,
					times: ge(e.times, Array),
					values: ge(e.values, Array)
				};
				let t = e.getInterpolation();
				t !== e.DefaultInterpolation && (n.interpolation = t);
			}
			return n.type = e.ValueTypeName, n;
		}
		InterpolantFactoryMethodDiscrete(e) {
			return new qa(this.times, this.values, this.getValueSize(), e);
		}
		InterpolantFactoryMethodLinear(e) {
			return new Ka(this.times, this.values, this.getValueSize(), e);
		}
		InterpolantFactoryMethodSmooth(e) {
			return new Ga(this.times, this.values, this.getValueSize(), e);
		}
		InterpolantFactoryMethodBezier(e) {
			let t = new Ja(this.times, this.values, this.getValueSize(), e);
			return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
		}
		setInterpolation(e) {
			let t;
			switch (e) {
				case It:
					t = this.InterpolantFactoryMethodDiscrete;
					break;
				case Lt:
					t = this.InterpolantFactoryMethodLinear;
					break;
				case Rt:
					t = this.InterpolantFactoryMethodSmooth;
					break;
				case zt: t = this.InterpolantFactoryMethodBezier;
			}
			if (t === void 0) {
				let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if (this.createInterpolant === void 0) {
					if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
					else throw Error(t);
				}
				return l("KeyframeTrack:", t), this;
			}
			return this.createInterpolant = t, this;
		}
		getInterpolation() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete: return It;
				case this.InterpolantFactoryMethodLinear: return Lt;
				case this.InterpolantFactoryMethodSmooth: return Rt;
				case this.InterpolantFactoryMethodBezier: return zt;
			}
		}
		getValueSize() {
			return this.values.length / this.times.length;
		}
		shift(e) {
			if (e !== 0) {
				let t = this.times;
				for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
			}
			return this;
		}
		scale(e) {
			if (e !== 1) {
				let t = this.times;
				for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
			}
			return this;
		}
		trim(e, t) {
			let n = this.times, r = n.length, i = 0, a = r - 1;
			for (; i !== r && n[i] < e;) ++i;
			for (; a !== -1 && n[a] > t;) --a;
			if (++a, i !== 0 || a !== r) {
				i >= a && (a = Math.max(a, 1), i = a - 1);
				let e = this.getValueSize();
				this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
			}
			return this;
		}
		validate() {
			let e = !0, t = this.getValueSize();
			t - Math.floor(t) !== 0 && (u("KeyframeTrack: Invalid value size in track.", this), e = !1);
			let n = this.times, r = this.values, a = n.length;
			a === 0 && (u("KeyframeTrack: Track is empty.", this), e = !1);
			let o = null;
			for (let t = 0; t !== a; t++) {
				let r = n[t];
				if (typeof r == "number" && isNaN(r)) {
					u("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
					break;
				}
				if (o !== null && o > r) {
					u("KeyframeTrack: Out of order keys.", this, t, r, o), e = !1;
					break;
				}
				o = r;
			}
			if (r !== void 0 && i(r)) for (let t = 0, n = r.length; t !== n; ++t) {
				let n = r[t];
				if (isNaN(n)) {
					u("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
					break;
				}
			}
			return e;
		}
		optimize() {
			let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Rt, i = e.length - 1, a = 1;
			for (let o = 1; o < i; ++o) {
				let i = !1, s = e[o];
				if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
					if (r) i = !0;
					else {
						let e = o * n, r = e - n, a = e + n;
						for (let o = 0; o !== n; ++o) {
							let n = t[e + o];
							if (n !== t[r + o] || n !== t[a + o]) {
								i = !0;
								break;
							}
						}
					}
				}
				if (i) {
					if (o !== a) {
						e[a] = e[o];
						let r = o * n, i = a * n;
						for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
					}
					++a;
				}
			}
			if (i > 0) {
				e[a] = e[i];
				for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
				++a;
			}
			return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
		}
		clone() {
			let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
			return r.createInterpolant = this.createInterpolant, r;
		}
	}, Ya.prototype.ValueTypeName = "", Ya.prototype.TimeBufferType = Float32Array, Ya.prototype.ValueBufferType = Float32Array, Ya.prototype.DefaultInterpolation = Lt, Xa = class extends Ya {
		constructor(e, t, n) {
			super(e, t, n);
		}
	}, Xa.prototype.ValueTypeName = "bool", Xa.prototype.ValueBufferType = Array, Xa.prototype.DefaultInterpolation = It, Xa.prototype.InterpolantFactoryMethodLinear = void 0, Xa.prototype.InterpolantFactoryMethodSmooth = void 0, Za = class extends Ya {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
	}, Za.prototype.ValueTypeName = "color", Qa = class extends Ya {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
	}, Qa.prototype.ValueTypeName = "number", $a = class extends Wa {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
		interpolate_(e, t, n, r) {
			let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
			for (let e = c + o; c !== e; c += 4) ln.slerpFlat(i, 0, a, c - o, a, c, s);
			return i;
		}
	}, eo = class extends Ya {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
		InterpolantFactoryMethodLinear(e) {
			return new $a(this.times, this.values, this.getValueSize(), e);
		}
	}, eo.prototype.ValueTypeName = "quaternion", eo.prototype.InterpolantFactoryMethodSmooth = void 0, to = class extends Ya {
		constructor(e, t, n) {
			super(e, t, n);
		}
	}, to.prototype.ValueTypeName = "string", to.prototype.ValueBufferType = Array, to.prototype.DefaultInterpolation = It, to.prototype.InterpolantFactoryMethodLinear = void 0, to.prototype.InterpolantFactoryMethodSmooth = void 0, no = class extends Ya {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
	}, no.prototype.ValueTypeName = "vector", ro = class {
		constructor(e = "", t = -1, n = [], r = Ut) {
			this.name = e, this.tracks = n, this.duration = t, this.blendMode = r, this.uuid = p(), this.userData = {}, this.duration < 0 && this.resetDuration();
		}
		static parse(e) {
			let t = [], n = e.tracks, r = 1 / (e.fps || 1);
			for (let e = 0, i = n.length; e !== i; ++e) t.push(xe(n[e]).scale(r));
			let i = new this(e.name, e.duration, t, e.blendMode);
			return i.uuid = e.uuid, i.userData = JSON.parse(e.userData || "{}"), i;
		}
		static toJSON(e) {
			let t = [], n = e.tracks, r = {
				name: e.name,
				duration: e.duration,
				tracks: t,
				uuid: e.uuid,
				blendMode: e.blendMode,
				userData: JSON.stringify(e.userData)
			};
			for (let e = 0, r = n.length; e !== r; ++e) t.push(Ya.toJSON(n[e]));
			return r;
		}
		static CreateFromMorphTargetSequence(e, t, n, r) {
			let i = t.length, a = [];
			for (let e = 0; e < i; e++) {
				let o = [], s = [];
				o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0);
				let c = _e(o);
				o = ve(o, 1, c), s = ve(s, 1, c), !r && o[0] === 0 && (o.push(i), s.push(s[0])), a.push(new Qa(".morphTargetInfluences[" + t[e].name + "]", o, s).scale(1 / n));
			}
			return new this(e, -1, a);
		}
		static findByName(e, t) {
			let n = e;
			if (!Array.isArray(e)) {
				let t = e;
				n = t.geometry && t.geometry.animations || t.animations;
			}
			for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
			return null;
		}
		static CreateClipsFromMorphTargetSequences(e, t, n) {
			let r = {}, i = /^([\w-]*?)([\d]+)$/;
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t], a = n.name.match(i);
				if (a && a.length > 1) {
					let e = a[1], t = r[e];
					t || (r[e] = t = []), t.push(n);
				}
			}
			let a = [];
			for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n));
			return a;
		}
		resetDuration() {
			let e = this.tracks, t = 0;
			for (let n = 0, r = e.length; n !== r; ++n) {
				let e = this.tracks[n];
				t = Math.max(t, e.times[e.times.length - 1]);
			}
			return this.duration = t, this;
		}
		trim() {
			for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
			return this;
		}
		validate() {
			let e = !0;
			for (let t = 0; t < this.tracks.length; t++) e &&= this.tracks[t].validate();
			return e;
		}
		optimize() {
			for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
			return this;
		}
		clone() {
			let e = [];
			for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
			let t = new this.constructor(this.name, this.duration, e, this.blendMode);
			return t.userData = JSON.parse(JSON.stringify(this.userData)), t;
		}
		toJSON() {
			return this.constructor.toJSON(this);
		}
	}, io = {
		enabled: !1,
		files: {},
		add: function(e, t) {
			this.enabled !== !1 && (Se(e) || (this.files[e] = t));
		},
		get: function(e) {
			if (this.enabled !== !1 && !Se(e)) return this.files[e];
		},
		remove: function(e) {
			delete this.files[e];
		},
		clear: function() {
			this.files = {};
		}
	}, ao = class {
		constructor(e, t, n) {
			let r = this, i = !1, a = 0, o = 0, s, c = [];
			this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
				o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
			}, this.itemEnd = function(e) {
				a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
			}, this.itemError = function(e) {
				r.onError !== void 0 && r.onError(e);
			}, this.resolveURL = function(e) {
				return e = e.normalize("NFC"), s ? s(e) : e;
			}, this.setURLModifier = function(e) {
				return s = e, this;
			}, this.addHandler = function(e, t) {
				return c.push(e, t), this;
			}, this.removeHandler = function(e) {
				let t = c.indexOf(e);
				return t !== -1 && c.splice(t, 2), this;
			}, this.getHandler = function(e) {
				for (let t = 0, n = c.length; t < n; t += 2) {
					let n = c[t], r = c[t + 1];
					if (n.global && (n.lastIndex = 0), n.test(e)) return r;
				}
				return null;
			}, this.abort = function() {
				return this.abortController.abort(), this._abortController = null, this;
			};
		}
		get abortController() {
			return this._abortController ||= new AbortController(), this._abortController;
		}
	}, oo = /*@__PURE__*/ new ao(), so = class {
		constructor(e) {
			this.manager = e === void 0 ? oo : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
		}
		load() {}
		loadAsync(e, t) {
			let n = this;
			return new Promise(function(r, i) {
				n.load(e, r, t, i);
			});
		}
		parse() {}
		setCrossOrigin(e) {
			return this.crossOrigin = e, this;
		}
		setWithCredentials(e) {
			return this.withCredentials = e, this;
		}
		setPath(e) {
			return this.path = e, this;
		}
		setResourcePath(e) {
			return this.resourcePath = e, this;
		}
		setRequestHeader(e) {
			return this.requestHeader = e, this;
		}
		abort() {
			return this;
		}
	}, so.DEFAULT_MATERIAL_NAME = "__DEFAULT", co = {}, lo = class extends Error {
		constructor(e, t) {
			super(e), this.response = t;
		}
	}, uo = class extends so {
		constructor(e) {
			super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
		}
		load(e, t, n, r) {
			e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
			let i = io.get(`file:${e}`);
			if (i !== void 0) {
				this.manager.itemStart(e), setTimeout(() => {
					t && t(i), this.manager.itemEnd(e);
				}, 0);
				return;
			}
			if (co[e] !== void 0) {
				co[e].push({
					onLoad: t,
					onProgress: n,
					onError: r
				});
				return;
			}
			co[e] = [], co[e].push({
				onLoad: t,
				onProgress: n,
				onError: r
			});
			let a = new Request(e, {
				headers: new Headers(this.requestHeader),
				credentials: this.withCredentials ? "include" : "same-origin",
				signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
			}), o = this.mimeType, s = this.responseType;
			fetch(a).then((t) => {
				if (t.status === 200 || t.status === 0) {
					if (t.status === 0 && l("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || t.body === void 0 || t.body.getReader === void 0) return t;
					let n = co[e], r = t.body.getReader(), i = t.headers.get("X-File-Size") || t.headers.get("Content-Length"), a = i ? parseInt(i) : 0, o = a !== 0, s = 0, c = new ReadableStream({ start(e) {
						t();
						function t() {
							r.read().then(({ done: r, value: i }) => {
								if (r) e.close();
								else {
									s += i.byteLength;
									let r = new ProgressEvent("progress", {
										lengthComputable: o,
										loaded: s,
										total: a
									});
									for (let e = 0, t = n.length; e < t; e++) {
										let t = n[e];
										t.onProgress && t.onProgress(r);
									}
									e.enqueue(i), t();
								}
							}, (t) => {
								e.error(t);
							});
						}
					} });
					return new Response(c);
				}
				throw new lo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t);
			}).then((e) => {
				switch (s) {
					case "arraybuffer": return e.arrayBuffer();
					case "blob": return e.blob();
					case "document": return e.text().then((e) => new DOMParser().parseFromString(e, o));
					case "json": return e.json();
					default:
						if (o === "") return e.text();
						{
							let t = /charset="?([^;"\s]*)"?/i.exec(o), n = t && t[1] ? t[1].toLowerCase() : void 0, r = new TextDecoder(n);
							return e.arrayBuffer().then((e) => r.decode(e));
						}
				}
			}).then((t) => {
				io.add(`file:${e}`, t);
				let n = co[e];
				delete co[e];
				for (let e = 0, r = n.length; e < r; e++) {
					let r = n[e];
					r.onLoad && r.onLoad(t);
				}
			}).catch((t) => {
				let n = co[e];
				if (n === void 0) throw this.manager.itemError(e), t;
				delete co[e];
				for (let e = 0, r = n.length; e < r; e++) {
					let r = n[e];
					r.onError && r.onError(t);
				}
				this.manager.itemError(e);
			}).finally(() => {
				this.manager.itemEnd(e);
			}), this.manager.itemStart(e);
		}
		setResponseType(e) {
			return this.responseType = e, this;
		}
		setMimeType(e) {
			return this.mimeType = e, this;
		}
		abort() {
			return this._abortController.abort(), this._abortController = new AbortController(), this;
		}
	}, fo = /* @__PURE__ */ new WeakMap(), po = class extends so {
		constructor(e) {
			super(e);
		}
		load(e, t, n, r) {
			this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
			let i = this, o = io.get(`image:${e}`);
			if (o !== void 0) {
				if (o.complete === !0) i.manager.itemStart(e), setTimeout(function() {
					t && t(o), i.manager.itemEnd(e);
				}, 0);
				else {
					let e = fo.get(o);
					e === void 0 && (e = [], fo.set(o, e)), e.push({
						onLoad: t,
						onError: r
					});
				}
				return o;
			}
			let s = a("img");
			function c() {
				u(), t && t(this);
				let n = fo.get(this) || [];
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					t.onLoad && t.onLoad(this);
				}
				fo.delete(this), i.manager.itemEnd(e);
			}
			function l(t) {
				u(), r && r(t), io.remove(`image:${e}`);
				let n = fo.get(this) || [];
				for (let e = 0; e < n.length; e++) {
					let r = n[e];
					r.onError && r.onError(t);
				}
				fo.delete(this), i.manager.itemError(e), i.manager.itemEnd(e);
			}
			function u() {
				s.removeEventListener("load", c, !1), s.removeEventListener("error", l, !1);
			}
			return s.addEventListener("load", c, !1), s.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (s.crossOrigin = this.crossOrigin), io.add(`image:${e}`, s), i.manager.itemStart(e), s.src = e, s;
		}
	}, mo = class extends so {
		constructor(e) {
			super(e);
		}
		load(e, t, n, r) {
			let i = new xn(), a = new po(this.manager);
			return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(e) {
				i.image = e, i.needsUpdate = !0, t !== void 0 && t(i);
			}, n, r), i;
		}
	}, ho = class extends $n {
		constructor(e, t = 1) {
			super(), this.isLight = !0, this.type = "Light", this.color = new G(e), this.intensity = t;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
		copy(e, t) {
			return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
		}
	}, go = /*@__PURE__*/ new W(), _o = /*@__PURE__*/ new V(), vo = /*@__PURE__*/ new V(), yo = class {
		constructor(e) {
			this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new B(512, 512), this.mapType = Me, this.map = null, this.mapPass = null, this.matrix = new W(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ia(), this._frameExtents = new B(1, 1), this._viewportCount = 1, this._viewports = [new Sn(0, 0, 1, 1)];
		}
		getViewportCount() {
			return this._viewportCount;
		}
		getFrustum() {
			return this._frustum;
		}
		updateMatrices(e) {
			let t = this.camera, n = this.matrix;
			_o.setFromMatrixPosition(e.matrixWorld), t.position.copy(_o), vo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(vo), t.updateMatrixWorld(), go.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(go, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(go);
		}
		getViewport(e) {
			return this._viewports[e];
		}
		getFrameExtents() {
			return this._frameExtents;
		}
		dispose() {
			this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
		}
		copy(e) {
			return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		toJSON() {
			let e = {};
			return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
		}
	}, bo = /*@__PURE__*/ new V(), xo = /*@__PURE__*/ new ln(), So = /*@__PURE__*/ new V(), Co = class extends $n {
		constructor() {
			super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new W(), this.projectionMatrix = new W(), this.projectionMatrixInverse = new W(), this.coordinateSystem = Qt, this._reversedDepth = !1;
		}
		get reversedDepth() {
			return this._reversedDepth;
		}
		copy(e, t) {
			return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
		}
		getWorldDirection(e) {
			return super.getWorldDirection(e).negate();
		}
		updateMatrixWorld(e) {
			super.updateMatrixWorld(e), this.matrixWorld.decompose(bo, xo, So), So.x === 1 && So.y === 1 && So.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(bo, xo, So.set(1, 1, 1)).invert();
		}
		updateWorldMatrix(e, t, n = !1) {
			super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(bo, xo, So), So.x === 1 && So.y === 1 && So.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(bo, xo, So.set(1, 1, 1)).invert();
		}
		clone() {
			return new this.constructor().copy(this);
		}
	}, wo = /*@__PURE__*/ new V(), To = /*@__PURE__*/ new B(), Eo = /*@__PURE__*/ new B(), Do = class extends Co {
		constructor(e = 50, t = 1, n = .1, r = 2e3) {
			super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
		}
		copy(e, t) {
			return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
		}
		setFocalLength(e) {
			let t = .5 * this.getFilmHeight() / e;
			this.fov = sn * 2 * Math.atan(t), this.updateProjectionMatrix();
		}
		getFocalLength() {
			let e = Math.tan(on * .5 * this.fov);
			return .5 * this.getFilmHeight() / e;
		}
		getEffectiveFOV() {
			return sn * 2 * Math.atan(Math.tan(on * .5 * this.fov) / this.zoom);
		}
		getFilmWidth() {
			return this.filmGauge * Math.min(this.aspect, 1);
		}
		getFilmHeight() {
			return this.filmGauge / Math.max(this.aspect, 1);
		}
		getViewBounds(e, t, n) {
			wo.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(wo.x, wo.y).multiplyScalar(-e / wo.z), wo.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(wo.x, wo.y).multiplyScalar(-e / wo.z);
		}
		getViewSize(e, t) {
			return this.getViewBounds(e, To, Eo), t.subVectors(Eo, To);
		}
		setViewOffset(e, t, n, r, i, a) {
			this.aspect = e / t, this.view === null && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
		}
		clearViewOffset() {
			this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
		}
		updateProjectionMatrix() {
			let e = this.near, t = e * Math.tan(on * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
			if (this.view !== null && this.view.enabled) {
				let e = a.fullWidth, o = a.fullHeight;
				i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
			}
			let o = this.filmOffset;
			o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
		}
	}, Oo = class extends yo {
		constructor() {
			super(new Do(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1, this.aspect = 1;
		}
		updateMatrices(e) {
			let t = this.camera, n = sn * 2 * e.angle * this.focus, r = this.mapSize.width / this.mapSize.height * this.aspect, i = e.distance || t.far;
			(n !== t.fov || r !== t.aspect || i !== t.far) && (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), super.updateMatrices(e);
		}
		copy(e) {
			return super.copy(e), this.focus = e.focus, this;
		}
	}, ko = class extends ho {
		constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 2) {
			super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy($n.DEFAULT_UP), this.updateMatrix(), this.target = new $n(), this.distance = n, this.angle = r, this.penumbra = i, this.decay = a, this.map = null, this.shadow = new Oo();
		}
		get power() {
			return this.intensity * Math.PI;
		}
		set power(e) {
			this.intensity = e / Math.PI;
		}
		dispose() {
			super.dispose(), this.shadow.dispose();
		}
		copy(e, t) {
			return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.map = e.map, this.shadow = e.shadow.clone(), this;
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return t.object.distance = this.distance, t.object.angle = this.angle, t.object.decay = this.decay, t.object.penumbra = this.penumbra, t.object.target = this.target.uuid, this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid), t.object.shadow = this.shadow.toJSON(), t;
		}
	}, Ao = class extends yo {
		constructor() {
			super(new Do(90, 1, .5, 500)), this.isPointLightShadow = !0;
		}
	}, jo = class extends ho {
		constructor(e, t, n = 0, r = 2) {
			super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Ao();
		}
		get power() {
			return this.intensity * 4 * Math.PI;
		}
		set power(e) {
			this.intensity = e / (4 * Math.PI);
		}
		dispose() {
			super.dispose(), this.shadow.dispose();
		}
		copy(e, t) {
			return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
		}
	}, Mo = class extends Co {
		constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
			super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
		}
		copy(e, t) {
			return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
		}
		setViewOffset(e, t, n, r, i, a) {
			this.view === null && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
		}
		clearViewOffset() {
			this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
		}
		updateProjectionMatrix() {
			let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
			if (this.view !== null && this.view.enabled) {
				let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
				i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
			}
			this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
		}
	}, No = class extends yo {
		constructor() {
			super(new Mo(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
		}
	}, Po = class extends ho {
		constructor(e, t) {
			super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy($n.DEFAULT_UP), this.updateMatrix(), this.target = new $n(), this.shadow = new No();
		}
		dispose() {
			super.dispose(), this.shadow.dispose();
		}
		copy(e) {
			return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
		}
		toJSON(e) {
			let t = super.toJSON(e);
			return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
		}
	}, Fo = class {
		static extractUrlBase(e) {
			let t = e.lastIndexOf("/");
			return t === -1 ? "./" : e.slice(0, t + 1);
		}
		static resolveURL(e, t) {
			return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
		}
	}, Io = /* @__PURE__ */ new WeakMap(), Lo = class extends so {
		constructor(e) {
			super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && l("ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && l("ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
		}
		setOptions(e) {
			return this.options = e, this;
		}
		load(e, t, n, r) {
			e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
			let i = this, a = io.get(`image-bitmap:${e}`);
			if (a !== void 0) {
				if (i.manager.itemStart(e), a.then) {
					a.then((n) => {
						Io.has(a) === !0 ? (r && r(Io.get(a)), i.manager.itemError(e), i.manager.itemEnd(e)) : (t && t(n), i.manager.itemEnd(e));
					});
					return;
				}
				setTimeout(function() {
					t && t(a), i.manager.itemEnd(e);
				}, 0);
				return;
			}
			let o = {};
			o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, o.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
			let s = fetch(e, o).then(function(e) {
				return e.blob();
			}).then(function(e) {
				return createImageBitmap(e, Object.assign(i.options, { colorSpaceConversion: "none" }));
			}).then(function(n) {
				io.add(`image-bitmap:${e}`, n), t && t(n), i.manager.itemEnd(e);
			}).catch(function(t) {
				r && r(t), Io.set(s, t), io.remove(`image-bitmap:${e}`), i.manager.itemError(e), i.manager.itemEnd(e);
			});
			io.add(`image-bitmap:${e}`, s), i.manager.itemStart(e);
		}
		abort() {
			return this._abortController.abort(), this._abortController = new AbortController(), this;
		}
	}, Ro = -90, zo = 1, Bo = class extends $n {
		constructor(e, t, n) {
			super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
			let r = new Do(Ro, zo, e, t);
			r.layers = this.layers, this.add(r);
			let i = new Do(Ro, zo, e, t);
			i.layers = this.layers, this.add(i);
			let a = new Do(Ro, zo, e, t);
			a.layers = this.layers, this.add(a);
			let o = new Do(Ro, zo, e, t);
			o.layers = this.layers, this.add(o);
			let s = new Do(Ro, zo, e, t);
			s.layers = this.layers, this.add(s);
			let c = new Do(Ro, zo, e, t);
			c.layers = this.layers, this.add(c);
		}
		updateCoordinateSystem() {
			let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
			for (let e of t) this.remove(e);
			if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
			else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
			else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
			for (let e of t) this.add(e), e.updateMatrixWorld();
		}
		update(e, t) {
			this.parent === null && this.updateMatrixWorld();
			let { renderTarget: n, activeMipmapLevel: r } = this;
			this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
			let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
			e.xr.enabled = !1;
			let m = n.texture.generateMipmaps;
			n.texture.generateMipmaps = !1;
			let h = !1;
			h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
		}
	}, Vo = class extends Do {
		constructor(e = []) {
			super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
		}
	}, Ho = "\\[\\]\\.:\\/", Uo = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), Wo = "[^\\[\\]\\.:\\/]", Go = "[^" + Ho.replace("\\.", "") + "]", Ko = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", Wo), qo = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", Go), Jo = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", Wo), Yo = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", Wo), Xo = RegExp("^" + Ko + qo + Jo + Yo + "$"), Zo = [
		"material",
		"materials",
		"bones",
		"map"
	], Qo = class {
		constructor(e, t, n) {
			let r = n || $o.parseTrackName(t);
			this._targetGroup = e, this._bindings = e.subscribe_(t, r);
		}
		getValue(e, t) {
			this.bind();
			let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
			r !== void 0 && r.getValue(e, t);
		}
		setValue(e, t) {
			let n = this._bindings;
			for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
		}
		bind() {
			let e = this._bindings;
			for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
		}
		unbind() {
			let e = this._bindings;
			for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
		}
	}, $o = class e {
		constructor(t, n, r) {
			this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
		}
		static create(t, n, r) {
			return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
		}
		static sanitizeNodeName(e) {
			return e.replace(/\s/g, "_").replace(Uo, "");
		}
		static parseTrackName(e) {
			let t = Xo.exec(e);
			if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
			let n = {
				nodeName: t[2],
				objectName: t[3],
				objectIndex: t[4],
				propertyName: t[5],
				propertyIndex: t[6]
			}, r = n.nodeName && n.nodeName.lastIndexOf(".");
			if (r !== void 0 && r !== -1) {
				let e = n.nodeName.substring(r + 1);
				Zo.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
			}
			if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
			return n;
		}
		static findNode(e, t) {
			if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
			if (e.skeleton) {
				let n = e.skeleton.getBoneByName(t);
				if (n !== void 0) return n;
			}
			if (e.children) {
				let n = function(e) {
					for (let r = 0; r < e.length; r++) {
						let i = e[r];
						if (i.name === t || i.uuid === t) return i;
						let a = n(i.children);
						if (a) return a;
					}
					return null;
				}, r = n(e.children);
				if (r) return r;
			}
			return null;
		}
		_getValue_unavailable() {}
		_setValue_unavailable() {}
		_getValue_direct(e, t) {
			e[t] = this.targetObject[this.propertyName];
		}
		_getValue_array(e, t) {
			let n = this.resolvedProperty;
			for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
		}
		_getValue_arrayElement(e, t) {
			e[t] = this.resolvedProperty[this.propertyIndex];
		}
		_getValue_toArray(e, t) {
			this.resolvedProperty.toArray(e, t);
		}
		_setValue_direct(e, t) {
			this.targetObject[this.propertyName] = e[t];
		}
		_setValue_direct_setNeedsUpdate(e, t) {
			this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
		}
		_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
			this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_setValue_array(e, t) {
			let n = this.resolvedProperty;
			for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		}
		_setValue_array_setNeedsUpdate(e, t) {
			let n = this.resolvedProperty;
			for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
			this.targetObject.needsUpdate = !0;
		}
		_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
			let n = this.resolvedProperty;
			for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
			this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_setValue_arrayElement(e, t) {
			this.resolvedProperty[this.propertyIndex] = e[t];
		}
		_setValue_arrayElement_setNeedsUpdate(e, t) {
			this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
		}
		_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
			this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_setValue_fromArray(e, t) {
			this.resolvedProperty.fromArray(e, t);
		}
		_setValue_fromArray_setNeedsUpdate(e, t) {
			this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
		}
		_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
			this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_getValue_unbound(e, t) {
			this.bind(), this.getValue(e, t);
		}
		_setValue_unbound(e, t) {
			this.bind(), this.setValue(e, t);
		}
		bind() {
			let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
			if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
				l("PropertyBinding: No target node found for track: " + this.path + ".");
				return;
			}
			if (r) {
				let e = n.objectIndex;
				switch (r) {
					case "materials":
						if (!t.material) {
							u("PropertyBinding: Can not bind to material as node does not have a material.", this);
							return;
						}
						if (!t.material.materials) {
							u("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
							return;
						}
						t = t.material.materials;
						break;
					case "bones":
						if (!t.skeleton) {
							u("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
							return;
						}
						t = t.skeleton.bones;
						for (let n = 0; n < t.length; n++) if (t[n].name === e) {
							e = n;
							break;
						}
						break;
					case "map":
						if ("map" in t) {
							t = t.map;
							break;
						}
						if (!t.material) {
							u("PropertyBinding: Can not bind to material as node does not have a material.", this);
							return;
						}
						if (!t.material.map) {
							u("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
							return;
						}
						t = t.material.map;
						break;
					default:
						if (t[r] === void 0) {
							u("PropertyBinding: Can not bind to objectName of node undefined.", this);
							return;
						}
						t = t[r];
				}
				if (e !== void 0) {
					if (t[e] === void 0) {
						u("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
						return;
					}
					t = t[e];
				}
			}
			let o = t[i];
			if (o === void 0) {
				let e = n.nodeName;
				u("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
				return;
			}
			let s = this.Versioning.None;
			this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
			let c = this.BindingType.Direct;
			if (a !== void 0) {
				if (i === "morphTargetInfluences") {
					if (!t.geometry) {
						u("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
						return;
					}
					if (!t.geometry.morphAttributes) {
						u("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
						return;
					}
					t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
				}
				c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
			} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
			this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
		}
		unbind() {
			this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
		}
	}, $o.Composite = Qo, $o.prototype.BindingType = {
		Direct: 0,
		EntireArray: 1,
		ArrayElement: 2,
		HasFromToArray: 3
	}, $o.prototype.Versioning = {
		None: 0,
		NeedsUpdate: 1,
		MatrixWorldNeedsUpdate: 2
	}, $o.prototype.GetterByBindingType = [
		$o.prototype._getValue_direct,
		$o.prototype._getValue_array,
		$o.prototype._getValue_arrayElement,
		$o.prototype._getValue_toArray
	], $o.prototype.SetterByBindingTypeAndVersioning = [
		[
			$o.prototype._setValue_direct,
			$o.prototype._setValue_direct_setNeedsUpdate,
			$o.prototype._setValue_direct_setMatrixWorldNeedsUpdate
		],
		[
			$o.prototype._setValue_array,
			$o.prototype._setValue_array_setNeedsUpdate,
			$o.prototype._setValue_array_setMatrixWorldNeedsUpdate
		],
		[
			$o.prototype._setValue_arrayElement,
			$o.prototype._setValue_arrayElement_setNeedsUpdate,
			$o.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
		],
		[
			$o.prototype._setValue_fromArray,
			$o.prototype._setValue_fromArray_setNeedsUpdate,
			$o.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
		]
	], es = /*@__PURE__*/ new W(), ts = class {
		constructor(e, t, n = 0, r = Infinity) {
			this.ray = new pi(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new Ln(), this.params = {
				Mesh: {},
				Line: { threshold: 1 },
				LOD: {},
				Points: { threshold: 1 },
				Sprite: {}
			};
		}
		set(e, t) {
			this.ray.set(e, t);
		}
		setFromCamera(e, t) {
			t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : u("Raycaster: Unsupported camera type: " + t.type);
		}
		setFromXRController(e) {
			return es.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(es), this;
		}
		intersectObject(e, t = !0, n = []) {
			return we(e, this, n, t), n.sort(Ce), n;
		}
		intersectObjects(e, t = !0, n = []) {
			for (let r = 0, i = e.length; r < i; r++) we(e[r], this, n, t);
			return n.sort(Ce), n;
		}
	}, class e {
		static {
			e.prototype.isMatrix2 = !0;
		}
		constructor(e, t, n, r) {
			this.elements = [
				1,
				0,
				0,
				1
			], e !== void 0 && this.set(e, t, n, r);
		}
		identity() {
			return this.set(1, 0, 0, 1), this;
		}
		fromArray(e, t = 0) {
			for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
			return this;
		}
		set(e, t, n, r) {
			let i = this.elements;
			return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
		}
	}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "185" } })), typeof window < "u" && (window.__THREE__ ? l("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
}));
//#endregion
//#region ../../node_modules/.pnpm/three@0.185.1/node_modules/three/build/three.module.js
function rs() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function is(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
function as(e, t, n, r, i, a) {
	let o = new G(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && (i.isCubeTexture || i.mapping === 306) ? (l === void 0 && (l = new Ei(new ka(1, 1, 1), new Ra({
			name: "BackgroundCubeMaterial",
			uniforms: fe(cl.backgroundCube.uniforms),
			vertexShader: cl.backgroundCube.vertexShader,
			fragmentShader: cl.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(ul.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isCubeTexture && i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(dl), l.material.toneMapped = U.getTransfer(i.colorSpace) !== Jt, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new Ei(new Na(2, 2), new Ra({
			name: "BackgroundMaterial",
			uniforms: fe(cl.background.uniforms),
			vertexShader: cl.background.vertexShader,
			fragmentShader: cl.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = U.getTransfer(i.colorSpace) !== Jt, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(ll, he(e)), n.buffers.color.setClear(ll.r, ll.g, ll.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function os(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.stride, p = s.offset;
						if (t.isInstancedInterleavedBuffer) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function ss(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function cs(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i);
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let u = n.precision === void 0 ? "highp" : n.precision, d = c(u);
	d !== u && (l("WebGLRenderer:", u, "not supported, using", d, "instead."), u = d);
	let f = n.logarithmicDepthBuffer === !0, p = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
	n.reversedDepthBuffer === !0 && p === !1 && l("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
	let m = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = e.getParameter(e.MAX_TEXTURE_SIZE), _ = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), v = e.getParameter(e.MAX_VERTEX_ATTRIBS), y = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), b = e.getParameter(e.MAX_VARYING_VECTORS), x = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), S = e.getParameter(e.MAX_SAMPLES), C = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: u,
		logarithmicDepthBuffer: f,
		reversedDepthBuffer: p,
		maxTextures: m,
		maxVertexTextures: h,
		maxTextureSize: g,
		maxCubemapSize: _,
		maxAttributes: v,
		maxVertexUniforms: y,
		maxVaryings: b,
		maxFragmentUniforms: x,
		maxSamples: S,
		samples: C
	};
}
function ls(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new ea(), s = new H(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
function us(e) {
	let t = [], n = [], r = [], i = e, a = e - fl + 1 + pl.length;
	for (let o = 0; o < a; o++) {
		let a = 2 ** i;
		t.push(a);
		let s = 1 / a;
		o > e - fl ? s = pl[o - e + fl - 1] : o === 0 && (s = 0), n.push(s);
		let c = 1 / (a - 2), l = -c, u = 1 + c, d = [
			l,
			l,
			u,
			l,
			u,
			u,
			l,
			l,
			u,
			u,
			l,
			u
		], f = /* @__PURE__ */ new Float32Array(108), p = /* @__PURE__ */ new Float32Array(72), m = /* @__PURE__ */ new Float32Array(36);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			f.set(r, 18 * e), p.set(d, 12 * e);
			let i = [
				e,
				e,
				e,
				e,
				e,
				e
			];
			m.set(i, 6 * e);
		}
		let h = new ei();
		h.setAttribute("position", new zr(f, 3)), h.setAttribute("uv", new zr(p, 2)), h.setAttribute("faceIndex", new zr(m, 1)), r.push(new Ei(h, null)), i > fl && i--;
	}
	return {
		lodMeshes: r,
		sizeLods: t,
		sigmas: n
	};
}
function ds(e, t, n) {
	let r = new wn(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function fs(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function ps(e, t, n) {
	return new Ra({
		name: "PMREMGGXConvolution",
		defines: {
			GGX_SAMPLES: hl,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			roughness: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: _s(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// \"Sampling the GGX Distribution of Visible Normals\"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function ms(e, t, n) {
	let r = new Float32Array(ml), i = new V(0, 1, 0);
	return new Ra({
		name: "SphericalGaussianBlur",
		defines: {
			n: ml,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			samples: { value: 1 },
			weights: { value: r },
			latitudinal: { value: !1 },
			dTheta: { value: 0 },
			mipInt: { value: 0 },
			poleAxis: { value: i }
		},
		vertexShader: _s(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function hs() {
	return new Ra({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: _s(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function gs() {
	return new Ra({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: _s(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function _s() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
function vs(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) {
				if (t.has(n)) {
					let e = t.get(n).texture;
					return s(e, n.mapping);
				}
				{
					let r = n.image;
					if (r && r.height > 0) {
						let i = new wl(r.height);
						return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
					}
					return null;
				}
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new Cl(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new Cl(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function ys(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && d("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function bs(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e, t) {
		return i[t.id] === !0 ? t : (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++, t);
	}
	function c(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function l(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let s = new (i.count >= 65535 ? Vr : Br)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	function u(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && l(e);
		} else l(e);
		return a.get(e);
	}
	return {
		get: s,
		update: c,
		getWireframeAttribute: u
	};
}
function xs(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function Ss(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default: u("WebGLInfo: Unknown draw mode:", r);
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function Cs(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new Sn();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new Tn(h, p, m, u);
			g.type = Le, g.needsUpdate = !0;
			let _ = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * _;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new B(p, m)
			}, r.set(o, d);
			function v() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", v);
			}
			o.addEventListener("dispose", v);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function ws(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
function Ts(e, t, n, r, i, a) {
	let o = new wn(t, n, {
		type: e,
		depthBuffer: i,
		stencilBuffer: a,
		samples: r ? 4 : 0,
		depthTexture: i ? new Ea(t, n) : void 0
	}), s = new wn(t, n, {
		type: Re,
		depthBuffer: !1,
		stencilBuffer: !1
	}), c = new ei();
	c.setAttribute("position", new Hr([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), c.setAttribute("uv", new Hr([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let l = new za({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), u = new Ei(c, l), d = new Mo(-1, 1, 1, -1, 0, 1), f = null, p = null, m = !1, h, g = null, _ = [], v = !1;
	this.setSize = function(e, t) {
		o.setSize(e, t), s.setSize(e, t);
		for (let n = 0; n < _.length; n++) {
			let r = _[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		_ = e, v = _.length > 0 && _[0].isRenderPass === !0;
		let t = o.width, n = o.height;
		for (let e = 0; e < _.length; e++) {
			let r = _[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (m || e.toneMapping === 0 && _.length === 0) return !1;
		if (g = t, t !== null) {
			let e = t.width, n = t.height;
			(o.width !== e || o.height !== n) && this.setSize(e, n);
		}
		return v === !1 && e.setRenderTarget(o), h = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return v;
	}, this.end = function(e, t) {
		e.toneMapping = h, m = !0;
		let n = o, r = s;
		for (let i = 0; i < _.length; i++) {
			let a = _[i];
			if (a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1)) {
				let e = n;
				n = r, r = e;
			}
		}
		if (f !== e.outputColorSpace || p !== e.toneMapping) {
			f = e.outputColorSpace, p = e.toneMapping, l.defines = {}, U.getTransfer(f) === "srgb" && (l.defines.SRGB_TRANSFER = "");
			let t = Tl[p];
			t && (l.defines[t] = ""), l.needsUpdate = !0;
		}
		l.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(g), e.render(u, d), g = null, m = !1;
	}, this.isCompositing = function() {
		return m;
	}, this.dispose = function() {
		o.depthTexture && o.depthTexture.dispose(), o.dispose(), s.dispose(), c.dispose(), l.dispose();
	};
}
function Es(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = jl[i];
	if (a === void 0 && (a = new Float32Array(i), jl[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function Ds(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Os(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function ks(e, t) {
	let n = Ml[t];
	n === void 0 && (n = new Int32Array(t), Ml[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function As(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function js(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Ds(n, t)) return;
		e.uniform2fv(this.addr, t), Os(n, t);
	}
}
function Ms(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (Ds(n, t)) return;
		e.uniform3fv(this.addr, t), Os(n, t);
	}
}
function Ns(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Ds(n, t)) return;
		e.uniform4fv(this.addr, t), Os(n, t);
	}
}
function Ps(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Ds(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Os(n, t);
	} else {
		if (Ds(n, r)) return;
		Fl.set(r), e.uniformMatrix2fv(this.addr, !1, Fl), Os(n, r);
	}
}
function Fs(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Ds(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Os(n, t);
	} else {
		if (Ds(n, r)) return;
		Pl.set(r), e.uniformMatrix3fv(this.addr, !1, Pl), Os(n, r);
	}
}
function Is(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Ds(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Os(n, t);
	} else {
		if (Ds(n, r)) return;
		Nl.set(r), e.uniformMatrix4fv(this.addr, !1, Nl), Os(n, r);
	}
}
function Ls(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Rs(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Ds(n, t)) return;
		e.uniform2iv(this.addr, t), Os(n, t);
	}
}
function zs(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Ds(n, t)) return;
		e.uniform3iv(this.addr, t), Os(n, t);
	}
}
function Bs(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Ds(n, t)) return;
		e.uniform4iv(this.addr, t), Os(n, t);
	}
}
function Vs(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function Hs(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Ds(n, t)) return;
		e.uniform2uiv(this.addr, t), Os(n, t);
	}
}
function Us(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Ds(n, t)) return;
		e.uniform3uiv(this.addr, t), Os(n, t);
	}
}
function Ws(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Ds(n, t)) return;
		e.uniform4uiv(this.addr, t), Os(n, t);
	}
}
function Gs(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	this.type === e.SAMPLER_2D_SHADOW ? (Dl.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, a = Dl) : a = El, n.setTexture2D(t || a, i);
}
function Ks(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || kl, i);
}
function qs(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Al, i);
}
function Js(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Ol, i);
}
function Ys(e) {
	switch (e) {
		case 5126: return As;
		case 35664: return js;
		case 35665: return Ms;
		case 35666: return Ns;
		case 35674: return Ps;
		case 35675: return Fs;
		case 35676: return Is;
		case 5124:
		case 35670: return Ls;
		case 35667:
		case 35671: return Rs;
		case 35668:
		case 35672: return zs;
		case 35669:
		case 35673: return Bs;
		case 5125: return Vs;
		case 36294: return Hs;
		case 36295: return Us;
		case 36296: return Ws;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Gs;
		case 35679:
		case 36299:
		case 36307: return Ks;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return qs;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Js;
	}
}
function Xs(e, t) {
	e.uniform1fv(this.addr, t);
}
function Zs(e, t) {
	let n = Es(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function Qs(e, t) {
	let n = Es(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function $s(e, t) {
	let n = Es(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function ec(e, t) {
	let n = Es(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function tc(e, t) {
	let n = Es(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function nc(e, t) {
	let n = Es(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function rc(e, t) {
	e.uniform1iv(this.addr, t);
}
function ic(e, t) {
	e.uniform2iv(this.addr, t);
}
function ac(e, t) {
	e.uniform3iv(this.addr, t);
}
function oc(e, t) {
	e.uniform4iv(this.addr, t);
}
function sc(e, t) {
	e.uniform1uiv(this.addr, t);
}
function cc(e, t) {
	e.uniform2uiv(this.addr, t);
}
function lc(e, t) {
	e.uniform3uiv(this.addr, t);
}
function uc(e, t) {
	e.uniform4uiv(this.addr, t);
}
function dc(e, t, n) {
	let r = this.cache, i = t.length, a = ks(n, i);
	Ds(r, a) || (e.uniform1iv(this.addr, a), Os(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? Dl : El;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function fc(e, t, n) {
	let r = this.cache, i = t.length, a = ks(n, i);
	Ds(r, a) || (e.uniform1iv(this.addr, a), Os(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || kl, a[e]);
}
function pc(e, t, n) {
	let r = this.cache, i = t.length, a = ks(n, i);
	Ds(r, a) || (e.uniform1iv(this.addr, a), Os(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Al, a[e]);
}
function mc(e, t, n) {
	let r = this.cache, i = t.length, a = ks(n, i);
	Ds(r, a) || (e.uniform1iv(this.addr, a), Os(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || Ol, a[e]);
}
function hc(e) {
	switch (e) {
		case 5126: return Xs;
		case 35664: return Zs;
		case 35665: return Qs;
		case 35666: return $s;
		case 35674: return ec;
		case 35675: return tc;
		case 35676: return nc;
		case 5124:
		case 35670: return rc;
		case 35667:
		case 35671: return ic;
		case 35668:
		case 35672: return ac;
		case 35669:
		case 35673: return oc;
		case 5125: return sc;
		case 36294: return cc;
		case 36295: return lc;
		case 36296: return uc;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return dc;
		case 35679:
		case 36299:
		case 36307: return fc;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return pc;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return mc;
	}
}
function gc(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function _c(e, t, n) {
	let r = e.name, i = r.length;
	for (zl.lastIndex = 0;;) {
		let a = zl.exec(r), o = zl.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			gc(n, l === void 0 ? new Il(s, e, t) : new Ll(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new Rl(s), gc(n, e)), n = e;
		}
	}
}
function vc(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
function yc(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
function bc(e) {
	U._getMatrix(Ul, U.workingColorSpace, e);
	let t = `mat3( ${Ul.elements.map((e) => e.toFixed(4))} )`;
	switch (U.getTransfer(e)) {
		case qt: return [t, "LinearTransferOETF"];
		case Jt: return [t, "sRGBTransferOETF"];
		default: return l("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function xc(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + yc(e.getShaderSource(t), r);
	}
	return i;
}
function Sc(e, t) {
	let n = bc(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
function Cc(e, t) {
	let n = Wl[t];
	return n === void 0 ? (l("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
function wc() {
	return U.getLuminanceCoefficients(Gl), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${Gl.x.toFixed(4)}, ${Gl.y.toFixed(4)}, ${Gl.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function Tc(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Oc).join("\n");
}
function Ec(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function Dc(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function Oc(e) {
	return e !== "";
}
function kc(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ac(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
function jc(e) {
	return e.replace(Kl, Mc);
}
function Mc(e, t) {
	let n = K[t];
	if (n === void 0) {
		let e = ql.get(t);
		if (e !== void 0) n = K[e], l("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
	}
	return jc(n);
}
function Nc(e) {
	return e.replace(Jl, Pc);
}
function Pc(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function Fc(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
function Ic(e) {
	return Yl[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
function Lc(e) {
	return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Xl[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
function Rc(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Zl[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
function zc(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Ql[e.combine] || "ENVMAP_BLENDING_NONE";
}
function Bc(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function Vc(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = Ic(n), d = Lc(n), f = Rc(n), p = zc(n), m = Bc(n), h = Tc(n), g = Ec(a), _ = i.createProgram(), v, y, b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (v = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g
	].filter(Oc).join("\n"), v.length > 0 && (v += "\n"), y = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g
	].filter(Oc).join("\n"), y.length > 0 && (y += "\n")) : (v = [
		Fc(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + f : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(Oc).join("\n"), y = [
		Fc(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + d : "",
		n.envMap ? "#define " + f : "",
		n.envMap ? "#define " + p : "",
		m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "",
		m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "",
		m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : K.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : Cc("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		K.colorspace_pars_fragment,
		Sc("linearToOutputTexel", n.outputColorSpace),
		wc(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(Oc).join("\n")), o = jc(o), o = kc(o, n), o = Ac(o, n), s = jc(s), s = kc(s, n), s = Ac(s, n), o = Nc(o), s = Nc(s), n.isRawShaderMaterial !== !0 && (b = "#version 300 es\n", v = [
		h,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + v, y = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + y);
	let x = b + v + o, S = b + y + s, C = vc(i, i.VERTEX_SHADER, x), w = vc(i, i.FRAGMENT_SHADER, S);
	i.attachShader(_, C), i.attachShader(_, w), n.index0AttributeName === void 0 ? n.hasPositionAttribute === !0 && i.bindAttribLocation(_, 0, "position") : i.bindAttribLocation(_, 0, n.index0AttributeName), i.linkProgram(_);
	function T(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(_) || "", r = i.getShaderInfoLog(C) || "", a = i.getShaderInfoLog(w) || "", o = n.trim(), s = r.trim(), c = a.trim(), d = !0, f = !0;
			if (i.getProgramParameter(_, i.LINK_STATUS) === !1) {
				if (d = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, _, C, w);
				else {
					let e = xc(i, C, "vertex"), n = xc(i, w, "fragment");
					u("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
				}
			} else o === "" ? (s === "" || c === "") && (f = !1) : l("WebGLProgram: Program Info Log:", o);
			f && (t.diagnostics = {
				runnable: d,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: v
				},
				fragmentShader: {
					log: c,
					prefix: y
				}
			});
		}
		i.deleteShader(C), i.deleteShader(w), E = new Bl(i, _), D = Dc(i, _);
	}
	let E;
	this.getUniforms = function() {
		return E === void 0 && T(this), E;
	};
	let D;
	this.getAttributes = function() {
		return D === void 0 && T(this), D;
	};
	let O = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return O === !1 && (O = i.getProgramParameter(_, Vl)), O;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = Hl++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = C, this.fragmentShader = w, this;
}
function Hc(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function Uc(e, t, n, r, i, a) {
	let o = new Ln(), s = new eu(), c = /* @__PURE__ */ new Set(), u = [], d = /* @__PURE__ */ new Map(), f = r.logarithmicDepthBuffer, p = r.precision, m = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function h(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function g(i, o, u, d, g, _) {
		let v = d.fog, y = g.geometry, b = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? d.environment : null, x = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, S = t.get(i.envMap || b, x), C = S && S.mapping === 306 ? S.image.height : null, w = m[i.type];
		i.precision !== null && (p = r.getMaxPrecision(i.precision), p !== i.precision && l("WebGLProgram.getParameters:", i.precision, "not supported, using", p, "instead."));
		let T = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color, E = T === void 0 ? 0 : T.length, D = 0;
		y.morphAttributes.position !== void 0 && (D = 1), y.morphAttributes.normal !== void 0 && (D = 2), y.morphAttributes.color !== void 0 && (D = 3);
		let O, k, A, ee;
		if (w) {
			let e = cl[w];
			O = e.vertexShader, k = e.fragmentShader;
		} else {
			O = i.vertexShader, k = i.fragmentShader;
			let e = s.getVertexShaderStage(i), t = s.getFragmentShaderStage(i);
			s.update(i, e, t), A = e.id, ee = t.id;
		}
		let te = e.getRenderTarget(), ne = e.state.buffers.depth.getReversed(), j = g.isInstancedMesh === !0, re = g.isBatchedMesh === !0, ie = !!i.map, ae = !!i.matcap, M = !!S, oe = !!i.aoMap, se = !!i.lightMap, ce = !!i.bumpMap && i.wireframe === !1, le = !!i.normalMap, ue = !!i.displacementMap, de = !!i.emissiveMap, fe = !!i.metalnessMap, N = !!i.roughnessMap, pe = i.anisotropy > 0, me = i.clearcoat > 0, he = i.dispersion > 0, ge = i.iridescence > 0, _e = i.sheen > 0, ve = i.transmission > 0, ye = pe && !!i.anisotropyMap, be = me && !!i.clearcoatMap, xe = me && !!i.clearcoatNormalMap, Se = me && !!i.clearcoatRoughnessMap, Ce = ge && !!i.iridescenceMap, we = ge && !!i.iridescenceThicknessMap, Te = _e && !!i.sheenColorMap, Ee = _e && !!i.sheenRoughnessMap, De = !!i.specularMap, Oe = !!i.specularColorMap, P = !!i.specularIntensityMap, ke = ve && !!i.transmissionMap, F = ve && !!i.thicknessMap, Ae = !!i.gradientMap, I = !!i.alphaMap, L = i.alphaTest > 0, R = !!i.alphaHash, je = !!i.extensions, Me = 0;
		i.toneMapped && (te === null || te.isXRRenderTarget === !0) && (Me = e.toneMapping);
		let z = {
			shaderID: w,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: O,
			fragmentShader: k,
			defines: i.defines,
			customVertexShaderID: A,
			customFragmentShaderID: ee,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: p,
			batching: re,
			batchingColor: re && g._colorsTexture !== null,
			instancing: j,
			instancingColor: j && g.instanceColor !== null,
			instancingMorph: j && g.morphTexture !== null,
			outputColorSpace: te === null ? e.outputColorSpace : te.isXRRenderTarget === !0 ? te.texture.colorSpace : U.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: ie,
			matcap: ae,
			envMap: M,
			envMapMode: M && S.mapping,
			envMapCubeUVHeight: C,
			aoMap: oe,
			lightMap: se,
			bumpMap: ce,
			normalMap: le,
			displacementMap: ue,
			emissiveMap: de,
			normalMapObjectSpace: le && i.normalMapType === 1,
			normalMapTangentSpace: le && i.normalMapType === 0,
			packedNormalMap: le && i.normalMapType === 0 && Hc(i.normalMap.format),
			metalnessMap: fe,
			roughnessMap: N,
			anisotropy: pe,
			anisotropyMap: ye,
			clearcoat: me,
			clearcoatMap: be,
			clearcoatNormalMap: xe,
			clearcoatRoughnessMap: Se,
			dispersion: he,
			iridescence: ge,
			iridescenceMap: Ce,
			iridescenceThicknessMap: we,
			sheen: _e,
			sheenColorMap: Te,
			sheenRoughnessMap: Ee,
			specularMap: De,
			specularColorMap: Oe,
			specularIntensityMap: P,
			transmission: ve,
			transmissionMap: ke,
			thicknessMap: F,
			gradientMap: Ae,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: I,
			alphaTest: L,
			alphaHash: R,
			combine: i.combine,
			mapUv: ie && h(i.map.channel),
			aoMapUv: oe && h(i.aoMap.channel),
			lightMapUv: se && h(i.lightMap.channel),
			bumpMapUv: ce && h(i.bumpMap.channel),
			normalMapUv: le && h(i.normalMap.channel),
			displacementMapUv: ue && h(i.displacementMap.channel),
			emissiveMapUv: de && h(i.emissiveMap.channel),
			metalnessMapUv: fe && h(i.metalnessMap.channel),
			roughnessMapUv: N && h(i.roughnessMap.channel),
			anisotropyMapUv: ye && h(i.anisotropyMap.channel),
			clearcoatMapUv: be && h(i.clearcoatMap.channel),
			clearcoatNormalMapUv: xe && h(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: Se && h(i.clearcoatRoughnessMap.channel),
			iridescenceMapUv: Ce && h(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: we && h(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: Te && h(i.sheenColorMap.channel),
			sheenRoughnessMapUv: Ee && h(i.sheenRoughnessMap.channel),
			specularMapUv: De && h(i.specularMap.channel),
			specularColorMapUv: Oe && h(i.specularColorMap.channel),
			specularIntensityMapUv: P && h(i.specularIntensityMap.channel),
			transmissionMapUv: ke && h(i.transmissionMap.channel),
			thicknessMapUv: F && h(i.thicknessMap.channel),
			alphaMapUv: I && h(i.alphaMap.channel),
			vertexTangents: !!y.attributes.tangent && (le || pe),
			vertexNormals: !!y.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!y.attributes.color && y.attributes.color.itemSize === 4,
			pointsUvs: g.isPoints === !0 && !!y.attributes.uv && (ie || I),
			fog: !!v,
			useFog: i.fog === !0,
			fogExp2: !!v && v.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || y.attributes.normal === void 0 && le === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: f,
			reversedDepthBuffer: ne,
			skinning: g.isSkinnedMesh === !0,
			hasPositionAttribute: y.attributes.position !== void 0,
			morphTargets: y.morphAttributes.position !== void 0,
			morphNormals: y.morphAttributes.normal !== void 0,
			morphColors: y.morphAttributes.color !== void 0,
			morphTargetsCount: E,
			morphTextureStride: D,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: _.length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: Me,
			decodeVideoTexture: ie && i.map.isVideoTexture === !0 && U.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: de && i.emissiveMap.isVideoTexture === !0 && U.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: je && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (je && i.extensions.multiDraw === !0 || re) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return z.vertexUv1s = c.has(1), z.vertexUv2s = c.has(2), z.vertexUv3s = c.has(3), c.clear(), z;
	}
	function _(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (v(n, t), y(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function v(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function y(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), t.hasPositionAttribute && o.enable(23), e.push(o.mask);
	}
	function b(e) {
		let t = m[e.type], n;
		if (t) {
			let e = cl[t];
			n = Fa.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function x(t, n) {
		let r = d.get(n);
		return r === void 0 ? (r = new Vc(e, n, t, i), u.push(r), d.set(n, r)) : ++r.usedTimes, r;
	}
	function S(e) {
		if (--e.usedTimes === 0) {
			let t = u.indexOf(e);
			u[t] = u[u.length - 1], u.pop(), d.delete(e.cacheKey), e.destroy();
		}
	}
	function C(e) {
		s.remove(e);
	}
	function w() {
		s.dispose();
	}
	return {
		getParameters: g,
		getProgramCacheKey: _,
		getUniforms: b,
		acquireProgram: x,
		releaseProgram: S,
		releaseShaderCache: C,
		programs: u,
		dispose: w
	};
}
function Wc() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function Gc(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Kc(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function qc() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(u) : a.transparent === !0 ? i.push(u) : n.push(u);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t, a) {
		n.length > 1 && n.sort(e || Gc), r.length > 1 && r.sort(t || Kc), i.length > 1 && i.sort(t || Kc), a && (n.reverse(), r.reverse(), i.reverse());
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function Jc() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new qc(), e.set(t, [i])) : n >= r.length ? (i = new qc(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function Yc() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new V(),
					color: new G()
				};
				break;
			case "SpotLight":
				n = {
					position: new V(),
					direction: new V(),
					color: new G(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new V(),
					color: new G(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new V(),
					skyColor: new G(),
					groundColor: new G()
				};
				break;
			case "RectAreaLight": n = {
				color: new G(),
				position: new V(),
				halfWidth: new V(),
				halfHeight: new V()
			};
		}
		return e[t.id] = n, n;
	} };
}
function Xc() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new B()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new B()
				};
				break;
			case "PointLight": n = {
				shadowIntensity: 1,
				shadowBias: 0,
				shadowNormalBias: 0,
				shadowRadius: 1,
				shadowMapSize: new B(),
				shadowCameraNear: 1,
				shadowCameraFar: 1e3
			};
		}
		return e[t.id] = n, n;
	} };
}
function Zc(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Qc(e) {
	let t = new Yc(), n = Xc(), r = {
		version: 0,
		hash: {
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new V());
	let i = new V(), a = new W(), o = new W();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0;
		i.sort(Zc);
		for (let e = 0, y = i.length; e < y; e++) {
			let y = i[e], b = y.color, x = y.intensity, S = y.distance, C = null;
			if (y.shadow && y.shadow.map && (C = y.shadow.map.texture.format === 1030 ? y.shadow.map.texture : y.shadow.map.depthTexture || y.shadow.map.texture), y.isAmbientLight) a += b.r * x, o += b.g * x, s += b.b * x;
			else if (y.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(y.sh.coefficients[e], x);
				v++;
			} else if (y.isDirectionalLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[c] = t, r.directionalShadowMap[c] = C, r.directionalShadowMatrix[c] = y.shadow.matrix, p++;
				}
				r.directional[c] = e, c++;
			} else if (y.isSpotLight) {
				let e = t.get(y);
				e.position.setFromMatrixPosition(y.matrixWorld), e.color.copy(b).multiplyScalar(x), e.distance = S, e.coneCos = Math.cos(y.angle), e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), e.decay = y.decay, r.spot[u] = e;
				let i = y.shadow;
				if (y.map && (r.spotLightMap[g] = y.map, g++, i.updateMatrices(y), y.castShadow && _++), r.spotLightMatrix[u] = i.matrix, y.castShadow) {
					let e = n.get(y);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[u] = e, r.spotShadowMap[u] = C, h++;
				}
				u++;
			} else if (y.isRectAreaLight) {
				let e = t.get(y);
				e.color.copy(b).multiplyScalar(x), e.halfWidth.set(y.width * .5, 0, 0), e.halfHeight.set(0, y.height * .5, 0), r.rectArea[d] = e, d++;
			} else if (y.isPointLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), e.distance = y.distance, e.decay = y.decay, y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[l] = t, r.pointShadowMap[l] = C, r.pointShadowMatrix[l] = y.shadow.matrix, m++;
				}
				r.point[l] = e, l++;
			} else if (y.isHemisphereLight) {
				let e = t.get(y);
				e.skyColor.copy(y.color).multiplyScalar(x), e.groundColor.copy(y.groundColor).multiplyScalar(x), r.hemi[f] = e, f++;
			}
		}
		d > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = q.LTC_FLOAT_1, r.rectAreaLTC2 = q.LTC_FLOAT_2) : (r.rectAreaLTC1 = q.LTC_HALF_1, r.rectAreaLTC2 = q.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let y = r.hash;
		(y.directionalLength !== c || y.pointLength !== l || y.spotLength !== u || y.rectAreaLength !== d || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== m || y.numSpotShadows !== h || y.numSpotMaps !== g || y.numLightProbes !== v) && (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = l, r.hemi.length = f, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = h, r.spotShadowMap.length = h, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = m, r.spotLightMatrix.length = h + g - _, r.spotLightMap.length = g, r.numSpotLightShadowsWithMaps = _, r.numLightProbes = v, y.directionalLength = c, y.pointLength = l, y.spotLength = u, y.rectAreaLength = d, y.hemiLength = f, y.numDirectionalShadows = p, y.numPointShadows = m, y.numSpotShadows = h, y.numSpotMaps = g, y.numLightProbes = v, r.version = nu++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = t.matrixWorldInverse;
		for (let t = 0, f = e.length; t < f; t++) {
			let f = e[t];
			if (f.isDirectionalLight) {
				let e = r.directional[n];
				e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), n++;
			} else if (f.isSpotLight) {
				let e = r.spot[c];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), c++;
			} else if (f.isRectAreaLight) {
				let e = r.rectArea[l];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), o.identity(), a.copy(f.matrixWorld), a.premultiply(d), o.extractRotation(a), e.halfWidth.set(f.width * .5, 0, 0), e.halfHeight.set(0, f.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), l++;
			} else if (f.isPointLight) {
				let e = r.point[s];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), s++;
			} else if (f.isHemisphereLight) {
				let e = r.hemi[u];
				e.direction.setFromMatrixPosition(f.matrixWorld), e.direction.transformDirection(d), u++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function $c(e) {
	let t = new Qc(e), n = [], r = [], i = [];
	function a(e) {
		d.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c(e) {
		i.push(e);
	}
	function l() {
		t.setup(n);
	}
	function u(e) {
		t.setupView(n, e);
	}
	let d = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: d,
		setupLights: l,
		setupLightsView: u,
		pushLight: o,
		pushShadow: s,
		pushLightProbeGrid: c
	};
}
function el(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new $c(e), t.set(n, [a])) : r >= i.length ? (a = new $c(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
function tl(e, t, n) {
	let r = new ia(), i = new B(), a = new B(), o = new Sn(), s = new Ha(), c = new Ua(), u = {}, d = n.maxTextureSize, f = {
		0: 1,
		1: 0,
		2: 2
	}, p = new Ra({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new B() },
			radius: { value: 4 }
		},
		vertexShader: ru,
		fragmentShader: iu
	}), m = p.clone();
	m.defines.HORIZONTAL_PASS = 1;
	let h = new ei();
	h.setAttribute("position", new zr(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let g = new Ei(h, p), _ = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let v = this.type;
	this.render = function(t, n, s) {
		if (_.enabled === !1 || _.autoUpdate === !1 && _.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (l("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
		let c = e.getRenderTarget(), u = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.state;
		p.setBlending(0), p.buffers.depth.getReversed() === !0 ? p.buffers.color.setClear(0, 0, 0, 0) : p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
		let m = v !== this.type;
		m && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let c = 0, u = t.length; c < u; c++) {
			let u = t[c], f = u.shadow;
			if (f === void 0) {
				l("WebGLShadowMap:", u, "has no shadow.");
				continue;
			}
			if (f.autoUpdate === !1 && f.needsUpdate === !1) continue;
			i.copy(f.mapSize);
			let h = f.getFrameExtents();
			i.multiply(h), a.copy(f.mapSize), (i.x > d || i.y > d) && (i.x > d && (a.x = Math.floor(d / h.x), i.x = a.x * h.x, f.mapSize.x = a.x), i.y > d && (a.y = Math.floor(d / h.y), i.y = a.y * h.y, f.mapSize.y = a.y));
			let g = e.state.buffers.depth.getReversed();
			if (f.camera._reversedDepth = g, f.map === null || m === !0) {
				if (f.map !== null && (f.map.depthTexture !== null && (f.map.depthTexture.dispose(), f.map.depthTexture = null), f.map.dispose()), this.type === 3) {
					if (u.isPointLight) {
						l("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					f.map = new wn(i.x, i.y, {
						format: Ze,
						type: Re,
						minFilter: L,
						magFilter: L,
						generateMipmaps: !1
					}), f.map.texture.name = u.name + ".shadowMap", f.map.depthTexture = new Ea(i.x, i.y, Le), f.map.depthTexture.name = u.name + ".shadowMapDepth", f.map.depthTexture.format = qe, f.map.depthTexture.compareFunction = null, f.map.depthTexture.minFilter = F, f.map.depthTexture.magFilter = F;
				} else u.isPointLight ? (f.map = new wl(i.x), f.map.depthTexture = new Da(i.x, Ie)) : (f.map = new wn(i.x, i.y), f.map.depthTexture = new Ea(i.x, i.y, Ie)), f.map.depthTexture.name = u.name + ".shadowMap", f.map.depthTexture.format = qe, this.type === 1 ? (f.map.depthTexture.compareFunction = g ? 518 : 515, f.map.depthTexture.minFilter = L, f.map.depthTexture.magFilter = L) : (f.map.depthTexture.compareFunction = null, f.map.depthTexture.minFilter = F, f.map.depthTexture.magFilter = F);
				f.camera.updateProjectionMatrix();
			}
			let _ = f.map.isWebGLCubeRenderTarget ? 6 : 1;
			for (let t = 0; t < _; t++) {
				if (f.map.isWebGLCubeRenderTarget) e.setRenderTarget(f.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(f.map), e.clear());
					let n = f.getViewport(t);
					o.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w), p.viewport(o);
				}
				if (u.isPointLight) {
					let e = f.camera, n = f.matrix, r = u.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), cu.setFromMatrixPosition(u.matrixWorld), e.position.copy(cu), lu.copy(e.position), lu.add(au[t]), e.up.copy(ou[t]), e.lookAt(lu), e.updateMatrixWorld(), n.makeTranslation(-cu.x, -cu.y, -cu.z), su.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), f._frustum.setFromProjectionMatrix(su, e.coordinateSystem, e.reversedDepth);
				} else f.updateMatrices(u);
				r = f.getFrustum(), x(n, s, f.camera, u, this.type);
			}
			f.isPointLightShadow !== !0 && this.type === 3 && y(f, s), f.needsUpdate = !1;
		}
		v = this.type, _.needsUpdate = !1, e.setRenderTarget(c, u, f);
	};
	function y(n, r) {
		let a = t.update(g);
		p.defines.VSM_SAMPLES !== n.blurSamples && (p.defines.VSM_SAMPLES = n.blurSamples, m.defines.VSM_SAMPLES = n.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), n.mapPass === null && (n.mapPass = new wn(i.x, i.y, {
			format: Ze,
			type: Re
		})), p.uniforms.shadow_pass.value = n.map.depthTexture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, p, g, null), m.uniforms.shadow_pass.value = n.mapPass.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, m, g, null);
	}
	function b(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? c : s, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = u[e];
			r === void 0 && (r = {}, u[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", S)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? f[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function x(n, i, a, o, s) {
		if (n.visible === !1) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || r.intersectsObject(n))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), c = n.material;
			if (Array.isArray(c)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let t = b(n, d, o, s);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (c.visible) {
				let t = b(n, c, o, s);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) x(c[e], i, a, o, s);
	}
	function S(e) {
		e.target.removeEventListener("dispose", S);
		for (let t in u) {
			let n = u[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function nl(e, t) {
	function n() {
		let t = !1, n = new Sn(), r = null, i = new Sn(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? fe(e.DEPTH_TEST) : N(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = tn[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? fe(e.STENCIL_TEST) : N(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = {}, f = {}, p = {}, m = /* @__PURE__ */ new WeakMap(), h = [], g = null, _ = !1, v = null, y = null, b = null, x = null, S = null, C = null, w = null, T = new G(0, 0, 0), E = 0, D = !1, O = null, k = null, A = null, ee = null, te = null, ne = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), j = !1, re = 0, ie = e.getParameter(e.VERSION);
	ie.indexOf("WebGL") === -1 ? ie.indexOf("OpenGL ES") !== -1 && (re = parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]), j = re >= 2) : (re = parseFloat(/^WebGL (\d)/.exec(ie)[1]), j = re >= 1);
	let ae = null, M = {}, oe = e.getParameter(e.SCISSOR_BOX), se = e.getParameter(e.VIEWPORT), ce = new Sn().fromArray(oe), le = new Sn().fromArray(se);
	function ue(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let de = {};
	de[e.TEXTURE_2D] = ue(e.TEXTURE_2D, e.TEXTURE_2D, 1), de[e.TEXTURE_CUBE_MAP] = ue(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), de[e.TEXTURE_2D_ARRAY] = ue(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), de[e.TEXTURE_3D] = ue(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), fe(e.DEPTH_TEST), o.setFunc(3), be(!1), xe(1), fe(e.CULL_FACE), ve(0);
	function fe(t) {
		d[t] !== !0 && (e.enable(t), d[t] = !0);
	}
	function N(t) {
		d[t] !== !1 && (e.disable(t), d[t] = !1);
	}
	function pe(t, n) {
		return p[t] !== n && (e.bindFramebuffer(t, n), p[t] = n, t === e.DRAW_FRAMEBUFFER && (p[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (p[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function me(t, n) {
		let r = h, i = !1;
		if (t) {
			r = m.get(n), r === void 0 && (r = [], m.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function he(t) {
		return g !== t && (e.useProgram(t), g = t, !0);
	}
	let ge = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	ge[103] = e.MIN, ge[104] = e.MAX;
	let _e = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function ve(t, n, r, i, a, o, s, c, l, d) {
		if (t === 0) {
			_ === !0 && (N(e.BLEND), _ = !1);
			return;
		}
		if (_ === !1 && (fe(e.BLEND), _ = !0), t !== 5) {
			if (t !== v || d !== D) {
				if ((y !== 100 || S !== 100) && (e.blendEquation(e.FUNC_ADD), y = 100, S = 100), d) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: u("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						u("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						u("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: u("WebGLState: Invalid blending: ", t);
				}
				b = null, x = null, C = null, w = null, T.set(0, 0, 0), E = 0, v = t, D = d;
			}
			return;
		}
		a ||= n, o ||= r, s ||= i, (n !== y || a !== S) && (e.blendEquationSeparate(ge[n], ge[a]), y = n, S = a), (r !== b || i !== x || o !== C || s !== w) && (e.blendFuncSeparate(_e[r], _e[i], _e[o], _e[s]), b = r, x = i, C = o, w = s), (c.equals(T) === !1 || l !== E) && (e.blendColor(c.r, c.g, c.b, l), T.copy(c), E = l), v = t, D = !1;
	}
	function ye(t, n) {
		t.side === 2 ? N(e.CULL_FACE) : fe(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), be(r), t.blending === 1 && t.transparent === !1 ? ve(0) : ve(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), Ce(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? fe(e.SAMPLE_ALPHA_TO_COVERAGE) : N(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function be(t) {
		O !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), O = t);
	}
	function xe(t) {
		t === 0 ? N(e.CULL_FACE) : (fe(e.CULL_FACE), t !== k && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), k = t;
	}
	function Se(t) {
		t !== A && (j && e.lineWidth(t), A = t);
	}
	function Ce(t, n, r) {
		t ? (fe(e.POLYGON_OFFSET_FILL), (ee !== n || te !== r) && (ee = n, te = r, o.getReversed() && (n = -n), e.polygonOffset(n, r))) : N(e.POLYGON_OFFSET_FILL);
	}
	function we(t) {
		t ? fe(e.SCISSOR_TEST) : N(e.SCISSOR_TEST);
	}
	function Te(t) {
		t === void 0 && (t = e.TEXTURE0 + ne - 1), ae !== t && (e.activeTexture(t), ae = t);
	}
	function Ee(t, n, r) {
		r === void 0 && (r = ae === null ? e.TEXTURE0 + ne - 1 : ae);
		let i = M[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, M[r] = i), (i.type !== t || i.texture !== n) && (ae !== r && (e.activeTexture(r), ae = r), e.bindTexture(t, n || de[t]), i.type = t, i.texture = n);
	}
	function De() {
		let t = M[ae];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function Oe() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function P() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function ke() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function F() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function Ae() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function I() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function L() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function R() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function je() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function Me() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			u("WebGLState:", e);
		}
	}
	function z(t) {
		return f[t] === void 0 ? e.getParameter(t) : f[t];
	}
	function Ne(t, n) {
		f[t] !== n && (e.pixelStorei(t, n), f[t] = n);
	}
	function Pe(t) {
		ce.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), ce.copy(t));
	}
	function Fe(t) {
		le.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), le.copy(t));
	}
	function Ie(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function Le(t, n) {
		let r = l.get(n).get(t);
		c.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(n, r));
	}
	function Re() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), d = {}, f = {}, ae = null, M = {}, p = {}, m = /* @__PURE__ */ new WeakMap(), h = [], g = null, _ = !1, v = null, y = null, b = null, x = null, S = null, C = null, w = null, T = new G(0, 0, 0), E = 0, D = !1, O = null, k = null, A = null, ee = null, te = null, ce.set(0, 0, e.canvas.width, e.canvas.height), le.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: fe,
		disable: N,
		bindFramebuffer: pe,
		drawBuffers: me,
		useProgram: he,
		setBlending: ve,
		setMaterial: ye,
		setFlipSided: be,
		setCullFace: xe,
		setLineWidth: Se,
		setPolygonOffset: Ce,
		setScissorTest: we,
		activeTexture: Te,
		bindTexture: Ee,
		unbindTexture: De,
		compressedTexImage2D: Oe,
		compressedTexImage3D: P,
		texImage2D: je,
		texImage3D: Me,
		pixelStorei: Ne,
		getParameter: z,
		updateUBOMapping: Ie,
		uniformBlockBinding: Le,
		texStorage2D: L,
		texStorage3D: R,
		texSubImage2D: ke,
		texSubImage3D: F,
		compressedTexSubImage2D: Ae,
		compressedTexSubImage3D: I,
		scissor: Pe,
		viewport: Fe,
		reset: Re
	};
}
function rl(e, t, n, r, i, o, s) {
	let c = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, d = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), f = new B(), p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set(), h, g = /* @__PURE__ */ new WeakMap(), _ = !1;
	try {
		_ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function v(e, t) {
		return _ ? new OffscreenCanvas(e, t) : a("canvas");
	}
	function y(e, t, n) {
		let r = 1, i = Pe(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				h === void 0 && (h = v(n, a));
				let o = t ? v(n, a) : h;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), l("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && l("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function b(e) {
		return e.generateMipmaps;
	}
	function x(t) {
		e.generateMipmap(t);
	}
	function S(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function C(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			l("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c;
		a && (c = t.get("EXT_texture_norm16"), c || l("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let u = r;
		if (r === e.RED && (i === e.FLOAT && (u = e.R32F), i === e.HALF_FLOAT && (u = e.R16F), i === e.UNSIGNED_BYTE && (u = e.R8), i === e.UNSIGNED_SHORT && c && (u = c.R16_EXT), i === e.SHORT && c && (u = c.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.R8UI), i === e.UNSIGNED_SHORT && (u = e.R16UI), i === e.UNSIGNED_INT && (u = e.R32UI), i === e.BYTE && (u = e.R8I), i === e.SHORT && (u = e.R16I), i === e.INT && (u = e.R32I)), r === e.RG && (i === e.FLOAT && (u = e.RG32F), i === e.HALF_FLOAT && (u = e.RG16F), i === e.UNSIGNED_BYTE && (u = e.RG8), i === e.UNSIGNED_SHORT && c && (u = c.RG16_EXT), i === e.SHORT && c && (u = c.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RG8UI), i === e.UNSIGNED_SHORT && (u = e.RG16UI), i === e.UNSIGNED_INT && (u = e.RG32UI), i === e.BYTE && (u = e.RG8I), i === e.SHORT && (u = e.RG16I), i === e.INT && (u = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RGB8UI), i === e.UNSIGNED_SHORT && (u = e.RGB16UI), i === e.UNSIGNED_INT && (u = e.RGB32UI), i === e.BYTE && (u = e.RGB8I), i === e.SHORT && (u = e.RGB16I), i === e.INT && (u = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RGBA8UI), i === e.UNSIGNED_SHORT && (u = e.RGBA16UI), i === e.UNSIGNED_INT && (u = e.RGBA32UI), i === e.BYTE && (u = e.RGBA8I), i === e.SHORT && (u = e.RGBA16I), i === e.INT && (u = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && c && (u = c.RGB16_EXT), i === e.SHORT && c && (u = c.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (u = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (u = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? qt : U.getTransfer(o);
			i === e.FLOAT && (u = e.RGBA32F), i === e.HALF_FLOAT && (u = e.RGBA16F), i === e.UNSIGNED_BYTE && (u = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && c && (u = c.RGBA16_EXT), i === e.SHORT && c && (u = c.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (u = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (u = e.RGB5_A1);
		}
		return (u === e.R16F || u === e.R32F || u === e.RG16F || u === e.RG32F || u === e.RGBA16F || u === e.RGBA32F) && t.get("EXT_color_buffer_float"), u;
	}
	function w(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, l("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function T(e, t) {
		return b(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function E(e) {
		let t = e.target;
		t.removeEventListener("dispose", E), O(t), t.isVideoTexture && p.delete(t), t.isHTMLTexture && m.delete(t);
	}
	function D(e) {
		let t = e.target;
		t.removeEventListener("dispose", D), A(t);
	}
	function O(e) {
		let t = r.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, i = g.get(n);
		if (i) {
			let r = i[t.__cacheKey];
			r.usedTimes--, r.usedTimes === 0 && k(e), Object.keys(i).length === 0 && g.delete(n);
		}
		r.remove(e);
	}
	function k(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source, a = g.get(i);
		delete a[n.__cacheKey], s.memory.textures--;
	}
	function A(t) {
		let n = r.get(t);
		if (t.depthTexture && (t.depthTexture.dispose(), r.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let i = t.textures;
		for (let t = 0, n = i.length; t < n; t++) {
			let n = r.get(i[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), s.memory.textures--), r.remove(i[t]);
		}
		r.remove(t);
	}
	let ee = 0;
	function te() {
		ee = 0;
	}
	function ne() {
		return ee;
	}
	function j(e) {
		ee = e;
	}
	function re() {
		let e = ee;
		return e >= i.maxTextures && l("WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + i.maxTextures), ee += 1, e;
	}
	function ie(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function ae(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && z(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) l("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) l("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				me(a, t, i);
				return;
			}
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function M(t, i) {
		let a = r.get(t);
		if (t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version) {
			me(a, t, i);
			return;
		}
		t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null), n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
	}
	function oe(t, i) {
		let a = r.get(t);
		if (t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version) {
			me(a, t, i);
			return;
		}
		n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function se(t, i) {
		let a = r.get(t);
		if (t.isCubeDepthTexture !== !0 && t.version > 0 && a.__version !== t.version) {
			he(a, t, i);
			return;
		}
		n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
	}
	let ce = {
		[Oe]: e.REPEAT,
		[P]: e.CLAMP_TO_EDGE,
		[ke]: e.MIRRORED_REPEAT
	}, le = {
		[F]: e.NEAREST,
		[Ae]: e.NEAREST_MIPMAP_NEAREST,
		[I]: e.NEAREST_MIPMAP_LINEAR,
		[L]: e.LINEAR,
		[R]: e.LINEAR_MIPMAP_NEAREST,
		[je]: e.LINEAR_MIPMAP_LINEAR
	}, ue = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function de(n, a) {
		if (a.type === 1015 && t.has("OES_texture_float_linear") === !1 && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008) && l("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, ce[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, ce[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, ce[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, le[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, le[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, ue[a.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let o = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function fe(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", E));
		let i = n.source, a = g.get(i);
		a === void 0 && (a = {}, g.set(i, a));
		let o = ie(n);
		if (o !== t.__cacheKey) {
			a[o] === void 0 && (a[o] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, s.memory.textures++, r = !0), a[o].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && k(n)), t.__cacheKey = o, t.__webglTexture = a[o].texture;
		}
		return r;
	}
	function N(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function pe(t, r, i, a) {
		let o = t.updateRanges;
		if (o.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
		else {
			o.sort((e, t) => e.start - t.start);
			let s = 0;
			for (let e = 1; e < o.length; e++) {
				let t = o[s], n = o[e], i = t.start + t.count, a = N(n.start, r.width, 4), c = N(t.start, r.width, 4);
				n.start <= i + 1 && a === c && N(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s, o[s] = n);
			}
			o.length = s + 1;
			let c = n.getParameter(e.UNPACK_ROW_LENGTH), l = n.getParameter(e.UNPACK_SKIP_PIXELS), u = n.getParameter(e.UNPACK_SKIP_ROWS);
			n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
			for (let t = 0, s = o.length; t < s; t++) {
				let s = o[t], c = Math.floor(s.start / 4), l = Math.ceil(s.count / 4), u = c % r.width, d = Math.floor(c / r.width), f = l;
				n.pixelStorei(e.UNPACK_SKIP_PIXELS, u), n.pixelStorei(e.UNPACK_SKIP_ROWS, d), n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data);
			}
			t.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, c), n.pixelStorei(e.UNPACK_SKIP_PIXELS, l), n.pixelStorei(e.UNPACK_SKIP_ROWS, u);
		}
	}
	function me(t, a, s) {
		let c = e.TEXTURE_2D;
		(a.isDataArrayTexture || a.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY), a.isData3DTexture && (c = e.TEXTURE_3D);
		let u = fe(t, a), d = a.source;
		n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s);
		let f = r.get(d);
		if (d.version !== f.__version || u === !0) {
			if (n.activeTexture(e.TEXTURE0 + s), !(typeof ImageBitmap < "u" && a.image instanceof ImageBitmap)) {
				let t = U.getPrimaries(U.workingColorSpace), r = a.colorSpace === "" ? null : U.getPrimaries(a.colorSpace), i = a.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, a.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			n.pixelStorei(e.UNPACK_ALIGNMENT, a.unpackAlignment);
			let t = y(a.image, !1, i.maxTextureSize);
			t = Ne(a, t);
			let r = o.convert(a.format, a.colorSpace), p = o.convert(a.type), h = C(a.internalFormat, r, p, a.normalized, a.colorSpace, a.isVideoTexture);
			de(c, a);
			let g, _ = a.mipmaps, v = a.isVideoTexture !== !0, S = f.__version === void 0 || u === !0, E = d.dataReady, D = T(a, t);
			if (a.isDepthTexture) h = w(a.format === Je, a.type), S && (v ? n.texStorage2D(e.TEXTURE_2D, 1, h, t.width, t.height) : n.texImage2D(e.TEXTURE_2D, 0, h, t.width, t.height, 0, r, p, null));
			else if (a.isDataTexture) {
				if (_.length > 0) {
					v && S && n.texStorage2D(e.TEXTURE_2D, D, h, _[0].width, _[0].height);
					for (let t = 0, i = _.length; t < i; t++) g = _[t], v ? E && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, g.width, g.height, r, p, g.data) : n.texImage2D(e.TEXTURE_2D, t, h, g.width, g.height, 0, r, p, g.data);
					a.generateMipmaps = !1;
				} else v ? (S && n.texStorage2D(e.TEXTURE_2D, D, h, t.width, t.height), E && pe(a, t, r, p)) : n.texImage2D(e.TEXTURE_2D, 0, h, t.width, t.height, 0, r, p, t.data);
			} else if (a.isCompressedTexture) {
				if (a.isCompressedArrayTexture) {
					v && S && n.texStorage3D(e.TEXTURE_2D_ARRAY, D, h, _[0].width, _[0].height, t.depth);
					for (let i = 0, o = _.length; i < o; i++) if (g = _[i], a.format !== 1023) {
						if (r !== null) {
							if (v) {
								if (E) {
									if (a.layerUpdates.size > 0) {
										let t = Te(g.width, g.height, a.format, a.type);
										for (let o of a.layerUpdates) {
											let a = g.data.subarray(o * t / g.data.BYTES_PER_ELEMENT, (o + 1) * t / g.data.BYTES_PER_ELEMENT);
											n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, o, g.width, g.height, 1, r, a);
										}
										a.clearLayerUpdates();
									} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, g.width, g.height, t.depth, r, g.data);
								}
							} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, i, h, g.width, g.height, t.depth, 0, g.data, 0, 0);
						} else l("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else v ? E && n.texSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, g.width, g.height, t.depth, r, p, g.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, i, h, g.width, g.height, t.depth, 0, r, p, g.data);
				} else {
					v && S && n.texStorage2D(e.TEXTURE_2D, D, h, _[0].width, _[0].height);
					for (let t = 0, i = _.length; t < i; t++) g = _[t], a.format === 1023 ? v ? E && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, g.width, g.height, r, p, g.data) : n.texImage2D(e.TEXTURE_2D, t, h, g.width, g.height, 0, r, p, g.data) : r === null ? l("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v ? E && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, g.width, g.height, r, g.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, h, g.width, g.height, 0, g.data);
				}
			} else if (a.isDataArrayTexture) {
				if (v) {
					if (S && n.texStorage3D(e.TEXTURE_2D_ARRAY, D, h, t.width, t.height, t.depth), E) {
						if (a.layerUpdates.size > 0) {
							let i = Te(t.width, t.height, a.format, a.type);
							for (let o of a.layerUpdates) {
								let a = t.data.subarray(o * i / t.data.BYTES_PER_ELEMENT, (o + 1) * i / t.data.BYTES_PER_ELEMENT);
								n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, o, t.width, t.height, 1, r, p, a);
							}
							a.clearLayerUpdates();
						} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data);
					}
				} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, h, t.width, t.height, t.depth, 0, r, p, t.data);
			} else if (a.isData3DTexture) v ? (S && n.texStorage3D(e.TEXTURE_3D, D, h, t.width, t.height, t.depth), E && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data)) : n.texImage3D(e.TEXTURE_3D, 0, h, t.width, t.height, t.depth, 0, r, p, t.data);
			else if (a.isFramebufferTexture) {
				if (S) {
					if (v) n.texStorage2D(e.TEXTURE_2D, D, h, t.width, t.height);
					else {
						let i = t.width, a = t.height;
						for (let t = 0; t < D; t++) n.texImage2D(e.TEXTURE_2D, t, h, i, a, 0, r, p, null), i >>= 1, a >>= 1;
					}
				}
			} else if (a.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let n = e.canvas;
					if (n.hasAttribute("layoutsubtree") || n.setAttribute("layoutsubtree", "true"), t.parentNode !== n) {
						n.appendChild(t), m.add(a), n.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of m) t.includes(e.image) && (e.needsUpdate = !0);
						}, n.requestPaint();
						return;
					}
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = e.RGBA, r = e.RGBA, i = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (_.length > 0) {
				if (v && S) {
					let t = Pe(_[0]);
					n.texStorage2D(e.TEXTURE_2D, D, h, t.width, t.height);
				}
				for (let t = 0, i = _.length; t < i; t++) g = _[t], v ? E && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, p, g) : n.texImage2D(e.TEXTURE_2D, t, h, r, p, g);
				a.generateMipmaps = !1;
			} else if (v) {
				if (S) {
					let r = Pe(t);
					n.texStorage2D(e.TEXTURE_2D, D, h, r.width, r.height);
				}
				E && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, p, t);
			} else n.texImage2D(e.TEXTURE_2D, 0, h, r, p, t);
			b(a) && x(c), f.__version = d.version, a.onUpdate && a.onUpdate(a);
		}
		t.__version = a.version;
	}
	function he(t, a, s) {
		if (a.image.length !== 6) return;
		let c = fe(t, a), u = a.source;
		n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
		let d = r.get(u);
		if (u.version !== d.__version || c === !0) {
			n.activeTexture(e.TEXTURE0 + s);
			let t = U.getPrimaries(U.workingColorSpace), r = a.colorSpace === "" ? null : U.getPrimaries(a.colorSpace), f = a.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, a.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, a.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, f);
			let p = a.isCompressedTexture || a.image[0].isCompressedTexture, m = a.image[0] && a.image[0].isDataTexture, h = [];
			for (let e = 0; e < 6; e++) !p && !m ? h[e] = y(a.image[e], !0, i.maxCubemapSize) : h[e] = m ? a.image[e].image : a.image[e], h[e] = Ne(a, h[e]);
			let g = h[0], _ = o.convert(a.format, a.colorSpace), v = o.convert(a.type), S = C(a.internalFormat, _, v, a.normalized, a.colorSpace), w = a.isVideoTexture !== !0, E = d.__version === void 0 || c === !0, D = u.dataReady, O = T(a, g);
			de(e.TEXTURE_CUBE_MAP, a);
			let k;
			if (p) {
				w && E && n.texStorage2D(e.TEXTURE_CUBE_MAP, O, S, g.width, g.height);
				for (let t = 0; t < 6; t++) {
					k = h[t].mipmaps;
					for (let r = 0; r < k.length; r++) {
						let i = k[r];
						a.format === 1023 ? w ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, _, v, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, S, i.width, i.height, 0, _, v, i.data) : _ === null ? l("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : w ? D && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, _, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, S, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (k = a.mipmaps, w && E) {
					k.length > 0 && O++;
					let t = Pe(h[0]);
					n.texStorage2D(e.TEXTURE_CUBE_MAP, O, S, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (m) {
					w ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, h[t].width, h[t].height, _, v, h[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, S, h[t].width, h[t].height, 0, _, v, h[t].data);
					for (let r = 0; r < k.length; r++) {
						let i = k[r].image[t].image;
						w ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, _, v, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, S, i.width, i.height, 0, _, v, i.data);
					}
				} else {
					w ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, _, v, h[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, S, _, v, h[t]);
					for (let r = 0; r < k.length; r++) {
						let i = k[r];
						w ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, _, v, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, S, _, v, i.image[t]);
					}
				}
			}
			b(a) && x(e.TEXTURE_CUBE_MAP), d.__version = u.version, a.onUpdate && a.onUpdate(a);
		}
		t.__version = a.version;
	}
	function ge(t, i, a, s, l, u) {
		let d = o.convert(a.format, a.colorSpace), f = o.convert(a.type), p = C(a.internalFormat, d, f, a.normalized, a.colorSpace), m = r.get(i), h = r.get(a);
		if (h.__renderTarget = i, !m.__hasExternalTextures) {
			let t = Math.max(1, i.width >> u), r = Math.max(1, i.height >> u);
			l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY ? n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null) : n.texImage2D(l, u, p, t, r, 0, d, f, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), Me(i) ? c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, s, l, h.__webglTexture, 0, De(i)) : (l === e.TEXTURE_2D || l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, s, l, h.__webglTexture, u), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function _e(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = w(n.stencilBuffer, a), s = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			Me(n) ? c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, De(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, De(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, s, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let a = t[i], s = o.convert(a.format, a.colorSpace), l = o.convert(a.type), u = C(a.internalFormat, s, l, a.normalized, a.colorSpace);
				Me(n) ? c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, De(n), u, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, De(n), u, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function ve(t, i, a) {
		let s = i.isWebGLCubeRenderTarget === !0;
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let l = r.get(i.depthTexture);
		if (l.__renderTarget = i, (!l.__webglTexture || i.depthTexture.image.width !== i.width || i.depthTexture.image.height !== i.height) && (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), s) {
			if (l.__webglInit === void 0 && (l.__webglInit = !0, i.depthTexture.addEventListener("dispose", E)), l.__webglTexture === void 0) {
				l.__webglTexture = e.createTexture(), n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture), de(e.TEXTURE_CUBE_MAP, i.depthTexture);
				let t = o.convert(i.depthTexture.format), r = o.convert(i.depthTexture.type), a;
				i.depthTexture.format === 1026 ? a = e.DEPTH_COMPONENT24 : i.depthTexture.format === 1027 && (a = e.DEPTH24_STENCIL8);
				for (let n = 0; n < 6; n++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, a, i.width, i.height, 0, t, r, null);
			}
		} else ae(i.depthTexture, 0);
		let u = l.__webglTexture, d = De(i), f = s ? e.TEXTURE_CUBE_MAP_POSITIVE_X + a : e.TEXTURE_2D, p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (i.depthTexture.format === 1026) Me(i) ? c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else if (i.depthTexture.format === 1027) Me(i) ? c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
	}
	function ye(t) {
		let i = r.get(t), a = t.isWebGLCubeRenderTarget === !0;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) for (let e = 0; e < 6; e++) ve(i.__webglFramebuffer[e], t, e);
			else {
				let e = t.texture.mipmaps;
				e && e.length > 0 ? ve(i.__webglFramebuffer[0], t, 0) : ve(i.__webglFramebuffer, t, 0);
			}
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), _e(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else {
			let r = t.texture.mipmaps;
			if (r && r.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), _e(i.__webglDepthbuffer, t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
				e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
			}
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function be(t, n, i) {
		let a = r.get(t);
		n !== void 0 && ge(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && ye(t);
	}
	function xe(t) {
		let i = t.texture, a = r.get(t), c = r.get(i);
		t.addEventListener("dispose", D);
		let l = t.textures, u = t.isWebGLCubeRenderTarget === !0, d = l.length > 1;
		if (d || (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()), c.__version = i.version, s.memory.textures++), u) {
			a.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps && i.mipmaps.length > 0) {
				a.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) a.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else a.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps && i.mipmaps.length > 0) {
				a.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) a.__webglFramebuffer[t] = e.createFramebuffer();
			} else a.__webglFramebuffer = e.createFramebuffer();
			if (d) for (let t = 0, n = l.length; t < n; t++) {
				let n = r.get(l[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), s.memory.textures++);
			}
			if (t.samples > 0 && Me(t) === !1) {
				a.__webglMultisampledFramebuffer = e.createFramebuffer(), a.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, a.__webglMultisampledFramebuffer);
				for (let n = 0; n < l.length; n++) {
					let r = l[n];
					a.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, a.__webglColorRenderbuffer[n]);
					let i = o.convert(r.format, r.colorSpace), s = o.convert(r.type), c = C(r.internalFormat, i, s, r.normalized, r.colorSpace, t.isXRRenderTarget === !0), u = De(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, a.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (a.__webglDepthRenderbuffer = e.createRenderbuffer(), _e(a.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (u) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), de(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps && i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) ge(a.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else ge(a.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			b(i) && x(e.TEXTURE_CUBE_MAP), n.unbindTexture();
		} else if (d) {
			for (let i = 0, o = l.length; i < o; i++) {
				let o = l[i], s = r.get(o), c = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(c, s.__webglTexture), de(c, o), ge(a.__webglFramebuffer, t, o, e.COLOR_ATTACHMENT0 + i, c, 0), b(o) && x(c);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, c.__webglTexture), de(r, i), i.mipmaps && i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) ge(a.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else ge(a.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			b(i) && x(r), n.unbindTexture();
		}
		t.depthBuffer && ye(t);
	}
	function Se(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (b(a)) {
				let t = S(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), x(t), n.unbindTexture();
			}
		}
	}
	let Ce = [], we = [];
	function Ee(t) {
		if (t.samples > 0) {
			if (Me(t) === !1) {
				let i = t.textures, a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, c = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, l = r.get(t), u = i.length > 1;
				if (u) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, l.__webglMultisampledFramebuffer);
				let f = t.texture.mipmaps;
				f && f.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), u) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, l.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), d === !0 && (Ce.length = 0, we.length = 0, Ce.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && t.resolveDepthBuffer === !1 && (Ce.push(c), we.push(c), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, we)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, Ce));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), u) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, l.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.resolveDepthBuffer === !1 && d) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function De(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function Me(e) {
		let n = r.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function z(e) {
		let t = s.render.frame;
		p.get(e) !== t && (p.set(e, t), e.update());
	}
	function Ne(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (U.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && l("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : u("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function Pe(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (f.width = e.naturalWidth || e.width, f.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (f.width = e.displayWidth, f.height = e.displayHeight) : (f.width = e.width, f.height = e.height), f;
	}
	this.allocateTextureUnit = re, this.resetTextureUnits = te, this.getTextureUnits = ne, this.setTextureUnits = j, this.setTexture2D = ae, this.setTexture2DArray = M, this.setTexture3D = oe, this.setTextureCube = se, this.rebindTextures = be, this.setupRenderTarget = xe, this.updateRenderTargetMipmap = Se, this.updateMultisampleRenderTarget = Ee, this.setupDepthRenderbuffer = ye, this.setupFrameBufferTexture = ge, this.useMultisampledRTT = Me, this.isReversedDepthBuffer = function() {
		return n.buffers.depth.getReversed();
	};
}
function il(e, t) {
	function n(n, r = "") {
		let i, a = U.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
					if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			} else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
				if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
				if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
				if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
				if (n === 37488) return i.COMPRESSED_R11_EAC;
				if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
				if (n === 37490) return i.COMPRESSED_RG11_EAC;
				if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
			} else return null;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
				if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
				if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
				if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
			} else return null;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
				if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
				if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
				if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
				if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
			} else return null;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
function al(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, he(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(mu.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(hu), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function ol(e, t, n, r) {
	let i = {}, a = {}, o = [], s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function c(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function d(e, n) {
		let o = i[e.id];
		o === void 0 && (v(e), o = f(e), i[e.id] = o, e.addEventListener("dispose", b));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let c = t.render.frame;
		a[e.id] !== c && (m(e), a[e.id] = c);
	}
	function f(t) {
		let n = p();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function p() {
		for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
		return u("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function m(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) h(t[n], e, n, a);
			else h(t, e, 0, a);
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function h(t, n, r, i) {
		if (_(t, n, r, i) === !0) {
			let n = t.__offset, r = t.value;
			if (Array.isArray(r)) {
				let e = 0;
				for (let n = 0; n < r.length; n++) {
					let i = r[n], a = y(i);
					g(i, t.__data, e), typeof i != "number" && typeof i != "boolean" && !i.isMatrix3 && !ArrayBuffer.isView(i) && (e += a.storage / Float32Array.BYTES_PER_ELEMENT);
				}
			} else g(r, t.__data, 0);
			e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
		}
	}
	function g(e, t, n) {
		typeof e == "number" || typeof e == "boolean" ? t[0] = e : e.isMatrix3 ? (t[0] = e.elements[0], t[1] = e.elements[1], t[2] = e.elements[2], t[3] = 0, t[4] = e.elements[3], t[5] = e.elements[4], t[6] = e.elements[5], t[7] = 0, t[8] = e.elements[6], t[9] = e.elements[7], t[10] = e.elements[8], t[11] = 0) : ArrayBuffer.isView(e) ? t.set(new e.constructor(e.buffer, e.byteOffset, t.length)) : e.toArray(t, n);
	}
	function _(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return r[a] = typeof i == "number" || typeof i == "boolean" ? i : ArrayBuffer.isView(i) ? i.slice() : i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (ArrayBuffer.isView(i)) return !0;
			else if (e.equals(i) === !1) return e.copy(i), !0;
		}
		return !1;
	}
	function v(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
				for (let e = 0, r = i.length; e < r; e++) {
					let r = i[e], a = y(r), o = n % 16, s = o % a.boundary, c = o + s;
					n += s, c !== 0 && 16 - c < a.storage && (n += 16 - c), t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += a.storage;
				}
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function y(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? l("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (t.boundary = 16, t.storage = e.byteLength) : l("WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function b(t) {
		let n = t.target;
		n.removeEventListener("dispose", b);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function x() {
		for (let t in i) e.deleteBuffer(i[t]);
		o = [], i = {}, a = {};
	}
	return {
		bind: c,
		update: d,
		dispose: x
	};
}
function sl() {
	return _u === null && (_u = new Ri(gu, 16, 16, Ze, Re), _u.name = "DFG_LUT", _u.minFilter = L, _u.magFilter = L, _u.wrapS = P, _u.wrapT = P, _u.generateMipmaps = !1, _u.needsUpdate = !0), _u;
}
var K, q, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El, Dl, Ol, kl, Al, jl, Ml, Nl, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l, eu, tu, nu, ru, iu, au, ou, su, cu, lu, uu, du, fu, pu, mu, hu, gu, _u, vu, yu = t((() => {
	ns(), K = {
		alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
		alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
		alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
		alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
		alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
		alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
		aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
		aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
		batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
		batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
		begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
		beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
		bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
		iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
		bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
		clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
		clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
		clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
		clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
		color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
		color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
		color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
		color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
		common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
		cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
		defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
		displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
		displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
		emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
		emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
		colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
		colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
		envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
		envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
		envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
		envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
		envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
		envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
		fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
		fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
		fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
		fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
		gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
		lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
		lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
		lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
		lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
		lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
		lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
		lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
		lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
		lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
		lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
		lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
		lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
		lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
		lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
		logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
		logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
		logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
		logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
		map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
		map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
		map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
		map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
		metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
		metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
		morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
		morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
		morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
		morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
		morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
		normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
		normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
		normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
		normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
		normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
		normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
		clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
		clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
		clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
		iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
		opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
		packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
		premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
		project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
		dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
		dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
		roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
		roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
		shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
		shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
		shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
		shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
		skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
		skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
		skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
		skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
		specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
		specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
		tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
		tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
		transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
		transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
		uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
		uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
		uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
		worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
		background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
		background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
		backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
		backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
		cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
		cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
		depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
		depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
		distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
		distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
		equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
		equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
		linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
		linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
		meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
		meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
		meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
		meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
		meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
		meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
		meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
		meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
		meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
		meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
		meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
		meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
		meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
		meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
		points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
		points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
		shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
		shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
		sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
		sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
	}, q = {
		common: {
			diffuse: { value: /*@__PURE__*/ new G(16777215) },
			opacity: { value: 1 },
			map: { value: null },
			mapTransform: { value: /*@__PURE__*/ new H() },
			alphaMap: { value: null },
			alphaMapTransform: { value: /*@__PURE__*/ new H() },
			alphaTest: { value: 0 }
		},
		specularmap: {
			specularMap: { value: null },
			specularMapTransform: { value: /*@__PURE__*/ new H() }
		},
		envmap: {
			envMap: { value: null },
			envMapRotation: { value: /*@__PURE__*/ new H() },
			reflectivity: { value: 1 },
			ior: { value: 1.5 },
			refractionRatio: { value: .98 },
			dfgLUT: { value: null }
		},
		aomap: {
			aoMap: { value: null },
			aoMapIntensity: { value: 1 },
			aoMapTransform: { value: /*@__PURE__*/ new H() }
		},
		lightmap: {
			lightMap: { value: null },
			lightMapIntensity: { value: 1 },
			lightMapTransform: { value: /*@__PURE__*/ new H() }
		},
		bumpmap: {
			bumpMap: { value: null },
			bumpMapTransform: { value: /*@__PURE__*/ new H() },
			bumpScale: { value: 1 }
		},
		normalmap: {
			normalMap: { value: null },
			normalMapTransform: { value: /*@__PURE__*/ new H() },
			normalScale: { value: /*@__PURE__*/ new B(1, 1) }
		},
		displacementmap: {
			displacementMap: { value: null },
			displacementMapTransform: { value: /*@__PURE__*/ new H() },
			displacementScale: { value: 1 },
			displacementBias: { value: 0 }
		},
		emissivemap: {
			emissiveMap: { value: null },
			emissiveMapTransform: { value: /*@__PURE__*/ new H() }
		},
		metalnessmap: {
			metalnessMap: { value: null },
			metalnessMapTransform: { value: /*@__PURE__*/ new H() }
		},
		roughnessmap: {
			roughnessMap: { value: null },
			roughnessMapTransform: { value: /*@__PURE__*/ new H() }
		},
		gradientmap: { gradientMap: { value: null } },
		fog: {
			fogDensity: { value: 25e-5 },
			fogNear: { value: 1 },
			fogFar: { value: 2e3 },
			fogColor: { value: /*@__PURE__*/ new G(16777215) }
		},
		lights: {
			ambientLightColor: { value: [] },
			lightProbe: { value: [] },
			directionalLights: {
				value: [],
				properties: {
					direction: {},
					color: {}
				}
			},
			directionalLightShadows: {
				value: [],
				properties: {
					shadowIntensity: 1,
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			directionalShadowMatrix: { value: [] },
			spotLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					direction: {},
					distance: {},
					coneCos: {},
					penumbraCos: {},
					decay: {}
				}
			},
			spotLightShadows: {
				value: [],
				properties: {
					shadowIntensity: 1,
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			spotLightMap: { value: [] },
			spotLightMatrix: { value: [] },
			pointLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					decay: {},
					distance: {}
				}
			},
			pointLightShadows: {
				value: [],
				properties: {
					shadowIntensity: 1,
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {},
					shadowCameraNear: {},
					shadowCameraFar: {}
				}
			},
			pointShadowMatrix: { value: [] },
			hemisphereLights: {
				value: [],
				properties: {
					direction: {},
					skyColor: {},
					groundColor: {}
				}
			},
			rectAreaLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					width: {},
					height: {}
				}
			},
			ltc_1: { value: null },
			ltc_2: { value: null },
			probesSH: { value: null },
			probesMin: { value: /*@__PURE__*/ new V() },
			probesMax: { value: /*@__PURE__*/ new V() },
			probesResolution: { value: /*@__PURE__*/ new V() }
		},
		points: {
			diffuse: { value: /*@__PURE__*/ new G(16777215) },
			opacity: { value: 1 },
			size: { value: 1 },
			scale: { value: 1 },
			map: { value: null },
			alphaMap: { value: null },
			alphaMapTransform: { value: /*@__PURE__*/ new H() },
			alphaTest: { value: 0 },
			uvTransform: { value: /*@__PURE__*/ new H() }
		},
		sprite: {
			diffuse: { value: /*@__PURE__*/ new G(16777215) },
			opacity: { value: 1 },
			center: { value: /*@__PURE__*/ new B(.5, .5) },
			rotation: { value: 0 },
			map: { value: null },
			mapTransform: { value: /*@__PURE__*/ new H() },
			alphaMap: { value: null },
			alphaMapTransform: { value: /*@__PURE__*/ new H() },
			alphaTest: { value: 0 }
		}
	}, cl = {
		basic: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.specularmap,
				q.envmap,
				q.aomap,
				q.lightmap,
				q.fog
			]),
			vertexShader: K.meshbasic_vert,
			fragmentShader: K.meshbasic_frag
		},
		lambert: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.specularmap,
				q.envmap,
				q.aomap,
				q.lightmap,
				q.emissivemap,
				q.bumpmap,
				q.normalmap,
				q.displacementmap,
				q.fog,
				q.lights,
				{
					emissive: { value: /*@__PURE__*/ new G(0) },
					envMapIntensity: { value: 1 }
				}
			]),
			vertexShader: K.meshlambert_vert,
			fragmentShader: K.meshlambert_frag
		},
		phong: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.specularmap,
				q.envmap,
				q.aomap,
				q.lightmap,
				q.emissivemap,
				q.bumpmap,
				q.normalmap,
				q.displacementmap,
				q.fog,
				q.lights,
				{
					emissive: { value: /*@__PURE__*/ new G(0) },
					specular: { value: /*@__PURE__*/ new G(1118481) },
					shininess: { value: 30 },
					envMapIntensity: { value: 1 }
				}
			]),
			vertexShader: K.meshphong_vert,
			fragmentShader: K.meshphong_frag
		},
		standard: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.envmap,
				q.aomap,
				q.lightmap,
				q.emissivemap,
				q.bumpmap,
				q.normalmap,
				q.displacementmap,
				q.roughnessmap,
				q.metalnessmap,
				q.fog,
				q.lights,
				{
					emissive: { value: /*@__PURE__*/ new G(0) },
					roughness: { value: 1 },
					metalness: { value: 0 },
					envMapIntensity: { value: 1 }
				}
			]),
			vertexShader: K.meshphysical_vert,
			fragmentShader: K.meshphysical_frag
		},
		toon: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.aomap,
				q.lightmap,
				q.emissivemap,
				q.bumpmap,
				q.normalmap,
				q.displacementmap,
				q.gradientmap,
				q.fog,
				q.lights,
				{ emissive: { value: /*@__PURE__*/ new G(0) } }
			]),
			vertexShader: K.meshtoon_vert,
			fragmentShader: K.meshtoon_frag
		},
		matcap: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.bumpmap,
				q.normalmap,
				q.displacementmap,
				q.fog,
				{ matcap: { value: null } }
			]),
			vertexShader: K.meshmatcap_vert,
			fragmentShader: K.meshmatcap_frag
		},
		points: {
			uniforms: /*@__PURE__*/ N([q.points, q.fog]),
			vertexShader: K.points_vert,
			fragmentShader: K.points_frag
		},
		dashed: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.fog,
				{
					scale: { value: 1 },
					dashSize: { value: 1 },
					totalSize: { value: 2 }
				}
			]),
			vertexShader: K.linedashed_vert,
			fragmentShader: K.linedashed_frag
		},
		depth: {
			uniforms: /*@__PURE__*/ N([q.common, q.displacementmap]),
			vertexShader: K.depth_vert,
			fragmentShader: K.depth_frag
		},
		normal: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.bumpmap,
				q.normalmap,
				q.displacementmap,
				{ opacity: { value: 1 } }
			]),
			vertexShader: K.meshnormal_vert,
			fragmentShader: K.meshnormal_frag
		},
		sprite: {
			uniforms: /*@__PURE__*/ N([q.sprite, q.fog]),
			vertexShader: K.sprite_vert,
			fragmentShader: K.sprite_frag
		},
		background: {
			uniforms: {
				uvTransform: { value: /*@__PURE__*/ new H() },
				t2D: { value: null },
				backgroundIntensity: { value: 1 }
			},
			vertexShader: K.background_vert,
			fragmentShader: K.background_frag
		},
		backgroundCube: {
			uniforms: {
				envMap: { value: null },
				backgroundBlurriness: { value: 0 },
				backgroundIntensity: { value: 1 },
				backgroundRotation: { value: /*@__PURE__*/ new H() }
			},
			vertexShader: K.backgroundCube_vert,
			fragmentShader: K.backgroundCube_frag
		},
		cube: {
			uniforms: {
				tCube: { value: null },
				tFlip: { value: -1 },
				opacity: { value: 1 }
			},
			vertexShader: K.cube_vert,
			fragmentShader: K.cube_frag
		},
		equirect: {
			uniforms: { tEquirect: { value: null } },
			vertexShader: K.equirect_vert,
			fragmentShader: K.equirect_frag
		},
		distance: {
			uniforms: /*@__PURE__*/ N([
				q.common,
				q.displacementmap,
				{
					referencePosition: { value: /*@__PURE__*/ new V() },
					nearDistance: { value: 1 },
					farDistance: { value: 1e3 }
				}
			]),
			vertexShader: K.distance_vert,
			fragmentShader: K.distance_frag
		},
		shadow: {
			uniforms: /*@__PURE__*/ N([
				q.lights,
				q.fog,
				{
					color: { value: /*@__PURE__*/ new G(0) },
					opacity: { value: 1 }
				}
			]),
			vertexShader: K.shadow_vert,
			fragmentShader: K.shadow_frag
		}
	}, cl.physical = {
		uniforms: /*@__PURE__*/ N([cl.standard.uniforms, {
			clearcoat: { value: 0 },
			clearcoatMap: { value: null },
			clearcoatMapTransform: { value: /*@__PURE__*/ new H() },
			clearcoatNormalMap: { value: null },
			clearcoatNormalMapTransform: { value: /*@__PURE__*/ new H() },
			clearcoatNormalScale: { value: /*@__PURE__*/ new B(1, 1) },
			clearcoatRoughness: { value: 0 },
			clearcoatRoughnessMap: { value: null },
			clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new H() },
			dispersion: { value: 0 },
			iridescence: { value: 0 },
			iridescenceMap: { value: null },
			iridescenceMapTransform: { value: /*@__PURE__*/ new H() },
			iridescenceIOR: { value: 1.3 },
			iridescenceThicknessMinimum: { value: 100 },
			iridescenceThicknessMaximum: { value: 400 },
			iridescenceThicknessMap: { value: null },
			iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new H() },
			sheen: { value: 0 },
			sheenColor: { value: /*@__PURE__*/ new G(0) },
			sheenColorMap: { value: null },
			sheenColorMapTransform: { value: /*@__PURE__*/ new H() },
			sheenRoughness: { value: 1 },
			sheenRoughnessMap: { value: null },
			sheenRoughnessMapTransform: { value: /*@__PURE__*/ new H() },
			transmission: { value: 0 },
			transmissionMap: { value: null },
			transmissionMapTransform: { value: /*@__PURE__*/ new H() },
			transmissionSamplerSize: { value: /*@__PURE__*/ new B() },
			transmissionSamplerMap: { value: null },
			thickness: { value: 0 },
			thicknessMap: { value: null },
			thicknessMapTransform: { value: /*@__PURE__*/ new H() },
			attenuationDistance: { value: 0 },
			attenuationColor: { value: /*@__PURE__*/ new G(0) },
			specularColor: { value: /*@__PURE__*/ new G(1, 1, 1) },
			specularColorMap: { value: null },
			specularColorMapTransform: { value: /*@__PURE__*/ new H() },
			specularIntensity: { value: 1 },
			specularIntensityMap: { value: null },
			specularIntensityMapTransform: { value: /*@__PURE__*/ new H() },
			anisotropyVector: { value: /*@__PURE__*/ new B() },
			anisotropyMap: { value: null },
			anisotropyMapTransform: { value: /*@__PURE__*/ new H() }
		}]),
		vertexShader: K.meshphysical_vert,
		fragmentShader: K.meshphysical_frag
	}, ll = {
		r: 0,
		b: 0,
		g: 0
	}, ul = /*@__PURE__*/ new W(), dl = /*@__PURE__*/ new H(), dl.set(-1, 0, 0, 0, 1, 0, 0, 0, 1), fl = 4, pl = [
		.125,
		.215,
		.35,
		.446,
		.526,
		.582
	], ml = 20, hl = 256, gl = /*@__PURE__*/ new Mo(), _l = /*@__PURE__*/ new G(), vl = null, yl = 0, bl = 0, xl = !1, Sl = /*@__PURE__*/ new V(), Cl = class {
		constructor(e) {
			this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
		}
		fromScene(e, t = 0, n = .1, r = 100, i = {}) {
			let { size: a = 256, position: o = Sl } = i;
			vl = this._renderer.getRenderTarget(), yl = this._renderer.getActiveCubeFace(), bl = this._renderer.getActiveMipmapLevel(), xl = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
			let s = this._allocateTargets();
			return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s, o), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
		}
		fromEquirectangular(e, t = null) {
			return this._fromTexture(e, t);
		}
		fromCubemap(e, t = null) {
			return this._fromTexture(e, t);
		}
		compileCubemapShader() {
			this._cubemapMaterial === null && (this._cubemapMaterial = gs(), this._compileMaterial(this._cubemapMaterial));
		}
		compileEquirectangularShader() {
			this._equirectMaterial === null && (this._equirectMaterial = hs(), this._compileMaterial(this._equirectMaterial));
		}
		dispose() {
			this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
		}
		_setSize(e) {
			this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
		}
		_dispose() {
			this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
			for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
		}
		_cleanup(e) {
			this._renderer.setRenderTarget(vl, yl, bl), this._renderer.xr.enabled = xl, e.scissorTest = !1, fs(e, 0, 0, e.width, e.height);
		}
		_fromTexture(e, t) {
			e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), vl = this._renderer.getRenderTarget(), yl = this._renderer.getActiveCubeFace(), bl = this._renderer.getActiveMipmapLevel(), xl = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
			let n = t || this._allocateTargets();
			return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
		}
		_allocateTargets() {
			let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
				magFilter: L,
				minFilter: L,
				generateMipmaps: !1,
				type: Re,
				format: Ke,
				colorSpace: Kt,
				depthBuffer: !1
			}, r = ds(e, t, n);
			if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
				this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ds(e, t, n);
				let { _lodMax: r } = this;
				({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = us(r)), this._blurMaterial = ms(r, e, t), this._ggxMaterial = ps(r, e, t);
			}
			return r;
		}
		_compileMaterial(e) {
			let t = new Ei(new ei(), e);
			this._renderer.compile(t, gl);
		}
		_sceneToCubeUV(e, t, n, r, i) {
			let a = new Do(90, 1, t, n), o = [
				1,
				-1,
				1,
				1,
				1,
				1
			], s = [
				1,
				1,
				1,
				-1,
				-1,
				-1
			], c = this._renderer, l = c.autoClear, u = c.toneMapping;
			c.getClearColor(_l), c.toneMapping = 0, c.autoClear = !1, c.state.buffers.depth.getReversed() && (c.setRenderTarget(r), c.clearDepth(), c.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Ei(new ka(), new mi({
				name: "PMREM.Background",
				side: 1,
				depthWrite: !1,
				depthTest: !1
			})));
			let d = this._backgroundBox, f = d.material, p = !1, m = e.background;
			m ? m.isColor && (f.color.copy(m), e.background = null, p = !0) : (f.color.copy(_l), p = !0);
			for (let t = 0; t < 6; t++) {
				let n = t % 3;
				n === 0 ? (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x + s[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, o[t]), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y + s[t], i.z)) : (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y, i.z + s[t]));
				let l = this._cubeSize;
				fs(r, n * l, t > 2 ? l : 0, l, l), c.setRenderTarget(r), p && c.render(d, a), c.render(e, a);
			}
			c.toneMapping = u, c.autoClear = l, e.background = m;
		}
		_textureToCubeUV(e, t) {
			let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
			r ? (this._cubemapMaterial === null && (this._cubemapMaterial = gs()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = hs());
			let i = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
			a.material = i;
			let o = i.uniforms;
			o.envMap.value = e;
			let s = this._cubeSize;
			fs(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, gl);
		}
		_applyPMREM(e) {
			let t = this._renderer, n = t.autoClear;
			t.autoClear = !1;
			let r = this._lodMeshes.length;
			for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
			t.autoClear = n;
		}
		_applyGGXFilter(e, t, n) {
			let r = this._renderer, i = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
			o.material = a;
			let s = a.uniforms, c = n / (this._lodMeshes.length - 1), l = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - l * l) * (0 + c * 1.25), { _lodMax: d } = this, f = this._sizeLods[n], p = 3 * f * (n > d - fl ? n - d + fl : 0), m = 4 * (this._cubeSize - f);
			s.envMap.value = e.texture, s.roughness.value = u, s.mipInt.value = d - t, fs(i, p, m, 3 * f, 2 * f), r.setRenderTarget(i), r.render(o, gl), s.envMap.value = i.texture, s.roughness.value = 0, s.mipInt.value = d - n, fs(e, p, m, 3 * f, 2 * f), r.setRenderTarget(e), r.render(o, gl);
		}
		_blur(e, t, n, r, i) {
			let a = this._pingPongRenderTarget;
			this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i);
		}
		_halfBlur(e, t, n, r, i, a, o) {
			let s = this._renderer, c = this._blurMaterial;
			a !== "latitudinal" && a !== "longitudinal" && u("blur direction must be either latitudinal or longitudinal!");
			let d = this._lodMeshes[r];
			d.material = c;
			let f = c.uniforms, p = this._sizeLods[n] - 1, m = isFinite(i) ? Math.PI / (2 * p) : 2 * Math.PI / 39, h = i / m, g = isFinite(i) ? 1 + Math.floor(3 * h) : ml;
			g > ml && l(`sigmaRadians, ${i}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ml}`);
			let _ = [], v = 0;
			for (let e = 0; e < ml; ++e) {
				let t = e / h, n = Math.exp(-t * t / 2);
				_.push(n), e === 0 ? v += n : e < g && (v += 2 * n);
			}
			for (let e = 0; e < _.length; e++) _[e] = _[e] / v;
			f.envMap.value = e.texture, f.samples.value = g, f.weights.value = _, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
			let { _lodMax: y } = this;
			f.dTheta.value = m, f.mipInt.value = y - n;
			let b = this._sizeLods[r];
			fs(t, 3 * b * (r > y - fl ? r - y + fl : 0), 4 * (this._cubeSize - b), 3 * b, 2 * b), s.setRenderTarget(t), s.render(d, gl);
		}
	}, wl = class extends wn {
		constructor(e = 1, t = {}) {
			super(e, e, t), this.isWebGLCubeRenderTarget = !0;
			let n = {
				width: e,
				height: e,
				depth: 1
			}, r = [
				n,
				n,
				n,
				n,
				n,
				n
			];
			this.texture = new wa(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
		}
		fromEquirectangularTexture(e, t) {
			this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
			let n = {
				uniforms: { tEquirect: { value: null } },
				vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
				fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
			}, r = new ka(5, 5, 5), i = new Ra({
				name: "CubemapFromEquirect",
				uniforms: fe(n.uniforms),
				vertexShader: n.vertexShader,
				fragmentShader: n.fragmentShader,
				side: 1,
				blending: 0
			});
			i.uniforms.tEquirect.value = t;
			let a = new Ei(r, i), o = t.minFilter;
			return t.minFilter === 1008 && (t.minFilter = L), new Bo(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
		}
		clear(e, t = !0, n = !0, r = !0) {
			let i = e.getRenderTarget();
			for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
			e.setRenderTarget(i);
		}
	}, Tl = {
		1: "LINEAR_TONE_MAPPING",
		2: "REINHARD_TONE_MAPPING",
		3: "CINEON_TONE_MAPPING",
		4: "ACES_FILMIC_TONE_MAPPING",
		6: "AGX_TONE_MAPPING",
		7: "NEUTRAL_TONE_MAPPING",
		5: "CUSTOM_TONE_MAPPING"
	}, El = /*@__PURE__*/ new xn(), Dl = /*@__PURE__*/ new Ea(1, 1), Ol = /*@__PURE__*/ new Tn(), kl = /*@__PURE__*/ new En(), Al = /*@__PURE__*/ new wa(), jl = [], Ml = [], Nl = /* @__PURE__ */ new Float32Array(16), Pl = /* @__PURE__ */ new Float32Array(9), Fl = /* @__PURE__ */ new Float32Array(4), Il = class {
		constructor(e, t, n) {
			this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Ys(t.type);
		}
	}, Ll = class {
		constructor(e, t, n) {
			this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = hc(t.type);
		}
	}, Rl = class {
		constructor(e) {
			this.id = e, this.seq = [], this.map = {};
		}
		setValue(e, t, n) {
			let r = this.seq;
			for (let i = 0, a = r.length; i !== a; ++i) {
				let a = r[i];
				a.setValue(e, t[a.id], n);
			}
		}
	}, zl = /(\w+)(\])?(\[|\.)?/g, Bl = class {
		constructor(e, t) {
			this.seq = [], this.map = {};
			let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
			for (let r = 0; r < n; ++r) {
				let n = e.getActiveUniform(t, r);
				_c(n, e.getUniformLocation(t, n.name), this);
			}
			let r = [], i = [];
			for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
			r.length > 0 && (this.seq = r.concat(i));
		}
		setValue(e, t, n, r) {
			let i = this.map[t];
			i !== void 0 && i.setValue(e, n, r);
		}
		setOptional(e, t, n) {
			let r = t[n];
			r !== void 0 && this.setValue(e, n, r);
		}
		static upload(e, t, n, r) {
			for (let i = 0, a = t.length; i !== a; ++i) {
				let a = t[i], o = n[a.id];
				o.needsUpdate !== !1 && a.setValue(e, o.value, r);
			}
		}
		static seqWithValue(e, t) {
			let n = [];
			for (let r = 0, i = e.length; r !== i; ++r) {
				let i = e[r];
				i.id in t && n.push(i);
			}
			return n;
		}
	}, Vl = 37297, Hl = 0, Ul = /*@__PURE__*/ new H(), Wl = {
		1: "Linear",
		2: "Reinhard",
		3: "Cineon",
		4: "ACESFilmic",
		6: "AgX",
		7: "Neutral",
		5: "Custom"
	}, Gl = /*@__PURE__*/ new V(), Kl = /^[ \t]*#include +<([\w\d./]+)>/gm, ql = /* @__PURE__ */ new Map(), Jl = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g, Yl = {
		1: "SHADOWMAP_TYPE_PCF",
		3: "SHADOWMAP_TYPE_VSM"
	}, Xl = {
		301: "ENVMAP_TYPE_CUBE",
		302: "ENVMAP_TYPE_CUBE",
		306: "ENVMAP_TYPE_CUBE_UV"
	}, Zl = { 302: "ENVMAP_MODE_REFRACTION" }, Ql = {
		0: "ENVMAP_BLENDING_MULTIPLY",
		1: "ENVMAP_BLENDING_MIX",
		2: "ENVMAP_BLENDING_ADD"
	}, $l = 0, eu = class {
		constructor() {
			this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
		}
		update(e, t, n) {
			let r = this._getShaderCacheForMaterial(e);
			return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
		}
		remove(e) {
			let t = this.materialCache.get(e);
			for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
			return this.materialCache.delete(e), this;
		}
		getVertexShaderStage(e) {
			return this._getShaderStage(e.vertexShader);
		}
		getFragmentShaderStage(e) {
			return this._getShaderStage(e.fragmentShader);
		}
		dispose() {
			this.shaderCache.clear(), this.materialCache.clear();
		}
		_getShaderCacheForMaterial(e) {
			let t = this.materialCache, n = t.get(e);
			return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
		}
		_getShaderStage(e) {
			let t = this.shaderCache, n = t.get(e);
			return n === void 0 && (n = new tu(e), t.set(e, n)), n;
		}
	}, tu = class {
		constructor(e) {
			this.id = $l++, this.code = e, this.usedTimes = 0;
		}
	}, nu = 0, ru = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", iu = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", au = [
		/*@__PURE__*/ new V(1, 0, 0),
		/*@__PURE__*/ new V(-1, 0, 0),
		/*@__PURE__*/ new V(0, 1, 0),
		/*@__PURE__*/ new V(0, -1, 0),
		/*@__PURE__*/ new V(0, 0, 1),
		/*@__PURE__*/ new V(0, 0, -1)
	], ou = [
		/*@__PURE__*/ new V(0, -1, 0),
		/*@__PURE__*/ new V(0, -1, 0),
		/*@__PURE__*/ new V(0, 0, 1),
		/*@__PURE__*/ new V(0, 0, -1),
		/*@__PURE__*/ new V(0, -1, 0),
		/*@__PURE__*/ new V(0, -1, 0)
	], su = /*@__PURE__*/ new W(), cu = /*@__PURE__*/ new V(), lu = /*@__PURE__*/ new V(), uu = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", du = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", fu = class {
		constructor() {
			this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
		}
		init(e, t) {
			if (this.texture === null) {
				let n = new Oa(e.texture);
				(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
			}
		}
		getMesh(e) {
			if (this.texture !== null && this.mesh === null) {
				let t = e.cameras[0].viewport, n = new Ra({
					vertexShader: uu,
					fragmentShader: du,
					uniforms: {
						depthColor: { value: this.texture },
						depthWidth: { value: t.z },
						depthHeight: { value: t.w }
					}
				});
				this.mesh = new Ei(new Na(20, 20), n);
			}
			return this.mesh;
		}
		reset() {
			this.texture = null, this.mesh = null;
		}
		getDepthTexture() {
			return this.texture;
		}
	}, pu = class extends nn {
		constructor(e, t) {
			super();
			let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, u = null, d = null, f = null, p = null, m = null, h = typeof XRWebGLBinding < "u", g = new fu(), _ = {}, v = t.getContextAttributes(), y = null, b = null, x = [], S = [], C = new B(), w = null, T = new Do();
			T.viewport = new Sn();
			let E = new Do();
			E.viewport = new Sn();
			let D = [T, E], O = new Vo(), k = null, A = null;
			this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
				let t = x[e];
				return t === void 0 && (t = new nr(), x[e] = t), t.getTargetRaySpace();
			}, this.getControllerGrip = function(e) {
				let t = x[e];
				return t === void 0 && (t = new nr(), x[e] = t), t.getGripSpace();
			}, this.getHand = function(e) {
				let t = x[e];
				return t === void 0 && (t = new nr(), x[e] = t), t.getHandSpace();
			};
			function ee(e) {
				let t = S.indexOf(e.inputSource);
				if (t === -1) return;
				let n = x[t];
				n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
					type: e.type,
					data: e.inputSource
				}));
			}
			function te() {
				r.removeEventListener("select", ee), r.removeEventListener("selectstart", ee), r.removeEventListener("selectend", ee), r.removeEventListener("squeeze", ee), r.removeEventListener("squeezestart", ee), r.removeEventListener("squeezeend", ee), r.removeEventListener("end", te), r.removeEventListener("inputsourceschange", ne);
				for (let e = 0; e < x.length; e++) {
					let t = S[e];
					t !== null && (S[e] = null, x[e].disconnect(t));
				}
				k = null, A = null, g.reset();
				for (let e in _) delete _[e];
				e.setRenderTarget(y), p = null, f = null, d = null, r = null, b = null, ce.stop(), n.isPresenting = !1, e.setPixelRatio(w), e.setSize(C.width, C.height, !1), n.dispatchEvent({ type: "sessionend" });
			}
			this.setFramebufferScaleFactor = function(e) {
				i = e, n.isPresenting === !0 && l("WebXRManager: Cannot change framebuffer scale while presenting.");
			}, this.setReferenceSpaceType = function(e) {
				o = e, n.isPresenting === !0 && l("WebXRManager: Cannot change reference space type while presenting.");
			}, this.getReferenceSpace = function() {
				return c || a;
			}, this.setReferenceSpace = function(e) {
				c = e;
			}, this.getBaseLayer = function() {
				return f === null ? p : f;
			}, this.getBinding = function() {
				return d === null && h && (d = new XRWebGLBinding(r, t)), d;
			}, this.getFrame = function() {
				return m;
			}, this.getSession = function() {
				return r;
			}, this.setSession = async function(l) {
				if (r = l, r !== null) {
					if (y = e.getRenderTarget(), r.addEventListener("select", ee), r.addEventListener("selectstart", ee), r.addEventListener("selectend", ee), r.addEventListener("squeeze", ee), r.addEventListener("squeezestart", ee), r.addEventListener("squeezeend", ee), r.addEventListener("end", te), r.addEventListener("inputsourceschange", ne), v.xrCompatible !== !0 && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(C), h && "createProjectionLayer" in XRWebGLBinding.prototype) {
						let n = null, a = null, o = null;
						v.depth && (o = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = v.stencil ? Je : qe, a = v.stencil ? Ve : Ie);
						let s = {
							colorFormat: t.RGBA8,
							depthFormat: o,
							scaleFactor: i
						};
						d = this.getBinding(), f = d.createProjectionLayer(s), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), b = new wn(f.textureWidth, f.textureHeight, {
							format: Ke,
							type: Me,
							depthTexture: new Ea(f.textureWidth, f.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
							stencilBuffer: v.stencil,
							colorSpace: e.outputColorSpace,
							samples: v.antialias ? 4 : 0,
							resolveDepthBuffer: f.ignoreDepthValues === !1,
							resolveStencilBuffer: f.ignoreDepthValues === !1
						});
					} else {
						let n = {
							antialias: v.antialias,
							alpha: !0,
							depth: v.depth,
							stencil: v.stencil,
							framebufferScaleFactor: i
						};
						p = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), b = new wn(p.framebufferWidth, p.framebufferHeight, {
							format: Ke,
							type: Me,
							colorSpace: e.outputColorSpace,
							stencilBuffer: v.stencil,
							resolveDepthBuffer: p.ignoreDepthValues === !1,
							resolveStencilBuffer: p.ignoreDepthValues === !1
						});
					}
					b.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), ce.setContext(r), ce.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
				}
			}, this.getEnvironmentBlendMode = function() {
				if (r !== null) return r.environmentBlendMode;
			}, this.getDepthTexture = function() {
				return g.getDepthTexture();
			};
			function ne(e) {
				for (let t = 0; t < e.removed.length; t++) {
					let n = e.removed[t], r = S.indexOf(n);
					r >= 0 && (S[r] = null, x[r].disconnect(n));
				}
				for (let t = 0; t < e.added.length; t++) {
					let n = e.added[t], r = S.indexOf(n);
					if (r === -1) {
						for (let e = 0; e < x.length; e++) if (e >= S.length) {
							S.push(n), r = e;
							break;
						} else if (S[e] === null) {
							S[e] = n, r = e;
							break;
						}
						if (r === -1) break;
					}
					let i = x[r];
					i && i.connect(n);
				}
			}
			let j = new V(), re = new V();
			function ie(e, t, n) {
				j.setFromMatrixPosition(t.matrixWorld), re.setFromMatrixPosition(n.matrixWorld);
				let r = j.distanceTo(re), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
				if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
				else {
					let t = o + m, n = s + m, i = f - h, a = p + (r - h), u = c * s / n * t, d = l * s / n * t;
					e.projectionMatrix.makePerspective(i, a, u, d, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
				}
			}
			function ae(e, t) {
				t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
			}
			this.updateCamera = function(e) {
				if (r === null) return;
				let t = e.near, n = e.far;
				g.texture !== null && (g.depthNear > 0 && (t = g.depthNear), g.depthFar > 0 && (n = g.depthFar)), O.near = E.near = T.near = t, O.far = E.far = T.far = n, (k !== O.near || A !== O.far) && (r.updateRenderState({
					depthNear: O.near,
					depthFar: O.far
				}), k = O.near, A = O.far), O.layers.mask = e.layers.mask | 6, T.layers.mask = O.layers.mask & -5, E.layers.mask = O.layers.mask & -3;
				let i = e.parent, a = O.cameras;
				ae(O, i);
				for (let e = 0; e < a.length; e++) ae(a[e], i);
				a.length === 2 ? ie(O, T, E) : O.projectionMatrix.copy(T.projectionMatrix), M(e, O, i);
			};
			function M(e, t, n) {
				n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = sn * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
			}
			this.getCamera = function() {
				return O;
			}, this.getFoveation = function() {
				if (f !== null || p !== null) return s;
			}, this.setFoveation = function(e) {
				s = e, f !== null && (f.fixedFoveation = e), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = e);
			}, this.hasDepthSensing = function() {
				return g.texture !== null;
			}, this.getDepthSensingMesh = function() {
				return g.getMesh(O);
			}, this.getCameraTexture = function(e) {
				return _[e];
			};
			let oe = null;
			function se(t, i) {
				if (u = i.getViewerPose(c || a), m = i, u !== null) {
					let t = u.views;
					p !== null && (e.setRenderTargetFramebuffer(b, p.framebuffer), e.setRenderTarget(b));
					let i = !1;
					t.length !== O.cameras.length && (O.cameras.length = 0, i = !0);
					for (let n = 0; n < t.length; n++) {
						let r = t[n], a = null;
						if (p !== null) a = p.getViewport(r);
						else {
							let t = d.getViewSubImage(f, r);
							a = t.viewport, n === 0 && (e.setRenderTargetTextures(b, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(b));
						}
						let o = D[n];
						o === void 0 && (o = new Do(), o.layers.enable(n), o.viewport = new Sn(), D[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (O.matrix.copy(o.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), i === !0 && O.cameras.push(o);
					}
					let a = r.enabledFeatures;
					if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) {
						d = n.getBinding();
						let e = d.getDepthInformation(t[0]);
						e && e.isValid && e.texture && g.init(e, r.renderState);
					}
					if (a && a.includes("camera-access") && h) {
						e.state.unbindTexture(), d = n.getBinding();
						for (let e = 0; e < t.length; e++) {
							let n = t[e].camera;
							if (n) {
								let e = _[n];
								e || (e = new Oa(), _[n] = e);
								let t = d.getCameraImage(n);
								e.sourceTexture = t;
							}
						}
					}
				}
				for (let e = 0; e < x.length; e++) {
					let t = S[e], n = x[e];
					t !== null && n !== void 0 && n.update(t, i, c || a);
				}
				oe && oe(t, i), i.detectedPlanes && n.dispatchEvent({
					type: "planesdetected",
					data: i
				}), m = null;
			}
			let ce = new rs();
			ce.setAnimationLoop(se), this.setAnimationLoop = function(e) {
				oe = e;
			}, this.dispose = function() {};
		}
	}, mu = /*@__PURE__*/ new W(), hu = /*@__PURE__*/ new H(), hu.set(-1, 0, 0, 0, 1, 0, 0, 0, 1), gu = new Uint16Array([
		12469,
		15057,
		12620,
		14925,
		13266,
		14620,
		13807,
		14376,
		14323,
		13990,
		14545,
		13625,
		14713,
		13328,
		14840,
		12882,
		14931,
		12528,
		14996,
		12233,
		15039,
		11829,
		15066,
		11525,
		15080,
		11295,
		15085,
		10976,
		15082,
		10705,
		15073,
		10495,
		13880,
		14564,
		13898,
		14542,
		13977,
		14430,
		14158,
		14124,
		14393,
		13732,
		14556,
		13410,
		14702,
		12996,
		14814,
		12596,
		14891,
		12291,
		14937,
		11834,
		14957,
		11489,
		14958,
		11194,
		14943,
		10803,
		14921,
		10506,
		14893,
		10278,
		14858,
		9960,
		14484,
		14039,
		14487,
		14025,
		14499,
		13941,
		14524,
		13740,
		14574,
		13468,
		14654,
		13106,
		14743,
		12678,
		14818,
		12344,
		14867,
		11893,
		14889,
		11509,
		14893,
		11180,
		14881,
		10751,
		14852,
		10428,
		14812,
		10128,
		14765,
		9754,
		14712,
		9466,
		14764,
		13480,
		14764,
		13475,
		14766,
		13440,
		14766,
		13347,
		14769,
		13070,
		14786,
		12713,
		14816,
		12387,
		14844,
		11957,
		14860,
		11549,
		14868,
		11215,
		14855,
		10751,
		14825,
		10403,
		14782,
		10044,
		14729,
		9651,
		14666,
		9352,
		14599,
		9029,
		14967,
		12835,
		14966,
		12831,
		14963,
		12804,
		14954,
		12723,
		14936,
		12564,
		14917,
		12347,
		14900,
		11958,
		14886,
		11569,
		14878,
		11247,
		14859,
		10765,
		14828,
		10401,
		14784,
		10011,
		14727,
		9600,
		14660,
		9289,
		14586,
		8893,
		14508,
		8533,
		15111,
		12234,
		15110,
		12234,
		15104,
		12216,
		15092,
		12156,
		15067,
		12010,
		15028,
		11776,
		14981,
		11500,
		14942,
		11205,
		14902,
		10752,
		14861,
		10393,
		14812,
		9991,
		14752,
		9570,
		14682,
		9252,
		14603,
		8808,
		14519,
		8445,
		14431,
		8145,
		15209,
		11449,
		15208,
		11451,
		15202,
		11451,
		15190,
		11438,
		15163,
		11384,
		15117,
		11274,
		15055,
		10979,
		14994,
		10648,
		14932,
		10343,
		14871,
		9936,
		14803,
		9532,
		14729,
		9218,
		14645,
		8742,
		14556,
		8381,
		14461,
		8020,
		14365,
		7603,
		15273,
		10603,
		15272,
		10607,
		15267,
		10619,
		15256,
		10631,
		15231,
		10614,
		15182,
		10535,
		15118,
		10389,
		15042,
		10167,
		14963,
		9787,
		14883,
		9447,
		14800,
		9115,
		14710,
		8665,
		14615,
		8318,
		14514,
		7911,
		14411,
		7507,
		14279,
		7198,
		15314,
		9675,
		15313,
		9683,
		15309,
		9712,
		15298,
		9759,
		15277,
		9797,
		15229,
		9773,
		15166,
		9668,
		15084,
		9487,
		14995,
		9274,
		14898,
		8910,
		14800,
		8539,
		14697,
		8234,
		14590,
		7790,
		14479,
		7409,
		14367,
		7067,
		14178,
		6621,
		15337,
		8619,
		15337,
		8631,
		15333,
		8677,
		15325,
		8769,
		15305,
		8871,
		15264,
		8940,
		15202,
		8909,
		15119,
		8775,
		15022,
		8565,
		14916,
		8328,
		14804,
		8009,
		14688,
		7614,
		14569,
		7287,
		14448,
		6888,
		14321,
		6483,
		14088,
		6171,
		15350,
		7402,
		15350,
		7419,
		15347,
		7480,
		15340,
		7613,
		15322,
		7804,
		15287,
		7973,
		15229,
		8057,
		15148,
		8012,
		15046,
		7846,
		14933,
		7611,
		14810,
		7357,
		14682,
		7069,
		14552,
		6656,
		14421,
		6316,
		14251,
		5948,
		14007,
		5528,
		15356,
		5942,
		15356,
		5977,
		15353,
		6119,
		15348,
		6294,
		15332,
		6551,
		15302,
		6824,
		15249,
		7044,
		15171,
		7122,
		15070,
		7050,
		14949,
		6861,
		14818,
		6611,
		14679,
		6349,
		14538,
		6067,
		14398,
		5651,
		14189,
		5311,
		13935,
		4958,
		15359,
		4123,
		15359,
		4153,
		15356,
		4296,
		15353,
		4646,
		15338,
		5160,
		15311,
		5508,
		15263,
		5829,
		15188,
		6042,
		15088,
		6094,
		14966,
		6001,
		14826,
		5796,
		14678,
		5543,
		14527,
		5287,
		14377,
		4985,
		14133,
		4586,
		13869,
		4257,
		15360,
		1563,
		15360,
		1642,
		15358,
		2076,
		15354,
		2636,
		15341,
		3350,
		15317,
		4019,
		15273,
		4429,
		15203,
		4732,
		15105,
		4911,
		14981,
		4932,
		14836,
		4818,
		14679,
		4621,
		14517,
		4386,
		14359,
		4156,
		14083,
		3795,
		13808,
		3437,
		15360,
		122,
		15360,
		137,
		15358,
		285,
		15355,
		636,
		15344,
		1274,
		15322,
		2177,
		15281,
		2765,
		15215,
		3223,
		15120,
		3451,
		14995,
		3569,
		14846,
		3567,
		14681,
		3466,
		14511,
		3305,
		14344,
		3121,
		14037,
		2800,
		13753,
		2467,
		15360,
		0,
		15360,
		1,
		15359,
		21,
		15355,
		89,
		15346,
		253,
		15325,
		479,
		15287,
		796,
		15225,
		1148,
		15133,
		1492,
		15008,
		1749,
		14856,
		1882,
		14685,
		1886,
		14506,
		1783,
		14324,
		1608,
		13996,
		1398,
		13702,
		1183
	]), _u = null, vu = class {
		constructor(e = {}) {
			let { canvas: t = o(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: c = !1, premultipliedAlpha: d = !0, preserveDrawingBuffer: p = !1, powerPreference: m = "default", failIfMajorPerformanceCaveat: h = !1, reversedDepthBuffer: g = !1, outputBufferType: _ = Me } = e;
			this.isWebGLRenderer = !0;
			let v;
			if (n !== null) {
				if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
				v = n.getContextAttributes().alpha;
			} else v = a;
			let y = _, b = /* @__PURE__ */ new Set([
				$e,
				Qe,
				Xe
			]), x = /* @__PURE__ */ new Set([
				Me,
				Ie,
				Pe,
				Ve,
				ze,
				Be
			]), S = /* @__PURE__ */ new Uint32Array(4), C = /* @__PURE__ */ new Int32Array(4), w = new V(), T = null, E = null, D = [], O = [], k = null;
			this.domElement = t, this.debug = {
				checkShaderErrors: !0,
				onShaderError: null
			}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
			let A = this, ee = !1, te = null, ne = null, j = null, re = null;
			this._outputColorSpace = Gt;
			let ie = 0, ae = 0, M = null, oe = -1, se = null, ce = new Sn(), le = new Sn(), ue = null, de = new G(0), fe = 0, N = t.width, pe = t.height, me = 1, he = null, ge = null, _e = new Sn(0, 0, N, pe), ve = new Sn(0, 0, N, pe), ye = !1, be = new ia(), xe = !1, Se = !1, Ce = new W(), we = new V(), Te = new Sn(), Ee = {
				background: null,
				fog: null,
				environment: null,
				overrideMaterial: null,
				isScene: !0
			}, De = !1;
			function Oe() {
				return M === null ? me : 1;
			}
			let P = n;
			function ke(e, n) {
				return t.getContext(e, n);
			}
			try {
				let e = {
					alpha: !0,
					depth: r,
					stencil: i,
					antialias: c,
					premultipliedAlpha: d,
					preserveDrawingBuffer: p,
					powerPreference: m,
					failIfMajorPerformanceCaveat: h
				};
				if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r185"), t.addEventListener("webglcontextlost", st, !1), t.addEventListener("webglcontextrestored", ct, !1), t.addEventListener("webglcontextcreationerror", lt, !1), P === null) {
					let t = "webgl2";
					if (P = ke(t, e), P === null) throw ke(t) ? Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : Error("THREE.WebGLRenderer: Error creating WebGL context.");
				}
			} catch (e) {
				throw u("WebGLRenderer: " + e.message), e;
			}
			let F, Ae, I, L, R, z, Ne, Fe, Le, He, Ue, We, Ge, Ke, qe, Je, Ye, Ze, et, tt, nt, rt, it;
			function at() {
				F = new ys(P), F.init(), nt = new il(P, F), Ae = new cs(P, F, e, nt), I = new nl(P, F), Ae.reversedDepthBuffer && g && I.buffers.depth.setReversed(!0), ne = P.createFramebuffer(), j = P.createFramebuffer(), re = P.createFramebuffer(), L = new Ss(P), R = new Wc(), z = new rl(P, F, I, R, Ae, nt, L), Ne = new vs(A), Fe = new is(P), rt = new os(P, Fe), Le = new bs(P, Fe, L, rt), He = new ws(P, Le, Fe, rt, L), Ze = new Cs(P, Ae, z), qe = new ls(R), Ue = new Uc(A, Ne, F, Ae, rt, qe), We = new al(A, R), Ge = new Jc(), Ke = new el(F), Ye = new as(A, Ne, I, He, v, d), Je = new tl(A, He, Ae), it = new ol(P, L, Ae, I), et = new ss(P, F, L), tt = new xs(P, F, L), L.programs = Ue.programs, A.capabilities = Ae, A.extensions = F, A.properties = R, A.renderLists = Ge, A.shadowMap = Je, A.state = I, A.info = L;
			}
			at(), y !== 1009 && (k = new Ts(y, t.width, t.height, c, r, i));
			let ot = new pu(A, P);
			this.xr = ot, this.getContext = function() {
				return P;
			}, this.getContextAttributes = function() {
				return P.getContextAttributes();
			}, this.forceContextLoss = function() {
				let e = F.get("WEBGL_lose_context");
				e && e.loseContext();
			}, this.forceContextRestore = function() {
				let e = F.get("WEBGL_lose_context");
				e && e.restoreContext();
			}, this.getPixelRatio = function() {
				return me;
			}, this.setPixelRatio = function(e) {
				e !== void 0 && (me = e, this.setSize(N, pe, !1));
			}, this.getSize = function(e) {
				return e.set(N, pe);
			}, this.setSize = function(e, n, r = !0) {
				if (ot.isPresenting) {
					l("WebGLRenderer: Can't change size while VR device is presenting.");
					return;
				}
				N = e, pe = n, t.width = Math.floor(e * me), t.height = Math.floor(n * me), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), k !== null && k.setSize(t.width, t.height), this.setViewport(0, 0, e, n);
			}, this.getDrawingBufferSize = function(e) {
				return e.set(N * me, pe * me).floor();
			}, this.setDrawingBufferSize = function(e, n, r) {
				N = e, pe = n, me = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
			}, this.setEffects = function(e) {
				if (y === 1009) {
					u("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
					return;
				}
				if (e) {
					for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
						l("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				k.setEffects(e || []);
			}, this.getCurrentViewport = function(e) {
				return e.copy(ce);
			}, this.getViewport = function(e) {
				return e.copy(_e);
			}, this.setViewport = function(e, t, n, r) {
				e.isVector4 ? _e.set(e.x, e.y, e.z, e.w) : _e.set(e, t, n, r), I.viewport(ce.copy(_e).multiplyScalar(me).round());
			}, this.getScissor = function(e) {
				return e.copy(ve);
			}, this.setScissor = function(e, t, n, r) {
				e.isVector4 ? ve.set(e.x, e.y, e.z, e.w) : ve.set(e, t, n, r), I.scissor(le.copy(ve).multiplyScalar(me).round());
			}, this.getScissorTest = function() {
				return ye;
			}, this.setScissorTest = function(e) {
				I.setScissorTest(ye = e);
			}, this.setOpaqueSort = function(e) {
				he = e;
			}, this.setTransparentSort = function(e) {
				ge = e;
			}, this.getClearColor = function(e) {
				return e.copy(Ye.getClearColor());
			}, this.setClearColor = function() {
				Ye.setClearColor(...arguments);
			}, this.getClearAlpha = function() {
				return Ye.getClearAlpha();
			}, this.setClearAlpha = function() {
				Ye.setClearAlpha(...arguments);
			}, this.clear = function(e = !0, t = !0, n = !0) {
				let r = 0;
				if (e) {
					let e = !1;
					if (M !== null) {
						let t = M.texture.format;
						e = b.has(t);
					}
					if (e) {
						let e = M.texture.type, t = x.has(e), n = Ye.getClearColor(), r = Ye.getClearAlpha(), i = n.r, a = n.g, o = n.b;
						t ? (S[0] = i, S[1] = a, S[2] = o, S[3] = r, P.clearBufferuiv(P.COLOR, 0, S)) : (C[0] = i, C[1] = a, C[2] = o, C[3] = r, P.clearBufferiv(P.COLOR, 0, C));
					} else r |= P.COLOR_BUFFER_BIT;
				}
				t && (r |= P.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && P.clear(r);
			}, this.clearColor = function() {
				this.clear(!0, !1, !1);
			}, this.clearDepth = function() {
				this.clear(!1, !0, !1);
			}, this.clearStencil = function() {
				this.clear(!1, !1, !0);
			}, this.setNodesHandler = function(e) {
				e.setRenderer(this), te = e;
			}, this.dispose = function() {
				t.removeEventListener("webglcontextlost", st, !1), t.removeEventListener("webglcontextrestored", ct, !1), t.removeEventListener("webglcontextcreationerror", lt, !1), Ye.dispose(), Ge.dispose(), Ke.dispose(), R.dispose(), Ne.dispose(), He.dispose(), rt.dispose(), it.dispose(), Ue.dispose(), ot.dispose(), ot.removeEventListener("sessionstart", gt), ot.removeEventListener("sessionend", _t), vt.stop();
			};
			function st(e) {
				e.preventDefault(), s("WebGLRenderer: Context Lost."), ee = !0;
			}
			function ct() {
				s("WebGLRenderer: Context Restored."), ee = !1;
				let e = L.autoReset, t = Je.enabled, n = Je.autoUpdate, r = Je.needsUpdate, i = Je.type;
				at(), L.autoReset = e, Je.enabled = t, Je.autoUpdate = n, Je.needsUpdate = r, Je.type = i;
			}
			function lt(e) {
				u("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
			}
			function ut(e) {
				let t = e.target;
				t.removeEventListener("dispose", ut), dt(t);
			}
			function dt(e) {
				ft(e), R.remove(e);
			}
			function ft(e) {
				let t = R.get(e).programs;
				t !== void 0 && (t.forEach(function(e) {
					Ue.releaseProgram(e);
				}), e.isShaderMaterial && Ue.releaseShaderCache(e));
			}
			this.renderBufferDirect = function(e, t, n, r, i, a) {
				t === null && (t = Ee);
				let o = i.isMesh && i.matrixWorld.determinantAffine() < 0, s = Ot(e, t, n, r, i);
				I.setMaterial(r, o);
				let c = n.index, l = 1;
				if (r.wireframe === !0) {
					if (c = Le.getWireframeAttribute(n), c === void 0) return;
					l = 2;
				}
				let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
				a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
				let m = p - f;
				if (m < 0 || m === Infinity) return;
				rt.setup(i, r, s, n, c);
				let h, g = et;
				if (c !== null && (h = Fe.get(c), g = tt, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (I.setLineWidth(r.wireframeLinewidth * Oe()), g.setMode(P.LINES)) : g.setMode(P.TRIANGLES);
				else if (i.isLine) {
					let e = r.linewidth;
					e === void 0 && (e = 1), I.setLineWidth(e * Oe()), i.isLineSegments ? g.setMode(P.LINES) : i.isLineLoop ? g.setMode(P.LINE_LOOP) : g.setMode(P.LINE_STRIP);
				} else i.isPoints ? g.setMode(P.POINTS) : i.isSprite && g.setMode(P.TRIANGLES);
				if (i.isBatchedMesh) {
					if (F.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
					else {
						let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? Fe.get(c).bytesPerElement : 1, o = R.get(r).currentProgram.getUniforms();
						for (let r = 0; r < n; r++) o.setValue(P, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
					}
				} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
				else if (n.isInstancedBufferGeometry) {
					let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
					g.renderInstances(f, m, t);
				} else g.render(f, m);
			};
			function pt(e, t, n) {
				e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, wt(e, t, n), e.side = 0, e.needsUpdate = !0, wt(e, t, n), e.side = 2) : wt(e, t, n);
			}
			this.compile = function(e, t, n = null) {
				n === null && (n = e), E = Ke.get(n), E.init(t), O.push(E), n.traverseVisible(function(e) {
					e.isLight && e.layers.test(t.layers) && (E.pushLight(e), e.castShadow && E.pushShadow(e));
				}), e !== n && e.traverseVisible(function(e) {
					e.isLight && e.layers.test(t.layers) && (E.pushLight(e), e.castShadow && E.pushShadow(e));
				}), E.setupLights();
				let r = /* @__PURE__ */ new Set();
				return e.traverse(function(e) {
					if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
					let t = e.material;
					if (t) {
						if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
							let a = t[i];
							pt(a, n, e), r.add(a);
						}
						else pt(t, n, e), r.add(t);
					}
				}), E = O.pop(), r;
			}, this.compileAsync = function(e, t, n = null) {
				let r = this.compile(e, t, n);
				return new Promise((t) => {
					function n() {
						if (r.forEach(function(e) {
							R.get(e).currentProgram.isReady() && r.delete(e);
						}), r.size === 0) {
							t(e);
							return;
						}
						setTimeout(n, 10);
					}
					F.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
				});
			};
			let mt = null;
			function ht(e) {
				mt && mt(e);
			}
			function gt() {
				vt.stop();
			}
			function _t() {
				vt.start();
			}
			let vt = new rs();
			vt.setAnimationLoop(ht), typeof self < "u" && vt.setContext(self), this.setAnimationLoop = function(e) {
				mt = e, ot.setAnimationLoop(e), e === null ? vt.stop() : vt.start();
			}, ot.addEventListener("sessionstart", gt), ot.addEventListener("sessionend", _t), this.render = function(e, t) {
				if (t !== void 0 && t.isCamera !== !0) {
					u("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
					return;
				}
				if (ee === !0) return;
				te !== null && te.renderStart(e, t);
				let n = ot.enabled === !0 && ot.isPresenting === !0, r = k !== null && (M === null || n) && k.begin(A, M);
				if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), ot.enabled === !0 && ot.isPresenting === !0 && (k === null || k.isCompositing() === !1) && (ot.cameraAutoUpdate === !0 && ot.updateCamera(t), t = ot.getCamera()), e.isScene === !0 && e.onBeforeRender(A, e, t, M), E = Ke.get(e, O.length), E.init(t), E.state.textureUnits = z.getTextureUnits(), O.push(E), Ce.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), be.setFromProjectionMatrix(Ce, Qt, t.reversedDepth), Se = this.localClippingEnabled, xe = qe.init(this.clippingPlanes, Se), T = Ge.get(e, D.length), T.init(), D.push(T), ot.enabled === !0 && ot.isPresenting === !0) {
					let e = A.xr.getDepthSensingMesh();
					e !== null && yt(e, t, -Infinity, A.sortObjects);
				}
				yt(e, t, 0, A.sortObjects), T.finish(), A.sortObjects === !0 && T.sort(he, ge, t.reversedDepth), De = ot.enabled === !1 || ot.isPresenting === !1 || ot.hasDepthSensing() === !1, De && Ye.addToRenderList(T, e), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), xe === !0 && qe.beginShadows();
				let i = E.state.shadowsArray;
				if (Je.render(i, e, t), xe === !0 && qe.endShadows(), (r && k.hasRenderPass()) === !1) {
					let n = T.opaque, r = T.transmissive;
					if (E.setupLights(), t.isArrayCamera) {
						let i = t.cameras;
						if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
							let a = i[t];
							xt(n, r, e, a);
						}
						De && Ye.render(e);
						for (let t = 0, n = i.length; t < n; t++) {
							let n = i[t];
							bt(T, e, n, n.viewport);
						}
					} else r.length > 0 && xt(n, r, e, t), De && Ye.render(e), bt(T, e, t);
				}
				M !== null && ae === 0 && (z.updateMultisampleRenderTarget(M), z.updateRenderTargetMipmap(M)), r && k.end(A), e.isScene === !0 && e.onAfterRender(A, e, t), rt.resetDefaultState(), oe = -1, se = null, O.pop(), O.length > 0 ? (E = O[O.length - 1], z.setTextureUnits(E.state.textureUnits), xe === !0 && qe.setGlobalState(A.clippingPlanes, E.state.camera)) : E = null, D.pop(), T = D.length > 0 ? D[D.length - 1] : null, te !== null && te.renderEnd();
			};
			function yt(e, t, n, r) {
				if (e.visible === !1) return;
				if (e.layers.test(t.layers)) {
					if (e.isGroup) n = e.renderOrder;
					else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
					else if (e.isLightProbeGrid) E.pushLightProbeGrid(e);
					else if (e.isLight) E.pushLight(e), e.castShadow && E.pushShadow(e);
					else if (e.isSprite) {
						if (!e.frustumCulled || be.intersectsSprite(e)) {
							r && Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);
							let t = He.update(e), i = e.material;
							i.visible && T.push(e, t, i, n, Te.z, null);
						}
					} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || be.intersectsObject(e))) {
						let t = He.update(e), i = e.material;
						if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), Te.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), Te.copy(e.boundingSphere.center)), Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)), Array.isArray(i)) {
							let r = t.groups;
							for (let a = 0, o = r.length; a < o; a++) {
								let o = r[a], s = i[o.materialIndex];
								s && s.visible && T.push(e, t, s, n, Te.z, o);
							}
						} else i.visible && T.push(e, t, i, n, Te.z, null);
					}
				}
				let i = e.children;
				for (let e = 0, a = i.length; e < a; e++) yt(i[e], t, n, r);
			}
			function bt(e, t, n, r) {
				let { opaque: i, transmissive: a, transparent: o } = e;
				E.setupLightsView(n), xe === !0 && qe.setGlobalState(A.clippingPlanes, n), r && I.viewport(ce.copy(r)), i.length > 0 && St(i, t, n), a.length > 0 && St(a, t, n), o.length > 0 && St(o, t, n), I.buffers.depth.setTest(!0), I.buffers.depth.setMask(!0), I.buffers.color.setMask(!0), I.setPolygonOffset(!1);
			}
			function xt(e, t, n, r) {
				if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
				if (E.state.transmissionRenderTarget[r.id] === void 0) {
					let e = F.has("EXT_color_buffer_half_float") || F.has("EXT_color_buffer_float");
					E.state.transmissionRenderTarget[r.id] = new wn(1, 1, {
						generateMipmaps: !0,
						type: e ? Re : Me,
						minFilter: je,
						samples: Math.max(4, Ae.samples),
						stencilBuffer: i,
						resolveDepthBuffer: !1,
						resolveStencilBuffer: !1,
						colorSpace: U.workingColorSpace
					});
				}
				let a = E.state.transmissionRenderTarget[r.id], o = r.viewport || ce;
				a.setSize(o.z * A.transmissionResolutionScale, o.w * A.transmissionResolutionScale);
				let s = A.getRenderTarget(), c = A.getActiveCubeFace(), l = A.getActiveMipmapLevel();
				A.setRenderTarget(a), A.getClearColor(de), fe = A.getClearAlpha(), fe < 1 && A.setClearColor(16777215, .5), A.clear(), De && Ye.render(n);
				let u = A.toneMapping;
				A.toneMapping = 0;
				let d = r.viewport;
				if (r.viewport !== void 0 && (r.viewport = void 0), E.setupLightsView(r), xe === !0 && qe.setGlobalState(A.clippingPlanes, r), St(e, n, r), z.updateMultisampleRenderTarget(a), z.updateRenderTargetMipmap(a), F.has("WEBGL_multisampled_render_to_texture") === !1) {
					let e = !1;
					for (let i = 0, a = t.length; i < a; i++) {
						let { object: a, geometry: o, material: s, group: c } = t[i];
						if (s.side === 2 && a.layers.test(r.layers)) {
							let t = s.side;
							s.side = 1, s.needsUpdate = !0, Ct(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
						}
					}
					e === !0 && (z.updateMultisampleRenderTarget(a), z.updateRenderTargetMipmap(a));
				}
				A.setRenderTarget(s, c, l), A.setClearColor(de, fe), d !== void 0 && (r.viewport = d), A.toneMapping = u;
			}
			function St(e, t, n) {
				let r = t.isScene === !0 ? t.overrideMaterial : null;
				for (let i = 0, a = e.length; i < a; i++) {
					let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
					l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && Ct(o, t, n, s, l, c);
				}
			}
			function Ct(e, t, n, r, i, a) {
				e.onBeforeRender(A, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(A, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, A.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, A.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : A.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(A, t, n, r, i, a);
			}
			function wt(e, t, n) {
				t.isScene !== !0 && (t = Ee);
				let r = R.get(e), i = E.state.lights, a = E.state.shadowsArray, o = i.state.version, s = Ue.getParameters(e, i.state, a, t, n, E.state.lightProbeGridArray), c = Ue.getProgramCacheKey(s), l = r.programs;
				r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
				let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
				r.envMap = Ne.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", ut), l = /* @__PURE__ */ new Map(), r.programs = l);
				let d = l.get(c);
				if (d !== void 0) {
					if (r.currentProgram === d && r.lightsStateVersion === o) return Et(e, s), d;
				} else s.uniforms = Ue.getUniforms(e), te !== null && e.isNodeMaterial && te.build(e, n, s), e.onBeforeCompile(s, A), d = Ue.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
				let f = r.uniforms;
				return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = qe.uniform), Et(e, s), r.needsLights = At(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.lightProbeGrid = E.state.lightProbeGridArray.length > 0, r.currentProgram = d, r.uniformsList = null, d;
			}
			function Tt(e) {
				if (e.uniformsList === null) {
					let t = e.currentProgram.getUniforms();
					e.uniformsList = Bl.seqWithValue(t.seq, e.uniforms);
				}
				return e.uniformsList;
			}
			function Et(e, t) {
				let n = R.get(e);
				n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
			}
			function Dt(e, t) {
				if (e.length === 0) return null;
				if (e.length === 1) return e[0].texture === null ? null : e[0];
				w.setFromMatrixPosition(t.matrixWorld);
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					if (n.texture !== null && n.boundingBox.containsPoint(w)) return n;
				}
				return null;
			}
			function Ot(e, t, n, r, i) {
				t.isScene !== !0 && (t = Ee), z.resetTextureUnits();
				let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = M === null ? A.outputColorSpace : M.isXRRenderTarget === !0 ? M.texture.colorSpace : U.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Ne.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
				r.toneMapped && (M === null || M.isXRRenderTarget === !0) && (h = A.toneMapping);
				let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = R.get(r), y = E.state.lights;
				if (xe === !0 && (Se === !0 || e !== se)) {
					let t = e === se && r.id === oe;
					qe.setState(r, e, t);
				}
				let b = !1;
				r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version ? b = !0 : v.outputColorSpace === s ? i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i.colorTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i.colorTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? b = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== qe.numPlanes || v.numIntersection !== qe.numIntersection) ? b = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.toneMapping === h && v.morphTargetsCount === _ ? !!v.lightProbeGrid != E.state.lightProbeGridArray.length > 0 && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, v.__version = r.version);
				let x = v.currentProgram;
				b === !0 && (x = wt(r, t, i), te && r.isNodeMaterial && te.onUpdateProgram(r, x, v));
				let S = !1, C = !1, w = !1, T = x.getUniforms(), D = v.uniforms;
				if (I.useProgram(x.program) && (S = !0, C = !0, w = !0), r.id !== oe && (oe = r.id, C = !0), v.needsLights) {
					let e = Dt(E.state.lightProbeGridArray, i);
					v.lightProbeGrid !== e && (v.lightProbeGrid = e, C = !0);
				}
				if (S || se !== e) {
					I.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), T.setValue(P, "projectionMatrix", e.projectionMatrix), T.setValue(P, "viewMatrix", e.matrixWorldInverse);
					let t = T.map.cameraPosition;
					t !== void 0 && t.setValue(P, we.setFromMatrixPosition(e.matrixWorld)), Ae.logarithmicDepthBuffer && T.setValue(P, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && T.setValue(P, "isOrthographic", e.isOrthographicCamera === !0), se !== e && (se = e, C = !0, w = !0);
				}
				if (v.needsLights && (y.state.directionalShadowMap.length > 0 && T.setValue(P, "directionalShadowMap", y.state.directionalShadowMap, z), y.state.spotShadowMap.length > 0 && T.setValue(P, "spotShadowMap", y.state.spotShadowMap, z), y.state.pointShadowMap.length > 0 && T.setValue(P, "pointShadowMap", y.state.pointShadowMap, z)), i.isSkinnedMesh) {
					T.setOptional(P, i, "bindMatrix"), T.setOptional(P, i, "bindMatrixInverse");
					let e = i.skeleton;
					e && (e.boneTexture === null && e.computeBoneTexture(), T.setValue(P, "boneTexture", e.boneTexture, z));
				}
				i.isBatchedMesh && (T.setOptional(P, i, "batchingTexture"), T.setValue(P, "batchingTexture", i._matricesTexture, z), T.setOptional(P, i, "batchingIdTexture"), T.setValue(P, "batchingIdTexture", i._indirectTexture, z), T.setOptional(P, i, "batchingColorTexture"), i._colorsTexture !== null && T.setValue(P, "batchingColorTexture", i._colorsTexture, z));
				let O = n.morphAttributes;
				if ((O.position !== void 0 || O.normal !== void 0 || O.color !== void 0) && Ze.update(i, n, x), (C || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, T.setValue(P, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (D.envMapIntensity.value = t.environmentIntensity), D.dfgLUT !== void 0 && (D.dfgLUT.value = sl()), C) {
					if (T.setValue(P, "toneMappingExposure", A.toneMappingExposure), v.needsLights && kt(D, w), a && r.fog === !0 && We.refreshFogUniforms(D, a), We.refreshMaterialUniforms(D, r, me, pe, E.state.transmissionRenderTarget[e.id]), v.needsLights && v.lightProbeGrid) {
						let e = v.lightProbeGrid;
						D.probesSH.value = e.texture, D.probesMin.value.copy(e.boundingBox.min), D.probesMax.value.copy(e.boundingBox.max), D.probesResolution.value.copy(e.resolution);
					}
					Bl.upload(P, Tt(v), D, z);
				}
				if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (Bl.upload(P, Tt(v), D, z), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && T.setValue(P, "center", i.center), T.setValue(P, "modelViewMatrix", i.modelViewMatrix), T.setValue(P, "normalMatrix", i.normalMatrix), T.setValue(P, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
					let e = r.uniformsGroups;
					for (let t = 0, n = e.length; t < n; t++) {
						let n = e[t];
						it.update(n, x), it.bind(n, x);
					}
				}
				return x;
			}
			function kt(e, t) {
				e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
			}
			function At(e) {
				return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
			}
			this.getActiveCubeFace = function() {
				return ie;
			}, this.getActiveMipmapLevel = function() {
				return ae;
			}, this.getRenderTarget = function() {
				return M;
			}, this.setRenderTargetTextures = function(e, t, n) {
				let r = R.get(e);
				r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), R.get(e.texture).__webglTexture = t, R.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
			}, this.setRenderTargetFramebuffer = function(e, t) {
				let n = R.get(e);
				n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
			}, this.setRenderTarget = function(e, t = 0, n = 0) {
				M = e, ie = t, ae = n;
				let r = null, i = !1, a = !1;
				if (e) {
					let o = R.get(e);
					if (o.__useDefaultFramebuffer !== void 0) {
						I.bindFramebuffer(P.FRAMEBUFFER, o.__webglFramebuffer), ce.copy(e.viewport), le.copy(e.scissor), ue = e.scissorTest, I.viewport(ce), I.scissor(le), I.setScissorTest(ue), oe = -1;
						return;
					}
					if (o.__webglFramebuffer === void 0) z.setupRenderTarget(e);
					else if (o.__hasExternalTextures) z.rebindTextures(e, R.get(e.texture).__webglTexture, R.get(e.depthTexture).__webglTexture);
					else if (e.depthBuffer) {
						let t = e.depthTexture;
						if (o.__boundDepthTexture !== t) {
							if (t !== null && R.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
							z.setupDepthRenderbuffer(e);
						}
					}
					let s = e.texture;
					(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
					let c = R.get(e).__webglFramebuffer;
					e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && z.useMultisampledRTT(e) === !1 ? R.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, ce.copy(e.viewport), le.copy(e.scissor), ue = e.scissorTest;
				} else ce.copy(_e).multiplyScalar(me).floor(), le.copy(ve).multiplyScalar(me).floor(), ue = ye;
				if (n !== 0 && (r = ne), I.bindFramebuffer(P.FRAMEBUFFER, r) && I.drawBuffers(e, r), I.viewport(ce), I.scissor(le), I.setScissorTest(ue), i) {
					let r = R.get(e.texture);
					P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
				} else if (a) {
					let r = t;
					for (let t = 0; t < e.textures.length; t++) {
						let i = R.get(e.textures[t]);
						P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
					}
				} else if (e !== null && n !== 0) {
					let t = R.get(e.texture);
					P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, t.__webglTexture, n);
				}
				oe = -1;
			}, this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
				if (!(e && e.isWebGLRenderTarget)) {
					u("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
					return;
				}
				let c = R.get(e).__webglFramebuffer;
				if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
					I.bindFramebuffer(P.FRAMEBUFFER, c);
					try {
						let o = e.textures[s], c = o.format, l = o.type;
						if (e.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + s), !Ae.textureFormatReadable(c)) {
							u("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
							return;
						}
						if (!Ae.textureTypeReadable(l)) {
							u("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
							return;
						}
						t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && P.readPixels(t, n, r, i, nt.convert(c), nt.convert(l), a);
					} finally {
						let e = M === null ? null : R.get(M).__webglFramebuffer;
						I.bindFramebuffer(P.FRAMEBUFFER, e);
					}
				}
			}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
				if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				let c = R.get(e).__webglFramebuffer;
				if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
					if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
						I.bindFramebuffer(P.FRAMEBUFFER, c);
						let o = e.textures[s], l = o.format, u = o.type;
						if (e.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + s), !Ae.textureFormatReadable(l)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
						if (!Ae.textureTypeReadable(u)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
						let d = P.createBuffer();
						P.bindBuffer(P.PIXEL_PACK_BUFFER, d), P.bufferData(P.PIXEL_PACK_BUFFER, a.byteLength, P.STREAM_READ), P.readPixels(t, n, r, i, nt.convert(l), nt.convert(u), 0);
						let p = M === null ? null : R.get(M).__webglFramebuffer;
						I.bindFramebuffer(P.FRAMEBUFFER, p);
						let m = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
						return P.flush(), await f(P, m, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, d), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, a), P.deleteBuffer(d), P.deleteSync(m), a;
					}
					throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
				}
			}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
				let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
				z.setTexture2D(e, 0), P.copyTexSubImage2D(P.TEXTURE_2D, n, 0, 0, o, s, i, a), I.unbindTexture();
			}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
				let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
				if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
				else {
					let t = 2 ** -i;
					o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
				}
				r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
				let g = nt.convert(t.format), _ = nt.convert(t.type), v;
				t.isData3DTexture ? (z.setTexture3D(t, 0), v = P.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (z.setTexture2DArray(t, 0), v = P.TEXTURE_2D_ARRAY) : (z.setTexture2D(t, 0), v = P.TEXTURE_2D), I.activeTexture(P.TEXTURE0), I.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, t.flipY), I.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), I.pixelStorei(P.UNPACK_ALIGNMENT, t.unpackAlignment);
				let y = I.getParameter(P.UNPACK_ROW_LENGTH), b = I.getParameter(P.UNPACK_IMAGE_HEIGHT), x = I.getParameter(P.UNPACK_SKIP_PIXELS), S = I.getParameter(P.UNPACK_SKIP_ROWS), C = I.getParameter(P.UNPACK_SKIP_IMAGES);
				I.pixelStorei(P.UNPACK_ROW_LENGTH, h.width), I.pixelStorei(P.UNPACK_IMAGE_HEIGHT, h.height), I.pixelStorei(P.UNPACK_SKIP_PIXELS, l), I.pixelStorei(P.UNPACK_SKIP_ROWS, u), I.pixelStorei(P.UNPACK_SKIP_IMAGES, d);
				let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
				if (e.isDepthTexture) {
					let n = R.get(e), r = R.get(t), h = R.get(n.__renderTarget), g = R.get(r.__renderTarget);
					I.bindFramebuffer(P.READ_FRAMEBUFFER, h.__webglFramebuffer), I.bindFramebuffer(P.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
					for (let n = 0; n < c; n++) w && (P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, R.get(e).__webglTexture, i, d + n), P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, R.get(t).__webglTexture, a, m + n)), P.blitFramebuffer(l, u, o, s, f, p, o, s, P.DEPTH_BUFFER_BIT, P.NEAREST);
					I.bindFramebuffer(P.READ_FRAMEBUFFER, null), I.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
				} else if (i !== 0 || e.isRenderTargetTexture || R.has(e)) {
					let n = R.get(e), r = R.get(t);
					I.bindFramebuffer(P.READ_FRAMEBUFFER, j), I.bindFramebuffer(P.DRAW_FRAMEBUFFER, re);
					for (let e = 0; e < c; e++) w ? P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : P.framebufferTexture2D(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, n.__webglTexture, i), T ? P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : P.framebufferTexture2D(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? P.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : P.copyTexSubImage2D(v, a, f, p, l, u, o, s) : P.blitFramebuffer(l, u, o, s, f, p, o, s, P.COLOR_BUFFER_BIT, P.NEAREST);
					I.bindFramebuffer(P.READ_FRAMEBUFFER, null), I.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
				} else T ? e.isDataTexture || e.isData3DTexture ? P.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? P.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : P.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : P.texSubImage2D(P.TEXTURE_2D, a, f, p, o, s, g, _, h);
				I.pixelStorei(P.UNPACK_ROW_LENGTH, y), I.pixelStorei(P.UNPACK_IMAGE_HEIGHT, b), I.pixelStorei(P.UNPACK_SKIP_PIXELS, x), I.pixelStorei(P.UNPACK_SKIP_ROWS, S), I.pixelStorei(P.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps && P.generateMipmap(v), I.unbindTexture();
			}, this.initRenderTarget = function(e) {
				R.get(e).__webglFramebuffer === void 0 && z.setupRenderTarget(e);
			}, this.initTexture = function(e) {
				e.isCubeTexture ? z.setTextureCube(e, 0) : e.isData3DTexture ? z.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? z.setTexture2DArray(e, 0) : z.setTexture2D(e, 0), I.unbindTexture();
			}, this.resetState = function() {
				ie = 0, ae = 0, M = null, I.reset(), rt.reset();
			}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
		}
		get coordinateSystem() {
			return Qt;
		}
		get outputColorSpace() {
			return this._outputColorSpace;
		}
		set outputColorSpace(e) {
			this._outputColorSpace = e;
			let t = this.getContext();
			t.drawingBufferColorSpace = U._getDrawingBufferColorSpace(e), t.unpackColorSpace = U._getUnpackColorSpace();
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js
function bu(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function xu(e, t = "|") {
	return e.map((e) => zu(e)).join(t);
}
function Su(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function Cu(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function wu(e) {
	return e == null;
}
function Tu(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Eu(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function Du(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Ou(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function ku(e) {
	return JSON.stringify(e);
}
function Au(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var ju = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Mu(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var Nu = /* @__PURE__*/ Cu(() => {
	if (wd.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function Pu(e) {
	if (Mu(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return Mu(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function Fu(e) {
	return Pu(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var Iu = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function Lu(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ru(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function J(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function zu(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Bu(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var Vu = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Hu(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return Ru(e, Ou(e._zod.def, {
		get shape() {
			let e = {};
			for (let r of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, r)) throw Error(`Unrecognized key: "${String(r)}"`);
				t[r] && Du(e, r, n.shape[r]);
			}
			return Du(this, "shape", e), e;
		},
		checks: []
	}));
}
function Uu(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return Ru(e, Ou(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, e)) throw Error(`Unrecognized key: "${String(e)}"`);
				t[e] && delete r[e];
			}
			return Du(this, "shape", r), r;
		},
		checks: []
	}));
}
function Wu(e, t) {
	if (!Pu(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return Ru(e, Ou(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return Du(this, "shape", n), n;
	} }));
}
function Gu(e, t) {
	if (!Pu(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return Ru(e, Ou(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return Du(this, "shape", n), n;
	} }));
}
function Ku(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return Ru(e, Ou(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return Du(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function qu(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	return Ru(t, Ou(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t of Reflect.ownKeys(n)) {
				if (!Object.prototype.hasOwnProperty.call(r, t)) throw Error(`Unrecognized key: "${String(t)}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t of Reflect.ownKeys(r)) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return Du(this, "shape", i), i;
		},
		checks: []
	}));
}
function Ju(e, t, n) {
	return Ru(t, Ou(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t of Reflect.ownKeys(n)) {
			if (!Object.prototype.hasOwnProperty.call(i, t)) throw Error(`Unrecognized key: "${String(t)}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t of Reflect.ownKeys(r)) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return Du(this, "shape", i), i;
	} }));
}
function Yu(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Xu(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function Zu(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Qu(e) {
	return typeof e == "string" ? e : e?.message;
}
function $u(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function ed(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : Qu(e.inst?._zod.def?.error?.(e)) ?? Qu(a?.(e)) ?? Qu(t?.error?.(e)) ?? Qu(n.customError?.(e)) ?? Qu(n.localeError?.(e)) ?? "Invalid input", { inst: s, schema: c, continue: l, input: u, ...d } = e;
	return d.path ??= [], d.message = o, t?.reportInput && (d.input = u), d;
}
var td = /[\uD800-\uDBFF]/;
function nd(e) {
	let t = e.length;
	if (!td.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function rd(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function id(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function ad(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function od(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : ld(e, n, r.value);
	}
}
function sd(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function cd(e, t, n) {
	return sd(e, t, n, !1);
}
function ld(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : sd(this, t, n.bind(this));
		},
		set(e) {
			sd(this, t, e);
		}
	});
}
function ud(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var dd, fd = !1, pd = {
	configurable: !0,
	get() {
		fd = !0;
	}
};
function md(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && dd !== e._zod) {
		dd = void 0;
		return;
	}
	dd = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, pd);
			let e = fd;
			fd = !1;
			try {
				let r = n(this);
				return fd ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), fd ||= e, r;
			} catch (n) {
				throw delete this[t], fd ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function hd(e, t, n, r) {
	let i = ud(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
var gd = "~constantCatch";
function _d(e) {
	let t = () => e;
	return t[gd] = !0, t;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js
var vd, yd = {
	value: void 0,
	enumerable: !1
}, bd = "captureStackTrace" in Error ? Error : null;
function xd(e) {
	let t = bd;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return bd = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function Y(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			yd.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", yd);
			} finally {
				yd.value = void 0;
			}
		}
		if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), od(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? xd(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var Sd = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Cd = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(vd = globalThis).__zod_globalConfig ?? (vd.__zod_globalConfig = {});
var wd = globalThis.__zod_globalConfig;
function Td(e) {
	return e && Object.assign(wd, e), wd;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js
function Ed() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Su, 2), e.message;
}
function Dd(e) {
	this._zod.message = e;
}
var Od = {
	get: Ed,
	set: Dd,
	enumerable: !0,
	configurable: !0
}, kd = {
	value: void 0,
	enumerable: !1
}, Ad = {
	value: void 0,
	enumerable: !1
}, jd = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Md = (e, t) => {
	e.name = "$ZodError", kd.value = e._zod, Object.defineProperty(e, "_zod", kd), Ad.value = t, Object.defineProperty(e, "issues", Ad), kd.value = void 0, Ad.value = void 0, Object.defineProperty(e, "message", Od);
	let n = Object.getPrototypeOf(e);
	jd.has(n) || (jd.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
}, Nd = Y("$ZodError", Md), Pd = Y("$ZodError", Md, void 0, { Parent: Error });
function Fd(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Id(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Fd(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Ld(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
function Rd(e) {
	let t = [], n = e.map((e) => typeof e == "object" ? e.key : e);
	for (let e of n) typeof e == "number" ? t.push(`[${e}]`) : typeof e == "symbol" ? t.push(`[${JSON.stringify(String(e))}]`) : /[^\w$]/.test(e) ? t.push(`[${JSON.stringify(e)}]`) : (t.length && t.push("."), t.push(e));
	return t.join("");
}
function zd(e) {
	let t = [], n = [...e.issues].sort((e, t) => (e.path ?? []).length - (t.path ?? []).length);
	for (let e of n) t.push(`✖ ${e.message}`), e.path?.length && t.push(`  → at ${Rd(e.path)}`);
	return t.join("\n");
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js
function Bd(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var Vd = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new Sd();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => ed(e, o, Td())));
			throw ju(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Hd = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => ed(e, o, Td())));
			throw ju(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Ud = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new Sd();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? Nd)(a.issues.map((e) => ed(e, i, Td())))
	} : {
		success: !0,
		data: a.value
	};
}, Wd = /* @__PURE__*/ Ud(Pd), Gd = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => ed(e, i, Td())))
	} : {
		success: !0,
		data: a.value
	};
}, Kd = /* @__PURE__*/ Gd(Pd), qd = (e) => {
	let t = Vd(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, Bd(n, a));
	};
	return n;
}, Jd = (e) => {
	let t = Vd(e), n = (e, r, i, a) => t(e, r, i, Bd(n, a));
	return n;
}, Yd = (e) => {
	let t = Hd(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, Bd(n, a));
	};
	return n;
}, Xd = (e) => {
	let t = Hd(e), n = async (e, r, i, a) => await t(e, r, i, Bd(n, a));
	return n;
}, Zd = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Ud(e)(t, n, i);
}, Qd = (e) => (t, n, r) => Ud(e)(t, n, r), $d = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Gd(e)(t, n, i);
}, ef = (e) => async (t, n, r) => Gd(e)(t, n, r), tf = /^[cC][0-9a-z]{6,}$/, nf = /^[0-9a-z]+$/, rf = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, af = /^[0-9a-vA-V]{20}$/, of = /^[A-Za-z0-9]{27}$/, sf = /^[a-zA-Z0-9_-]{21}$/;
function cf(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var lf = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, uf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, df = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ff = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, pf = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function mf() {
	return new RegExp(pf, "u");
}
var hf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, gf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, _f = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, vf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, yf = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, bf = /^[A-Za-z0-9_-]*$/, xf = /^https?$/, Sf = /^\+[1-9]\d{6,14}$/, Cf = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function wf(e) {
	return RegExp(`^${e}$`);
}
var Tf = /*@__PURE__*/ wf(Cf);
function Ef(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Df(e) {
	return RegExp(`^${Ef(e)}$`);
}
function Of(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Ef({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Ef({ precision: e.precision })}` : n;
	return RegExp(`^${Cf}T(?:${r})$`);
}
var kf = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, Af = /^-?\d+$/, jf = /^-?\d+(?:\.\d+)?$/, Mf = /^(?:true|false)$/i, Nf = /^[^A-Z]*$/, Pf = /^[^a-z]*$/, Ff = /*@__PURE__*/ Y("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), If = (e) => {
	let t = e.value;
	return !wu(t) && t.length !== void 0;
}, Lf = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Rf = /*@__PURE__*/ Y("$ZodCheckLessThan", (e, t) => {
	Ff.init(e, t);
	let n = Lf[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
		t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: Lf[typeof r.value] ?? n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), zf = /*@__PURE__*/ Y("$ZodCheckGreaterThan", (e, t) => {
	Ff.init(e, t);
	let n = Lf[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
		t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: Lf[typeof r.value] ?? n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Bf = /*@__PURE__*/ Y("$ZodCheckMultipleOf", (e, t) => {
	Ff.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : Eu(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Vf = /*@__PURE__*/ Y("$ZodCheckNumberFormat", (e, t) => {
	Ff.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Vu[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = Af);
	}), e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Hf = /*@__PURE__*/ Y("$ZodCheckMaxLength", (e, t) => {
	var n;
	Ff.init(e, t), (n = e._zod.def).when ?? (n.when = If), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? nd(r) : i) <= t.maximum) return;
		let a = rd(r);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Uf = /*@__PURE__*/ Y("$ZodCheckMinLength", (e, t) => {
	var n;
	Ff.init(e, t), (n = e._zod.def).when ?? (n.when = If), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? nd(r) : i) >= t.minimum) return;
		let a = rd(r);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Wf = /*@__PURE__*/ Y("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Ff.init(e, t), (n = e._zod.def).when ?? (n.when = If), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? nd(r) : i;
		if (a === t.length) return;
		let o = rd(r), s = a > t.length;
		n.issues.push({
			origin: o,
			...s ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Gf = /*@__PURE__*/ Y("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	Ff.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), Kf = /*@__PURE__*/ Y("$ZodCheckRegex", (e, t) => {
	Gf.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), qf = /*@__PURE__*/ Y("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= Nf, Gf.init(e, t);
}), Jf = /*@__PURE__*/ Y("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= Pf, Gf.init(e, t);
}), Yf = /*@__PURE__*/ Y("$ZodCheckIncludes", (e, t) => {
	Ff.init(e, t);
	let n = Lu(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
	t.pattern = r, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Xf = /*@__PURE__*/ Y("$ZodCheckStartsWith", (e, t) => {
	Ff.init(e, t);
	let n = RegExp(`^${Lu(t.prefix)}.*`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zf = /*@__PURE__*/ Y("$ZodCheckEndsWith", (e, t) => {
	Ff.init(e, t);
	let n = RegExp(`.*${Lu(t.suffix)}$`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Qf = /*@__PURE__*/ Y("$ZodCheckOverwrite", (e, t) => {
	Ff.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), $f = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1, e(this), --this.indent;
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
}, ep = {
	major: 4,
	minor: 5,
	patch: 4
}, tp = /*@__PURE__*/ Y("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ep;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = Yu(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (Xu(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new Sd();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && ($u(t.issues, n, e), i ||= Yu(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					$u(t.issues, n, e), i ||= Yu(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (Yu(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Sd();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (r, a) => {
			if (a.skipChecks) return e._zod.parse(r, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: r.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
			}
			let o = e._zod.parse(r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Sd();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return cd(this, "~standard", rp(this));
	},
	set "~standard"(e) {
		sd(this, "~standard", e);
	}
}), np = (e) => e.success ? { value: e.data } : { issues: e.error?.issues };
function rp(e) {
	return {
		validate: (t) => {
			try {
				return np(Wd(e, t));
			} catch {
				return Kd(e, t).then(np);
			}
		},
		vendor: "zod",
		version: 1
	};
}
var ip = /*@__PURE__*/ Y("$ZodString", (e, t) => {
	tp.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? kf(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), ap = /*@__PURE__*/ Y("$ZodStringFormat", (e, t) => {
	Gf.init(e, t), ip.init(e, t);
}), op = /*@__PURE__*/ Y("$ZodGUID", (e, t) => {
	t.pattern ??= uf, ap.init(e, t);
}), sp = /*@__PURE__*/ Y("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= df(e);
	} else t.pattern ??= df();
	ap.init(e, t);
}), cp = /*@__PURE__*/ Y("$ZodEmail", (e, t) => {
	t.pattern ??= ff, ap.init(e, t);
});
function lp(e, t) {
	if (!t.normalize && t.protocol?.source === xf.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		return new URL(e);
	} catch {
		return 2;
	}
}
var up = /[\t\n\r]/g;
function dp(e) {
	return e.replace(up, "");
}
function fp(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function pp(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var mp = /*@__PURE__*/ Y("$ZodURL", (e, t) => {
	ap.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = lp(r, t);
			if (i === 1) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === 2) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			t.hostname && !fp(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !pp(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : dp(r);
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), hp = /*@__PURE__*/ Y("$ZodEmoji", (e, t) => {
	t.pattern ??= mf(), ap.init(e, t);
}), gp = /*@__PURE__*/ Y("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? sf : cf(t.length), ap.init(e, t);
}), _p = /*@__PURE__*/ Y("$ZodCUID", (e, t) => {
	t.pattern ??= tf, ap.init(e, t);
}), vp = /*@__PURE__*/ Y("$ZodCUID2", (e, t) => {
	t.pattern ??= nf, ap.init(e, t);
}), yp = /*@__PURE__*/ Y("$ZodULID", (e, t) => {
	t.pattern ??= rf, ap.init(e, t);
}), bp = /*@__PURE__*/ Y("$ZodXID", (e, t) => {
	t.pattern ??= af, ap.init(e, t);
}), xp = /*@__PURE__*/ Y("$ZodKSUID", (e, t) => {
	t.pattern ??= of, ap.init(e, t);
}), Sp = /*@__PURE__*/ Y("$ZodISODateTime", (e, t) => {
	t.pattern ??= Of(t), ap.init(e, t), (t.local || t.precision === -1) && (e._zod.bag.laxFormat = !0, e._zod.onattach.push((e) => {
		e._zod.bag.laxFormat = !0;
	}));
}), Cp = /*@__PURE__*/ Y("$ZodISODate", (e, t) => {
	t.pattern ??= Tf, ap.init(e, t);
}), wp = /*@__PURE__*/ Y("$ZodISOTime", (e, t) => {
	t.pattern ??= Df(t), ap.init(e, t);
}), Tp = /*@__PURE__*/ Y("$ZodISODuration", (e, t) => {
	t.pattern ??= lf, ap.init(e, t);
}), Ep = /*@__PURE__*/ Y("$ZodIPv4", (e, t) => {
	t.pattern ??= hf, ap.init(e, t), e._zod.bag.format = "ipv4";
}), Dp = /^[0-9a-fA-F:.]+$/;
function Op(e) {
	if (!Dp.test(e)) return !1;
	try {
		return new URL(`http://[${e}]`), !0;
	} catch {
		return !1;
	}
}
var kp = /*@__PURE__*/ Y("$ZodIPv6", (e, t) => {
	t.pattern ??= gf, ap.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		Op(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Ap = /*@__PURE__*/ Y("$ZodCIDRv4", (e, t) => {
	t.pattern ??= _f, ap.init(e, t);
});
function jp(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Op(n);
}
var Mp = /*@__PURE__*/ Y("$ZodCIDRv6", (e, t) => {
	t.pattern ??= vf, ap.init(e, t), e._zod.check = (n) => {
		jp(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Np(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Pp = /*@__PURE__*/ Y("$ZodBase64", (e, t) => {
	t.pattern ??= yf, ap.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Np(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Fp(e) {
	if (!bf.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Np(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Ip = /*@__PURE__*/ Y("$ZodBase64URL", (e, t) => {
	t.pattern ??= bf, ap.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		Fp(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Lp = /*@__PURE__*/ Y("$ZodE164", (e, t) => {
	t.pattern ??= Sf, ap.init(e, t);
});
function Rp(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var zp = /*@__PURE__*/ Y("$ZodJWT", (e, t) => {
	ap.init(e, t), e._zod.check = (n) => {
		Rp(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Bp = /*@__PURE__*/ Y("$ZodNumber", (e, t) => {
	tp.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? jf, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), Vp = /*@__PURE__*/ Y("$ZodNumberFormat", (e, t) => {
	Vf.init(e, t), Bp.init(e, t);
}), Hp = /*@__PURE__*/ Y("$ZodBoolean", (e, t) => {
	tp.init(e, t), e._zod.pattern = Mf, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), Up = /*@__PURE__*/ Y("$ZodUnknown", (e, t) => {
	tp.init(e, t), e._zod.parse = (e) => e;
}), Wp = /*@__PURE__*/ Y("$ZodNever", (e, t) => {
	tp.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Gp(e, t, n) {
	e.issues.length && t.issues.push(...Zu(n, e.issues)), t.value[n] = e.value;
}
var Kp = /*@__PURE__*/ Y("$ZodArray", (e, t) => {
	tp.init(e, t);
	let n = wd.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
		let o = [];
		for (let e = 0; e < a.length; e++) {
			let n = a[e], s = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			s instanceof Promise ? o.push(s.then((t) => Gp(t, r, e))) : Gp(s, r, e);
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
});
function qp(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...Zu(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
var Jp = [];
function Yp(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Jp, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Bu(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Xp(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin, d = c.optout;
	for (let i in t) {
		if (s.has(i)) continue;
		if (i === "__proto__") {
			l === "never" && o.push(i);
			continue;
		}
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => qp(e, n, i, t, u, d))) : qp(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var Zp = /* @__PURE__ */ new WeakMap(), Qp = /*@__PURE__*/ Y("$ZodObject", (e, t) => {
	if (tp.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Zp.set(t, e), Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), Zp.set(t, n), n;
		} });
	}
	let n = Cu(() => Yp(t));
	md(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || Du(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let r = Mu, i = t.catchall, a, o = wd.memoizer;
	o?.attach(e), e._zod.parse = (t, s) => {
		a ??= n.value;
		let c = t.value;
		if (!r(c)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: c,
			inst: e
		}), t;
		t.value = o ? o.alloc(e, t, {}, s) : {};
		let l = [], u = a.shape;
		for (let e of a.allKeys) {
			if (e === "__proto__") continue;
			let n = u[e], r = n._zod.optin, i = n._zod.optout, a = n._zod.run({
				value: c[e],
				issues: []
			}, s);
			a instanceof Promise ? l.push(a.then((n) => qp(n, t, e, c, r, i))) : qp(a, t, e, c, r, i);
		}
		return i ? Xp(l, c, t, s, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), $p = /*@__PURE__*/ Y("$ZodObjectJIT", (e, t) => {
	Qp.init(e, t);
	let n = e._zod.parse, r = Cu(() => Yp(t)), i = wd.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new $f(["payload", "ctx"], {
			shape: t,
			inst: e,
			memo: i,
			syms: a
		}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
          }`;
		o.write("const input = payload.value;");
		let l = Object.create(null), u = 0;
		for (let e of n.allKeys) l[e] = `key_${u++}`;
		o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let e of n.allKeys) {
			if (e === "__proto__") continue;
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : ku(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
			if (o.write(`const ${n} = ${s(r)};`), f && p) {
				let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
				o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
			} else f ? o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
        
        if (${n}.value === undefined) {
          if (${i}) {
            newResult[${r}] = undefined;
          }
        } else {
          newResult[${r}] = ${n}.value;
        }

      `) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
		}
		return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
	}, o, s = Mu, c = !wd.jitless, l = c && Nu.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Xp([], p, i, f, d, e) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function em(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !Yu(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => ed(e, r, Td())))
	}), t);
}
var tm = /*@__PURE__*/ Y("$ZodUnion", (e, t) => {
	tp.init(e, t), md(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), md(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), md(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), md(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => Tu(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => em(t, r, e, i)) : em(o, r, e, i);
	};
}), nm = /*@__PURE__*/ Y("$ZodDiscriminatedUnion", (e, t) => {
	t.inclusive = !1, tm.init(e, t);
	let n = e._zod.parse;
	md(e, "propValues", (e) => {
		let t = {};
		for (let n of e.def.options) {
			let r = n._zod.propValues;
			if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(n)}"`);
			for (let [e, n] of Object.entries(r)) {
				Object.prototype.hasOwnProperty.call(t, e) || Du(t, e, /* @__PURE__ */ new Set());
				for (let r of n) t[e].add(r);
			}
		}
		return t;
	}), t.options.forEach((e, n) => {
		let r = Zp.get(e._zod.def);
		if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
	});
	let r = Cu(() => {
		let e = t.options, n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r._zod.propValues?.[t.discriminator];
			if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
			for (let t of e) {
				if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
				n.set(t, r);
			}
		}
		return n;
	});
	e._zod.parse = (i, a) => {
		let o = i.value;
		if (!Mu(o)) return i.issues.push({
			code: "invalid_type",
			expected: "object",
			input: o,
			inst: e
		}), i;
		let s = r.value.get(o?.[t.discriminator]);
		return s ? s._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: t.discriminator,
			options: Array.from(r.value.keys()),
			input: o,
			path: [t.discriminator],
			inst: e
		}), i);
	};
}), rm = /*@__PURE__*/ Y("$ZodIntersection", (e, t) => {
	tp.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => am(e, t, n)) : am(e, i, a);
	};
});
function im(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Pu(e) && Pu(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = im(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = im(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function am(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = im(t.value, n.value);
	if (!c.valid) {
		if (Yu(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var om = /*@__PURE__*/ Y("$ZodTuple", (e, t) => {
	tp.init(e, t);
	let n = t.items, r = wd.memoizer;
	r?.attach(e), e._zod.parse = (i, a) => {
		let o = i.value;
		if (!Array.isArray(o)) return i.issues.push({
			input: o,
			inst: e,
			expected: "tuple",
			code: "invalid_type"
		}), i;
		i.value = r ? r.alloc(e, i, [], a) : [];
		let s = [], c = sm(n, "optin"), l = sm(n, "optout");
		if (!t.rest) {
			if (o.length < c) return i.issues.push({
				code: "too_small",
				minimum: c,
				inclusive: !0,
				input: o,
				inst: e,
				origin: "array"
			}), i;
			o.length > n.length && i.issues.push({
				code: "too_big",
				maximum: n.length,
				inclusive: !0,
				input: o,
				inst: e,
				origin: "array"
			});
		}
		let u = Array(n.length);
		for (let e = 0; e < n.length; e++) {
			let t = n[e]._zod.run({
				value: o[e],
				issues: []
			}, a);
			t instanceof Promise ? s.push(t.then((t) => {
				u[e] = t;
			})) : u[e] = t;
		}
		if (t.rest) {
			let e = n.length - 1, r = o.slice(n.length);
			for (let n of r) {
				e++;
				let r = t.rest._zod.run({
					value: n,
					issues: []
				}, a);
				r instanceof Promise ? s.push(r.then((t) => cm(t, i, e))) : cm(r, i, e);
			}
		}
		return s.length ? Promise.all(s).then(() => lm(u, i, n, o, l)) : lm(u, i, n, o, l);
	};
});
function sm(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (!(t === "optin" ? e[n]._zod.optin !== void 0 : e[n]._zod.optout === "optional")) return n + 1;
	return 0;
}
function cm(e, t, n) {
	e.issues.length && t.issues.push(...Zu(n, e.issues)), t.value[n] = e.value;
}
function lm(e, t, n, r, i) {
	for (let a = 0; a < n.length; a++) {
		let o = e[a], s = a < r.length;
		if (!s && a >= i && n[a]._zod.optin === "optional") {
			t.value.length = a;
			break;
		}
		if (o.issues.length) {
			if (!s && a >= i) {
				t.value.length = a;
				break;
			}
			t.issues.push(...Zu(a, o.issues));
		}
		t.value[a] = o.value;
	}
	for (let e = t.value.length - 1; e >= r.length && n[e]._zod.optout === "optional" && t.value[e] === void 0; e--) t.value.length = e;
	return t;
}
var um = /*@__PURE__*/ Y("$ZodRecord", (e, t) => {
	tp.init(e, t);
	let n = wd.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Pu(a)) return r.issues.push({
			expected: "record",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		let o = [], s = t.keyType._zod.values;
		if (s && !t.partial) {
			r.value = n ? n.alloc(e, r, {}, i) : {};
			let c = /* @__PURE__ */ new Set();
			for (let n of s) if (typeof n == "string" || typeof n == "number" || typeof n == "symbol") {
				if (c.add(typeof n == "number" ? n.toString() : n), n === "__proto__") continue;
				let s = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (s.issues.length) {
					r.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: s.issues.map((e) => ed(e, i, Td())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				let l = s.value;
				if (l === "__proto__") continue;
				let u = t.valueType._zod.run({
					value: a[n],
					issues: []
				}, i);
				u instanceof Promise ? o.push(u.then((e) => {
					e.issues.length && r.issues.push(...Zu(n, e.issues)), r.value[l] = e.value;
				})) : (u.issues.length && r.issues.push(...Zu(n, u.issues)), r.value[l] = u.value);
			}
			let l;
			for (let e in a) if (!c.has(e)) {
				if (t.mode === "loose") {
					if (e === "__proto__") continue;
					r.value[e] = a[e];
				} else l ??= [], l.push(e);
			}
			l && l.length > 0 && r.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: l,
				continue: !0
			});
		} else {
			r.value = n ? n.alloc(e, r, {}, i) : {};
			let c;
			for (let n of Reflect.ownKeys(a)) {
				if (n === "__proto__" || !Object.prototype.propertyIsEnumerable.call(a, n)) continue;
				let l = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (l instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof n == "string" && jf.test(n) && l.issues.length) {
					let e = t.keyType._zod.run({
						value: Number(n),
						issues: []
					}, i);
					if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					e.issues.length === 0 && (l = e);
				}
				if (l.issues.length) {
					t.mode === "loose" ? r.value[n] = a[n] : s ? (c ??= [], c.push(n)) : r.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: l.issues.map((e) => ed(e, i, Td())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				let u = l.value;
				if (u === "__proto__") continue;
				let d = t.valueType._zod.run({
					value: a[n],
					issues: []
				}, i);
				d instanceof Promise ? o.push(d.then((e) => {
					e.issues.length && r.issues.push(...Zu(n, e.issues)), r.value[u] = e.value;
				})) : (d.issues.length && r.issues.push(...Zu(n, d.issues)), r.value[u] = d.value);
			}
			c && c.length > 0 && r.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: c,
				continue: !0
			});
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
}), dm = /*@__PURE__*/ Y("$ZodEnum", (e, t) => {
	tp.init(e, t);
	let n = bu(t.entries), r = new Set(n);
	e._zod.values = r;
	let i = n.filter((e) => Iu.has(typeof e));
	e._zod.pattern = RegExp(i.length ? `^(${i.map((e) => Lu(e.toString())).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), fm = /*@__PURE__*/ Y("$ZodLiteral", (e, t) => {
	tp.init(e, t);
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(t.values.length ? `^(${t.values.map((e) => typeof e == "string" ? Lu(e) : e ? Lu(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), pm = /*@__PURE__*/ Y("$ZodTransform", (e, t) => {
	tp.init(e, t), e._zod.optin = "optional", wd.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Cd(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new Sd();
		return n.value = i, n;
	};
});
function mm(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var hm = /*@__PURE__*/ Y("$ZodOptional", (e, t) => {
	tp.init(e, t), md(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", md(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), md(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${Tu(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => mm(e, t)) : mm(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), gm = /*@__PURE__*/ Y("$ZodExactOptional", (e, t) => {
	hm.init(e, t), md(e, "values", (e) => e.def.innerType._zod.values), md(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), _m = /*@__PURE__*/ Y("$ZodNullable", (e, t) => {
	tp.init(e, t), md(e, "optin", (e) => e.def.innerType._zod.optin), md(e, "optout", (e) => e.def.innerType._zod.optout), md(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${Tu(t.source)}|null)$`) : void 0;
	}), md(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), vm = /*@__PURE__*/ Y("$ZodDefault", (e, t) => {
	tp.init(e, t), e._zod.optin = "defaulted", md(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => ym(e, t)) : ym(r, t);
	};
});
function ym(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var bm = /*@__PURE__*/ Y("$ZodPrefault", (e, t) => {
	tp.init(e, t), e._zod.optin = "defaulted", md(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), xm = /*@__PURE__*/ Y("$ZodNonOptional", (e, t) => {
	tp.init(e, t), md(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Sm(t, e)) : Sm(i, e);
	};
});
function Sm(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Cm(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => ed(e, r, Td())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var wm = /*@__PURE__*/ Y("$ZodCatch", (e, t) => {
	tp.init(e, t), md(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), md(e, "optout", (e) => e.def.innerType._zod.optout), md(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => Cm(e, r, t, n)) : Cm(e, r, t, n);
	};
}), Tm = /*@__PURE__*/ Y("$ZodPipe", (e, t) => {
	tp.init(e, t), md(e, "values", (e) => e.def.in._zod.values), md(e, "optin", (e) => e.def.in._zod.optin), md(e, "optout", (e) => e.def.out._zod.optout), md(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Em(e, t.in, n)) : Em(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Em(e, t.out, n)) : Em(r, t.out, n);
	};
});
function Em(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Dm = /*@__PURE__*/ Y("$ZodReadonly", (e, t) => {
	tp.init(e, t), md(e, "propValues", (e) => e.def.innerType._zod.propValues), md(e, "values", (e) => e.def.innerType._zod.values), md(e, "optin", (e) => e.def.innerType?._zod?.optin), md(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Om) : Om(r);
	};
});
function Om(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var km = /*@__PURE__*/ Y("$ZodCustom", (e, t) => {
	Ff.init(e, t), tp.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Am(t, n, r, e));
		Am(i, n, r, e);
	};
});
function Am(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(ad(e));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/memoizer.js
var jm = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, Mm = "~memo", Nm = [];
function Pm(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var Fm = /*@__PURE__*/ new WeakMap();
function Im(e, t) {
	let n = Fm.get(e);
	if (n !== void 0) return n;
	if (t.has(e)) return !0;
	t.add(e);
	let r = !1, i = (e) => {
		!r && e?._zod && Im(e, t) && (r = !0);
	}, a = e._zod.def;
	switch (a.type) {
		case "object":
			for (let e of Reflect.ownKeys(a.shape)) i(a.shape[e]);
			i(a.catchall);
			break;
		case "array":
			i(a.element);
			break;
		case "tuple":
			for (let e of a.items) i(e);
			i(a.rest);
			break;
		case "record":
		case "map":
			i(a.keyType), i(a.valueType);
			break;
		case "set":
			i(a.valueType);
			break;
		case "union":
			for (let e of a.options) i(e);
			break;
		case "intersection":
			i(a.left), i(a.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			i(a.innerType);
			break;
		case "pipe":
			i(a.in), i(a.out);
			break;
		case "function":
			i(a.input), i(a.output);
			break;
		case "lazy":
			i(e._zod.innerType);
			break;
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in a) {
			let t = Object.getOwnPropertyDescriptor(a, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) i(n);
				else if (Array.isArray(n)) for (let e of n) i(e);
			}
		}
	}
	return t.delete(e), Fm.set(e, r), r;
}
function Lm(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new Map(), e.buckets.set(t, n)), n;
}
var Rm, zm = [], Bm = {
	alloc(e, t, n) {
		let r = Rm;
		if (!r) return n;
		Rm = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), zm.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && Hm(n, e.value)) throw new jm();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, r, i;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, a = (o, s) => {
				if (n === void 0 && (n = Im(e, /* @__PURE__ */ new Set()), !n)) return e._zod.parse = t, e._zod.run === a && (e._zod.run = t), t(o, s);
				let c = o.value;
				if (typeof c != "object" || !c) return t(o, s);
				let l = s[Mm];
				l || (l = {
					buckets: /* @__PURE__ */ new Map(),
					backEdges: void 0
				}, s[Mm] = l);
				let u;
				r === s ? u = i : (u = Lm(l, e), r = s, i = u);
				let d = u.get(c);
				if (d) return o.value = d.value, d.issues ? d.issues.length && o.issues.push(...Pm(d.issues)) : (o.memo = !0, l.backEdges ?? (l.backEdges = /* @__PURE__ */ new Set()), l.backEdges.add(d.value)), o;
				Rm = u;
				let f = zm.length, p = t(o, s);
				Rm = void 0;
				let m = zm.length > f ? zm.pop() : void 0;
				return p instanceof Promise ? p.then((e) => (m && (m.issues = e.issues.length ? Pm(e.issues) : Nm), e)) : (m && (m.issues = p.issues.length ? Pm(p.issues) : Nm), p);
			};
			e._zod.parse = a, e._zod.run === t && (e._zod.run = a);
		});
	}
};
function Vm() {
	return Bm;
}
function Hm(e, t) {
	let n = e[Mm]?.backEdges;
	return n !== void 0 && typeof t == "object" && !!t && n.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/locales/en.js
var Um = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		credit_card: "credit card number",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	function i(e, t) {
		return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(id(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${zu(e.values[0])}` : `Invalid option: expected one of ${xu(e.values, "|")}`;
			case "too_big": {
				let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${xu(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function Wm() {
	return { localeError: Um() };
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js
var Gm, Km = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function qm() {
	return new Km();
}
(Gm = globalThis).__zod_globalRegistry ?? (Gm.__zod_globalRegistry = qm());
var Jm = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function Ym(e, t) {
	return new e({
		type: "string",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xm(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Zm(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qm(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $m(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function eh(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function th(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function nh(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function rh(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ih(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ah(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function oh(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function sh(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ch(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function lh(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function uh(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function dh(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function fh(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ph(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mh(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function hh(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function gh(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _h(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vh(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function yh(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function bh(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xh(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Sh(e, t) {
	return new e({
		type: "number",
		checks: [],
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ch(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wh(e, t) {
	return new e({
		type: "boolean",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Th(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Eh(e, t) {
	return new e({
		type: "never",
		...J(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Dh(e, t) {
	return new Rf({
		check: "less_than",
		...J(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Oh(e, t) {
	return new Rf({
		check: "less_than",
		...J(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function kh(e, t) {
	return new zf({
		check: "greater_than",
		...J(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Ah(e, t) {
	return new zf({
		check: "greater_than",
		...J(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function jh(e, t) {
	return new Bf({
		check: "multiple_of",
		...J(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function Mh(e, t) {
	return new Hf({
		check: "max_length",
		...J(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Nh(e, t) {
	return new Uf({
		check: "min_length",
		...J(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ph(e, t) {
	return new Wf({
		check: "length_equals",
		...J(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Fh(e, t) {
	return new Kf({
		check: "string_format",
		format: "regex",
		...J(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ih(e) {
	return new qf({
		check: "string_format",
		format: "lowercase",
		...J(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Lh(e) {
	return new Jf({
		check: "string_format",
		format: "uppercase",
		...J(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Rh(e, t) {
	return new Yf({
		check: "string_format",
		format: "includes",
		...J(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function zh(e, t) {
	return new Xf({
		check: "string_format",
		format: "starts_with",
		...J(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Bh(e, t) {
	return new Zf({
		check: "string_format",
		format: "ends_with",
		...J(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Vh(e) {
	return new Qf({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Hh(e) {
	return /* @__PURE__ */ Vh((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Uh() {
	return /* @__PURE__ */ Vh((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Wh() {
	return /* @__PURE__ */ Vh((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Gh() {
	return /* @__PURE__ */ Vh((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Kh() {
	return /* @__PURE__ */ Vh((e) => Au(e));
}
// @__NO_SIDE_EFFECTS__
function qh(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...J(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Jh(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...J(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Yh(e, t) {
	let n = /* @__PURE__ */ Xh((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(ad(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(ad(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Xh(e, t) {
	let n = new Ff({
		check: "custom",
		...J(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js
function Zh(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && Du(e, t, n[t]);
	return e;
}
function Qh(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Jm,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function $h(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function eg(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, eg(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Zh(o.schema, c), t.io === "input" && ug(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function tg(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ng(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${tg(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + tg(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function rg(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		rg(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
var ig = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), ag = ["oneOf", "anyOf"];
function og(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function sg(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!ig.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? og(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			Du(n, r, e.length === 1 ? e[0] : sg(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = og(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function cg(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of ig) if (t in e) return;
	let n = t.filter((e) => ag.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = sg(t);
	else {
		let e = n[0], i = ag.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => sg([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Zh(e, r));
}
function lg(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Zh(i, s), Zh(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) rg(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) cg(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Zh(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, Du(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: fg(t, "input", e.processors),
					output: fg(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function ug(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return ug(r.element, n);
	if (r.type === "set") return ug(r.valueType, n);
	if (r.type === "lazy") return ug(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return ug(r.innerType, n);
	if (r.type === "intersection") return ug(r.left, n) || ug(r.right, n);
	if (r.type === "record" || r.type === "map") return ug(r.keyType, n) || ug(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : ug(r.in, n) || ug(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (ug(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (ug(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (ug(e, n)) return !0;
		return !!(r.rest && ug(r.rest, n));
	}
	return !1;
}
var dg = (e, t = {}) => (n) => {
	let r = Qh({
		...n,
		processors: t
	});
	return eg(e, r), ng(r, e), lg(r, e);
}, fg = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Qh({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return eg(e, o), ng(o, e), lg(o, e);
}, pg = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, mg = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = pg[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, hg = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
	let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (Number.isFinite(c) && c !== 0 ? i.multipleOf = Math.abs(c) : $h(e, t, i, r, `A multipleOf divisor of ${c} cannot be represented in JSON Schema`));
}, gg = (e, t, n, r) => {
	n.type = "boolean";
}, _g = (e, t, n, r) => {
	n.not = {};
}, vg = (e, t, n, r) => {
	let i = e._zod.def, a = bu(i.entries);
	if (a.length === 0) {
		n.not = {};
		return;
	}
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, yg = (e, t, n, r) => {
	let i = e._zod.def;
	if (i.values.length === 0) {
		n.not = {};
		return;
	}
	let a = [];
	for (let o of i.values) if (o === void 0) {
		if ($h(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
	} else if (typeof o == "bigint") {
		if ($h(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
		a.push(Number(o));
	} else a.push(o);
	if (a.length !== 0) {
		if (a.length === 1) {
			let e = a[0];
			n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
		} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
	}
}, bg = (e, t, n, r) => {
	$h(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, xg = (e, t, n, r) => {
	$h(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, Sg = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = eg(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function Cg(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Cg(t.out) : t.type === "catch" ? Cg(t.innerType) : e._zod.optin;
}
var wg = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && $h(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) Du(i.properties, e, eg(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	}));
	let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
		let n = a.shape[e];
		return t.io === "input" ? Cg(n) === void 0 : n._zod.optout === void 0;
	}));
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = eg(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Tg = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => eg(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Eg = (e, t, n, r) => {
	let i = e._zod.def, a = eg(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = eg(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, Dg = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "array";
	let o = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = a.items.map((e, n) => eg(e, t, {
		...r,
		path: [
			...r.path,
			o,
			n
		]
	})), l = a.rest ? eg(a.rest, t, {
		...r,
		path: [
			...r.path,
			s,
			...t.target === "openapi-3.0" ? [a.items.length] : []
		]
	}) : null, u = a.items.length;
	for (; u > 0;) {
		let e = a.items[u - 1];
		if (!(t.io === "input" ? Cg(e) !== void 0 : e._zod.optout === "optional")) break;
		u--;
	}
	let d = a.items.length, f = !a.rest;
	t.target === "draft-2020-12" ? (i.prefixItems = c, f ? i.items = !1 : l && (i.items = l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : t.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : (i.items = c, f ? i.additionalItems = !1 : l && (i.additionalItems = l), u > 0 && (i.minItems = u), f && (i.maxItems = d));
	let { minimum: p, maximum: m } = e._zod.bag;
	typeof p == "number" && (i.minItems = p), typeof m == "number" && (i.maxItems = m);
};
function Og(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Og(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Og(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? jf : Af).source), p) : p;
}
var kg = /* @__PURE__ */ new WeakMap();
function Ag(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of kg.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Og(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
var jg = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object";
	let o = a.keyType, s = o._zod.bag?.patterns;
	if (a.mode === "loose" && s && s.size > 0) {
		let e = eg(a.valueType, t, {
			...r,
			path: [
				...r.path,
				"patternProperties",
				"*"
			]
		});
		i.patternProperties = {};
		for (let t of s) Du(i.patternProperties, t.source, e);
	} else {
		if (t.target === "draft-07" || t.target === "draft-2020-12") {
			i.propertyNames = eg(a.keyType, t, {
				...r,
				path: [...r.path, "propertyNames"]
			});
			let n = kg.get(t);
			n || (n = [], kg.set(t, n), t.deferred.push(() => Ag(t))), n.push(e);
		}
		i.additionalProperties = eg(a.valueType, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		});
	}
	let c = o._zod.values, l = t.io === "input" && Cg(a.valueType) !== void 0;
	if (c && !a.partial && !l) {
		let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
		e.length > 0 && (i.required = e.map(String));
	}
}, Mg = (e, t, n, r) => {
	let i = e._zod.def, a = eg(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Ng = (e, t, n, r) => {
	let i = e._zod.def;
	eg(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Pg = Symbol();
function Fg(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? ($h(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Pg) : JSON.parse(o);
}
var Ig = (e, t, n, r) => {
	let i = e._zod.def;
	eg(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = Fg(i.defaultValue, e, t, n, r);
	o !== Pg && (n.default = o);
}, Lg = (e, t, n, r) => {
	let i = e._zod.def;
	eg(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = Fg(i.defaultValue, e, t, n, r);
	o !== Pg && (n._prefault = o);
}, Rg = (e, t, n, r) => {
	let i = e._zod.def;
	eg(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		$h(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, zg = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	eg(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Bg = (e, t, n, r) => {
	let i = e._zod.def;
	eg(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Vg = (e, t, n, r) => {
	let i = e._zod.def;
	eg(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Hg = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Ug(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var Wg = /*@__PURE__*/ Y("ZodError", (e, t) => {
	Nd.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	Hg.has(n) || (Hg.add(n), Ug(n, "format", (e) => (t) => Ld(e, t)), Ug(n, "flatten", (e) => (t) => Id(e, t)), Ug(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, Su, 2);
	}), Ug(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, Su, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), Gg = /* @__PURE__ */ Vd(Wg), Kg = /* @__PURE__ */ Hd(Wg), qg = /* @__PURE__ */ Ud(Wg), Jg = /* @__PURE__ */ Gd(Wg), Yg = /* @__PURE__ */ qd(Wg), Xg = /* @__PURE__ */ Jd(Wg), Zg = /* @__PURE__ */ Yd(Wg), Qg = /* @__PURE__ */ Xd(Wg), $g = /* @__PURE__ */ Zd(Wg), e_ = /* @__PURE__ */ Qd(Wg), t_ = /* @__PURE__ */ $d(Wg), n_ = /* @__PURE__ */ ef(Wg);
//#endregion
//#region ../../node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/schemas.js
function r_() {
	wd.localeError || Td(Wm());
}
function i_() {
	wd.memoizer || Td({ memoizer: Vm() });
}
var a_ = /*@__PURE__*/ Y("ZodType", (e, t) => (r_(), tp.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(Ou(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Ru(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(Tv(e, t));
	},
	superRefine(e, t) {
		return this.check(Ev(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ Vh(e));
	},
	optional() {
		return sv(this);
	},
	exactOptional() {
		return lv(this);
	},
	nullable() {
		return dv(this);
	},
	nullish() {
		return sv(dv(this));
	},
	nonoptional(e) {
		return _v(this, e);
	},
	array() {
		return H_(this);
	},
	or(e) {
		return G_([this, e]);
	},
	and(e) {
		return Y_(this, e);
	},
	transform(e) {
		return xv(this, av(e));
	},
	default(e) {
		return pv(this, e);
	},
	prefault(e) {
		return hv(this, e);
	},
	catch(e) {
		return yv(this, e);
	},
	pipe(e) {
		return xv(this, e);
	},
	readonly() {
		return Cv(this);
	},
	describe(e) {
		let t = this.clone();
		return Jm.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return Jm.get(this);
		let t = this.clone();
		return Jm.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return t.length === 0 ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return cd(this, "~standard", {
			...rp(this),
			jsonSchema: {
				input: fg(this, "input"),
				output: fg(this, "output")
			}
		});
	},
	set "~standard"(e) {
		sd(this, "~standard", e);
	},
	parse: function e(t, n) {
		return Gg(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await Kg(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return qg(this, e, t);
	},
	async safeParseAsync(e, t) {
		return Jg(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		sd(this, "spa", e);
	},
	encode: function e(t, n) {
		return Yg(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return Xg(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await Zg(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await Qg(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return $g(this, e, t);
	},
	safeDecode(e, t) {
		return e_(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return t_(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return n_(this, e, t);
	},
	toJSONSchema(e) {
		return dg(this, {})(e);
	},
	get description() {
		return Jm.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), o_ = /*@__PURE__*/ Y("_ZodString", (e, t) => {
	ip.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => mg(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null;
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ Fh(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ Rh(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ zh(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ Bh(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ Nh(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ Mh(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ Ph(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ Nh(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ Ih(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ Lh(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ Uh());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ Hh(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ Wh());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ Gh());
	},
	slugify() {
		return this.check(/* @__PURE__ */ Kh());
	}
}), s_ = /*@__PURE__*/ Y("ZodString", (e, t) => {
	ip.init(e, t), o_.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ Xm(p_, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ nh(g_, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ _h(j_, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ rh(__, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ Zm(m_, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ Qm(h_, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ $m(h_, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ eh(h_, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ th(h_, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ ih(v_, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ ah(y_, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ oh(b_, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ sh(x_, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ mh(O_, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ hh(k_, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ ch(S_, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ lh(C_, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ uh(w_, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ dh(T_, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ fh(E_, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ ph(D_, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ gh(A_, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ vh(l_, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ yh(u_, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ bh(d_, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ xh(f_, e));
	}
});
function X(e) {
	return /* @__PURE__ */ Ym(s_, e);
}
var c_ = /*@__PURE__*/ Y("ZodStringFormat", (e, t) => {
	ap.init(e, t), o_.init(e, t);
}), l_ = /*@__PURE__*/ Y("ZodISODateTime", (e, t) => {
	Sp.init(e, t), c_.init(e, t);
}), u_ = /*@__PURE__*/ Y("ZodISODate", (e, t) => {
	Cp.init(e, t), c_.init(e, t);
}), d_ = /*@__PURE__*/ Y("ZodISOTime", (e, t) => {
	wp.init(e, t), c_.init(e, t);
}), f_ = /*@__PURE__*/ Y("ZodISODuration", (e, t) => {
	Tp.init(e, t), c_.init(e, t);
}), p_ = /*@__PURE__*/ Y("ZodEmail", (e, t) => {
	cp.init(e, t), c_.init(e, t);
}), m_ = /*@__PURE__*/ Y("ZodGUID", (e, t) => {
	op.init(e, t), c_.init(e, t);
}), h_ = /*@__PURE__*/ Y("ZodUUID", (e, t) => {
	sp.init(e, t), c_.init(e, t);
}), g_ = /*@__PURE__*/ Y("ZodURL", (e, t) => {
	mp.init(e, t), c_.init(e, t);
}), __ = /*@__PURE__*/ Y("ZodEmoji", (e, t) => {
	hp.init(e, t), c_.init(e, t);
}), v_ = /*@__PURE__*/ Y("ZodNanoID", (e, t) => {
	gp.init(e, t), c_.init(e, t);
}), y_ = /*@__PURE__*/ Y("ZodCUID", (e, t) => {
	_p.init(e, t), c_.init(e, t);
}), b_ = /*@__PURE__*/ Y("ZodCUID2", (e, t) => {
	vp.init(e, t), c_.init(e, t);
}), x_ = /*@__PURE__*/ Y("ZodULID", (e, t) => {
	yp.init(e, t), c_.init(e, t);
}), S_ = /*@__PURE__*/ Y("ZodXID", (e, t) => {
	bp.init(e, t), c_.init(e, t);
}), C_ = /*@__PURE__*/ Y("ZodKSUID", (e, t) => {
	xp.init(e, t), c_.init(e, t);
}), w_ = /*@__PURE__*/ Y("ZodIPv4", (e, t) => {
	Ep.init(e, t), c_.init(e, t);
}), T_ = /*@__PURE__*/ Y("ZodIPv6", (e, t) => {
	kp.init(e, t), c_.init(e, t);
}), E_ = /*@__PURE__*/ Y("ZodCIDRv4", (e, t) => {
	Ap.init(e, t), c_.init(e, t);
}), D_ = /*@__PURE__*/ Y("ZodCIDRv6", (e, t) => {
	Mp.init(e, t), c_.init(e, t);
}), O_ = /*@__PURE__*/ Y("ZodBase64", (e, t) => {
	Pp.init(e, t), c_.init(e, t);
}), k_ = /*@__PURE__*/ Y("ZodBase64URL", (e, t) => {
	Ip.init(e, t), c_.init(e, t);
}), A_ = /*@__PURE__*/ Y("ZodE164", (e, t) => {
	Lp.init(e, t), c_.init(e, t);
}), j_ = /*@__PURE__*/ Y("ZodJWT", (e, t) => {
	zp.init(e, t), c_.init(e, t);
}), M_ = /*@__PURE__*/ Y("ZodNumber", (e, t) => {
	Bp.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => hg(e, t, n, r);
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
}, {
	gt(e, t) {
		return this.check(/* @__PURE__ */ kh(e, t));
	},
	gte(e, t) {
		return this.check(/* @__PURE__ */ Ah(e, t));
	},
	min(e, t) {
		return this.check(/* @__PURE__ */ Ah(e, t));
	},
	lt(e, t) {
		return this.check(/* @__PURE__ */ Dh(e, t));
	},
	lte(e, t) {
		return this.check(/* @__PURE__ */ Oh(e, t));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Oh(e, t));
	},
	int(e) {
		return this.check(P_(e));
	},
	safe(e) {
		return this.check(P_(e));
	},
	positive(e) {
		return this.check(/* @__PURE__ */ kh(0, e));
	},
	nonnegative(e) {
		return this.check(/* @__PURE__ */ Ah(0, e));
	},
	negative(e) {
		return this.check(/* @__PURE__ */ Dh(0, e));
	},
	nonpositive(e) {
		return this.check(/* @__PURE__ */ Oh(0, e));
	},
	multipleOf(e, t) {
		return this.check(/* @__PURE__ */ jh(e, t));
	},
	step(e, t) {
		return this.check(/* @__PURE__ */ jh(e, t));
	},
	finite() {
		return this;
	}
});
function Z(e) {
	return /* @__PURE__ */ Sh(M_, e);
}
var N_ = /*@__PURE__*/ Y("ZodNumberFormat", (e, t) => {
	Vp.init(e, t), M_.init(e, t);
});
function P_(e) {
	return /* @__PURE__ */ Ch(N_, e);
}
var F_ = /*@__PURE__*/ Y("ZodBoolean", (e, t) => {
	Hp.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => gg(e, t, n, r);
});
function I_(e) {
	return /* @__PURE__ */ wh(F_, e);
}
var L_ = /*@__PURE__*/ Y("ZodUnknown", (e, t) => {
	Up.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function R_() {
	return /* @__PURE__ */ Th(L_);
}
var z_ = /*@__PURE__*/ Y("ZodNever", (e, t) => {
	Wp.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => _g(e, t, n, r);
});
function B_(e) {
	return /* @__PURE__ */ Eh(z_, e);
}
var V_ = /*@__PURE__*/ Y("ZodArray", (e, t) => {
	i_(), Kp.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Sg(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ Nh(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ Nh(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Mh(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ Ph(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function H_(e, t) {
	return /* @__PURE__ */ qh(V_, e, t);
}
var U_ = /*@__PURE__*/ Y("ZodObject", (e, t) => {
	i_(), $p.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => wg(e, t, n, r), hd(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return tv(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone({
			...this._zod.def,
			catchall: e
		});
	},
	passthrough() {
		return this.clone({
			...this._zod.def,
			catchall: R_()
		});
	},
	loose() {
		return this.clone({
			...this._zod.def,
			catchall: R_()
		});
	},
	strict() {
		return this.clone({
			...this._zod.def,
			catchall: B_()
		});
	},
	strip() {
		return this.clone({
			...this._zod.def,
			catchall: void 0
		});
	},
	extend(e) {
		return Wu(this, e);
	},
	safeExtend(e) {
		return Gu(this, e);
	},
	merge(e) {
		return Ku(this, e);
	},
	pick(e) {
		return Hu(this, e);
	},
	omit(e) {
		return Uu(this, e);
	},
	partial(...e) {
		return qu(ov, this, e[0]);
	},
	exactPartial(...e) {
		return qu(cv, this, e[0], "exactPartial");
	},
	required(...e) {
		return Ju(gv, this, e[0]);
	}
});
function Q(e, t) {
	return new U_({
		type: "object",
		shape: e ?? {},
		...J(t)
	});
}
var W_ = /*@__PURE__*/ Y("ZodUnion", (e, t) => {
	tm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Tg(e, t, n, r), e.options = t.options;
});
function G_(e, t) {
	return new W_({
		type: "union",
		options: e,
		...J(t)
	});
}
var K_ = /*@__PURE__*/ Y("ZodDiscriminatedUnion", (e, t) => {
	W_.init(e, t), nm.init(e, t);
});
function q_(e, t, n) {
	return new K_({
		type: "union",
		options: t,
		discriminator: e,
		...J(n)
	});
}
var J_ = /*@__PURE__*/ Y("ZodIntersection", (e, t) => {
	rm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Eg(e, t, n, r);
});
function Y_(e, t) {
	return new J_({
		type: "intersection",
		left: e,
		right: t
	});
}
var X_ = /*@__PURE__*/ Y("ZodTuple", (e, t) => {
	i_(), om.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Dg(e, t, n, r);
}, {
	rest(e) {
		return this.clone({
			...this._zod.def,
			rest: e
		});
	},
	partial() {
		let e = this._zod.def;
		if (e.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
		return this.clone({
			...e,
			items: e.items.map((e) => new ov({
				type: "optional",
				innerType: e
			}))
		});
	}
});
function Z_(e, t, n) {
	let r = t instanceof tp;
	return new X_({
		type: "tuple",
		items: e,
		rest: r ? t : null,
		...J(r ? n : t)
	});
}
var Q_ = /*@__PURE__*/ Y("ZodRecord", (e, t) => {
	i_(), um.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => jg(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function $_(e, t, n) {
	return !t || !t._zod ? new Q_({
		type: "record",
		keyType: X(),
		valueType: e,
		...J(t)
	}) : new Q_({
		type: "record",
		keyType: e,
		valueType: t,
		...J(n)
	});
}
var ev = /*@__PURE__*/ Y("ZodEnum", (e, t) => {
	dm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => vg(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new ev({
			...t,
			checks: [],
			...J(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new ev({
			...t,
			checks: [],
			...J(r),
			entries: i
		});
	};
});
function tv(e, t) {
	return new ev({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...J(t)
	});
}
var nv = /*@__PURE__*/ Y("ZodLiteral", (e, t) => {
	fm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => yg(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function rv(e, t) {
	return new nv({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...J(t)
	});
}
var iv = /*@__PURE__*/ Y("ZodTransform", (e, t) => {
	i_(), pm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => xg(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Cd(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(ad(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(ad(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function av(e) {
	return new iv({
		type: "transform",
		transform: e
	});
}
var ov = /*@__PURE__*/ Y("ZodOptional", (e, t) => {
	hm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function sv(e) {
	return new ov({
		type: "optional",
		innerType: e
	});
}
var cv = /*@__PURE__*/ Y("ZodExactOptional", (e, t) => {
	gm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function lv(e) {
	return new cv({
		type: "optional",
		innerType: e
	});
}
var uv = /*@__PURE__*/ Y("ZodNullable", (e, t) => {
	_m.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Mg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function dv(e) {
	return new uv({
		type: "nullable",
		innerType: e
	});
}
var fv = /*@__PURE__*/ Y("ZodDefault", (e, t) => {
	vm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ig(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function pv(e, t) {
	return new fv({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Fu(t);
		}
	});
}
var mv = /*@__PURE__*/ Y("ZodPrefault", (e, t) => {
	bm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Lg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function hv(e, t) {
	return new mv({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Fu(t);
		}
	});
}
var gv = /*@__PURE__*/ Y("ZodNonOptional", (e, t) => {
	xm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ng(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function _v(e, t) {
	return new gv({
		type: "nonoptional",
		innerType: e,
		...J(t)
	});
}
var vv = /*@__PURE__*/ Y("ZodCatch", (e, t) => {
	wm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Rg(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function yv(e, t) {
	return new vv({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : _d(t)
	});
}
var bv = /*@__PURE__*/ Y("ZodPipe", (e, t) => {
	Tm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => zg(e, t, n, r), e.in = t.in, e.out = t.out;
});
function xv(e, t) {
	return new bv({
		type: "pipe",
		in: e,
		out: t
	});
}
var Sv = /*@__PURE__*/ Y("ZodReadonly", (e, t) => {
	Dm.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => Bg(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Cv(e) {
	return new Sv({
		type: "readonly",
		innerType: e
	});
}
var wv = /*@__PURE__*/ Y("ZodCustom", (e, t) => {
	km.init(e, t), a_.init(e, t), e._zod.processJSONSchema = (t, n, r) => bg(e, t, n, r);
});
function Tv(e, t = {}) {
	return /* @__PURE__ */ Jh(wv, e, t);
}
function Ev(e, t) {
	return /* @__PURE__ */ Yh(e, t);
}
//#endregion
//#region ../schema/src/manifest.ts
yu();
var Dv = Z_([
	Z(),
	Z(),
	Z()
]), Ov = Z_([Z(), Z()]), kv = X().min(1), Av = Q({
	type: rv("cubemap-tiles"),
	levels: H_(Z().int().positive()).min(1),
	tileSize: Z().int().positive().default(512),
	singleTileMaxLevel: Z().int().positive().default(1024),
	urlTemplate: X().min(1),
	ktx2Template: X().min(1).optional()
}).superRefine((e, t) => {
	for (let n = 1; n < e.levels.length; n++) if ((e.levels[n] ?? 0) <= (e.levels[n - 1] ?? 0)) {
		t.addIssue({
			code: "custom",
			path: ["levels"],
			message: "levels must be strictly ascending"
		});
		break;
	}
	for (let n of e.levels) n > e.singleTileMaxLevel && n % e.tileSize !== 0 && t.addIssue({
		code: "custom",
		path: ["levels"],
		message: `level ${n} is not a multiple of tileSize ${e.tileSize}`
	});
}), jv = Q({
	equirect: X().min(1),
	cubemap: X().min(1),
	confidence: X().min(1).optional()
}), Mv = Q({
	id: kv,
	position: Dv,
	yawOffset: Z(),
	floor: Z().int().default(0),
	room: kv.optional(),
	captureHeight: Z().positive().optional(),
	pano: Av,
	depth: jv.optional(),
	registrationConfidence: Z().min(0).max(1).optional()
}), Nv = Q({ edges: H_(Z_([kv, kv])) }), Pv = Q({
	id: kv,
	name: X(),
	floor: Z().int(),
	labelAnchor: Dv,
	polygon: H_(Ov).min(3).optional()
}), Fv = Q({
	lod: Z().int(),
	chunks: H_(X().min(1)),
	tris: Z().int().nonnegative().optional(),
	bytes: Z().int().nonnegative().optional(),
	textured: I_().optional()
}), Iv = Q({
	min: Dv,
	max: Dv
}), Lv = Q({
	tier: tv(["A", "B"]),
	lods: H_(Fv).default([]),
	surface: tv(["poisson", "tsdf"]).optional(),
	floorplanOrtho: X().optional(),
	bounds: Iv.optional()
}), Rv = Q({
	id: kv,
	kind: tv([
		"info",
		"photo",
		"video",
		"link"
	]),
	anchor: Dv,
	normal: Dv,
	title: X(),
	body: X().optional(),
	mediaUrl: X().optional()
}), zv = Q({
	id: kv,
	anchor: Dv,
	normal: Dv,
	imageUrl: X().min(1),
	widthM: Z().min(.05).max(10).default(.6),
	title: X().max(200).optional(),
	html: X().max(2e5).optional()
}), Bv = Q({
	cursorUrl: X().min(1).optional(),
	markerUrl: X().min(1).optional(),
	nadirUrl: X().min(1).optional(),
	music: Q({
		url: X().min(1),
		volume: Z().min(0).max(1).default(.5),
		loop: I_().default(!0)
	}).optional()
});
Q({
	hotspots: H_(zv),
	customization: Bv.optional()
});
var Vv = Q({
	sweep: kv,
	rotation: Dv,
	fov: Z().min(30).max(100).default(75),
	dwellMs: Z().int().nonnegative().default(3e3)
}), Hv = Q({
	id: kv,
	name: X(),
	startSweep: kv,
	startRotation: Dv.default([
		0,
		0,
		0
	]),
	brand: Q({
		name: X().optional(),
		logoUrl: X().optional()
	}).optional(),
	watermark: I_().default(!1)
}), Uv = Q({
	version: rv(3),
	tour: Hv,
	assetBase: X().min(1).refine((e) => e.endsWith("/"), "assetBase must end with a slash"),
	sweeps: H_(Mv).min(1),
	graph: Nv,
	rooms: H_(Pv).default([]),
	mesh: Lv.optional(),
	tags: H_(Rv).default([]),
	reel: H_(Vv).default([]),
	hotspots: H_(zv).default([]),
	customization: Bv.optional()
}).superRefine((e, t) => {
	let n = /* @__PURE__ */ new Set();
	e.sweeps.forEach((e, r) => {
		n.has(e.id) && t.addIssue({
			code: "custom",
			path: [
				"sweeps",
				r,
				"id"
			],
			message: `duplicate sweep id "${e.id}"`
		}), n.add(e.id);
	});
	let r = new Set(e.rooms.map((e) => e.id));
	e.sweeps.forEach((e, n) => {
		e.room && !r.has(e.room) && t.addIssue({
			code: "custom",
			path: [
				"sweeps",
				n,
				"room"
			],
			message: `unknown room "${e.room}"`
		});
	}), n.has(e.tour.startSweep) || t.addIssue({
		code: "custom",
		path: ["tour", "startSweep"],
		message: `startSweep "${e.tour.startSweep}" is not a sweep`
	}), e.graph.edges.forEach(([e, r], i) => {
		e === r && t.addIssue({
			code: "custom",
			path: [
				"graph",
				"edges",
				i
			],
			message: "self-edge"
		}), (!n.has(e) || !n.has(r)) && t.addIssue({
			code: "custom",
			path: [
				"graph",
				"edges",
				i
			],
			message: `edge references unknown sweep (${e}, ${r})`
		});
	});
	let i = /* @__PURE__ */ new Set();
	e.hotspots.forEach((e, n) => {
		i.has(e.id) && t.addIssue({
			code: "custom",
			path: [
				"hotspots",
				n,
				"id"
			],
			message: `duplicate hotspot id "${e.id}"`
		}), i.add(e.id);
	}), e.reel.forEach((e, r) => {
		n.has(e.sweep) || t.addIssue({
			code: "custom",
			path: [
				"reel",
				r,
				"sweep"
			],
			message: `unknown sweep "${e.sweep}"`
		});
	});
}), Wv = class extends Error {
	name = "ManifestError";
};
function Gv(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw new Wv("Manifest must be a JSON object");
	let t = e.version;
	if (t !== 3) throw new Wv(`Unsupported manifest version ${JSON.stringify(t)}; this player supports version 3`);
	let n = Uv.safeParse(e);
	if (!n.success) throw new Wv(`Invalid manifest:\n${zd(n.error)}`);
	return n.data;
}
function Kv(e, t, n = 1024) {
	return e <= n ? 1 : Math.max(1, Math.ceil(e / t));
}
function qv(e, t) {
	return e.replace(/\{(\w+)\}/g, (e, n) => {
		let r = t[n];
		if (r === void 0) throw Error(`template variable {${n}} missing`);
		return String(r);
	});
}
function Jv(e, t, n, r, i, a) {
	return e + qv(t.pano.urlTemplate, {
		level: n,
		f: r,
		x: i,
		y: a
	});
}
function Yv(e, t, n) {
	return t.depth ? e + qv(t.depth.cubemap, { f: n }) : null;
}
//#endregion
//#region ../schema/src/conventions.ts
var Xv = Math.PI / 180;
180 / Math.PI;
function Zv(e) {
	let [t, n, r] = e, i = Math.abs(t), a = Math.abs(n), o = Math.abs(r), s, c, l, u;
	return i >= a && i >= o ? (u = i, t > 0 ? (s = 0, c = -r, l = -n) : (s = 1, c = r, l = -n)) : a >= i && a >= o ? (u = a, n > 0 ? (s = 2, c = t, l = r) : (s = 3, c = t, l = -r)) : (u = o, r > 0 ? (s = 4, c = t, l = -n) : (s = 5, c = -t, l = -n)), {
		face: s,
		s: (c / u + 1) / 2,
		t: (l / u + 1) / 2
	};
}
function Qv(e) {
	let t = Math.cos(e), n = Math.sin(e);
	return [
		t,
		0,
		-n,
		0,
		1,
		0,
		n,
		0,
		t
	];
}
function $v(e) {
	return Qv(-e);
}
function ey(e, t) {
	return [
		(e[0] ?? 0) * t[0] + (e[3] ?? 0) * t[1] + (e[6] ?? 0) * t[2],
		(e[1] ?? 0) * t[0] + (e[4] ?? 0) * t[1] + (e[7] ?? 0) * t[2],
		(e[2] ?? 0) * t[0] + (e[5] ?? 0) * t[1] + (e[8] ?? 0) * t[2]
	];
}
function ty(e) {
	let t = (e + Math.PI) % (2 * Math.PI);
	return t < 0 && (t += 2 * Math.PI), t - Math.PI;
}
//#endregion
//#region ../schema/src/events.ts
var ny = tv([
	"inside",
	"dollhouse",
	"floorplan"
]), ry = Q({ ts: Z().int() }), iy = q_("kind", [
	ry.extend({
		kind: rv("view_start"),
		embed: I_(),
		referrer: X().max(2048).optional(),
		viewport: Z_([Z().int(), Z().int()]).optional()
	}),
	ry.extend({
		kind: rv("sweep_enter"),
		id: X(),
		dwell: Z().int().nonnegative().optional()
	}),
	ry.extend({
		kind: rv("mode_change"),
		mode: ny
	}),
	ry.extend({
		kind: rv("tag_click"),
		id: X()
	}),
	ry.extend({ kind: rv("reel_play") }),
	ry.extend({
		kind: rv("quality_step"),
		from: Z().int(),
		to: Z().int(),
		p90ms: Z().optional()
	})
]);
Q({
	tourId: X(),
	version: Z().int(),
	sessionId: X().min(8).max(64),
	events: H_(iy).min(1).max(100)
});
//#endregion
//#region ../schema/src/build.ts
var ay = tv([
	"ingest.validate",
	"stitch",
	"telemetry.extract",
	"pano.derivatives",
	"register",
	"register.refine",
	"depth.ml",
	"depth.stereo_fuse",
	"graph.build",
	"recon",
	"floorplan.bake",
	"manifest.assemble",
	"publish.draft"
]);
tv([
	"cpu",
	"stitch",
	"gpu",
	"gpu-big"
]);
var oy = tv([
	"UPLOADING",
	"VALIDATING",
	"STITCHING",
	"REGISTERING",
	"NEEDS_REVIEW",
	"PROCESSING",
	"DRAFT_READY",
	"ENHANCING",
	"READY",
	"FAILED",
	"CANCELLED"
]), sy = tv([
	"pending",
	"running",
	"done",
	"failed",
	"skipped"
]), cy = Q({
	node: ay,
	code: X(),
	message: X(),
	remediation: X().optional(),
	fileIds: H_(X()).optional(),
	transient: I_().default(!1)
}), ly = Q({
	status: sy,
	startedAt: Z().int().optional(),
	endedAt: Z().int().optional(),
	progress: Z().min(0).max(1).optional(),
	attempts: Z().int().nonnegative().default(0),
	logTail: H_(X()).max(50).default([]),
	costUsd: Z().nonnegative().optional()
});
Q({
	tourId: X(),
	version: Z().int(),
	state: oy,
	percent: Z().min(0).max(100),
	nodes: $_(ay, ly),
	etaSeconds: Z().nonnegative().optional(),
	error: cy.optional(),
	updatedAt: Z().int()
});
var uy = Q({
	tx: Z(),
	tz: Z(),
	yaw: Z()
}), dy = tv([
	"registered",
	"dead_reckoned",
	"failed"
]);
Q({
	components: H_(Q({
		id: X(),
		sweepIds: H_(X()).min(1),
		transform: uy.optional()
	})),
	sweeps: H_(Q({
		sweepId: X(),
		status: dy,
		confidence: Z().min(0).max(1),
		inliers: Z().int().nonnegative(),
		position: Dv,
		yawOffset: Z(),
		floor: Z().int()
	})),
	scaleSource: tv([
		"capture_height",
		"vslam_imu",
		"user_measurement",
		"none"
	]),
	depthDisagreement: H_(Q({
		sweepId: X(),
		ratio: Z()
	})).default([]),
	suggestedFixes: H_(Q({
		kind: tv([
			"reshoot",
			"join_components",
			"exclude",
			"check_position"
		]),
		sweepId: X().optional(),
		position: Dv.optional(),
		note: X()
	})).default([]),
	meanConfidence: Z().min(0).max(1),
	needsReview: I_()
}), Q({
	capturedAt: Z().int(),
	cameraModel: X().optional(),
	serial: X().optional(),
	firmware: X().optional(),
	iso: Z().optional(),
	shutterS: Z().optional(),
	gravityQuat: Z_([
		Z(),
		Z(),
		Z(),
		Z()
	]).optional(),
	yawPrior: Z().optional(),
	gps: Q({
		lat: Z(),
		lon: Z(),
		alt: Z().optional()
	}).optional(),
	captureHeight: Z().positive().optional(),
	blurScore: Z().optional(),
	source: tv([
		"insp",
		"insv_keyframe",
		"equirect"
	])
}), tv([
	"owner",
	"admin",
	"editor",
	"viewer"
]), tv([
	"free",
	"pro",
	"business"
]);
var fy = tv([
	"equirect",
	"insp",
	"insv",
	"floorplan"
]);
Q({
	tourId: X(),
	fileName: X().min(1).max(255),
	bytes: Z().int().positive(),
	contentType: X(),
	kind: fy
}), Q({
	uploadId: X(),
	key: X(),
	partUrls: H_(X()).min(1),
	partBytes: Z().int().positive()
});
var py = Q({
	id: X().optional(),
	position: Dv,
	yawOffset: Z(),
	floor: Z().int().default(0),
	roomId: X().nullable().optional(),
	captureHeight: Z().positive().optional(),
	sourceAssetId: X().optional(),
	orderIdx: Z().int().optional()
});
Q({
	tourId: X(),
	sweeps: H_(py).max(500)
}), Q({
	tourId: X(),
	edges: H_(Z_([X(), X()]))
});
var my = Q({
	bucket: X().min(1),
	key: X().min(1),
	url: X().url().optional()
}), hy = Q({
	depthSource: tv([
		"prior",
		"mono",
		"refined",
		"pano",
		"da3"
	]).default("da3"),
	useLargeModel: I_().default(!1),
	da3Model: X().default("depth-anything/DA3-BASE"),
	da3Res: Z().int().min(196).max(1036).default(504),
	da3Neighbours: Z().int().min(2).max(8).default(5),
	depthSize: X().regex(/^\d+x\d+$/).default("2048x1024"),
	voxel: Z().positive().optional(),
	truncation: Z().positive().optional(),
	captureHeight: Z().positive().default(1.5),
	atlas: Z().int().min(0).max(8192).default(4096)
});
Q({
	executionTimeoutMs: Z().int().min(6e4).max(864e5).default(216e5),
	ttlMs: Z().int().min(6e4).max(6048e5).default(864e5)
}), Q({
	contractVersion: rv(1),
	buildId: X().min(1),
	tourId: X().min(1),
	name: X().min(1).optional(),
	orgId: X().min(1),
	version: X().min(1),
	source: my,
	assetPrefix: X().min(1),
	params: hy.default(() => hy.parse({})),
	callbackToken: X().min(16)
});
var gy = Q({
	buildId: X(),
	state: oy,
	fraction: Z().min(0).max(1),
	message: X().optional(),
	nodes: $_(X(), ly).optional()
}), _y = Q({
	contractVersion: rv(1),
	buildId: X(),
	callbackToken: X(),
	state: oy,
	manifest: my.optional(),
	assetPrefix: X().optional(),
	report: Q({
		sweeps: Z().int(),
		registered: Z().int(),
		depthSource: X(),
		voxel: Z().optional(),
		truncation: Z().optional(),
		agreementWithinTruncation: Z().optional(),
		medianAbsError: Z().optional(),
		lods: H_(Q({
			lod: Z().int(),
			tris: Z().int(),
			bytes: Z().int()
		})),
		durationsSec: $_(X(), Z()).optional()
	}).optional(),
	errors: H_(cy).default([]),
	suggestedFixes: H_(Q({
		kind: X(),
		sweepId: X().optional(),
		note: X()
	})).default([])
});
Q({
	id: X(),
	status: tv([
		"IN_QUEUE",
		"IN_PROGRESS",
		"COMPLETED",
		"FAILED",
		"CANCELLED",
		"TIMED_OUT"
	]),
	output: G_([_y, gy]).optional(),
	error: X().optional(),
	executionTime: Z().optional(),
	delayTime: Z().optional()
});
//#endregion
//#region src/math/lod.ts
function vy(e, t, n) {
	return e / (2 * Math.tan(t / 2)) * (Math.PI / 2 / n);
}
function yy(e, t, n, r = .8) {
	let i = [...e].sort((e, t) => e - t), a = i[0] ?? 512;
	for (let e of i) vy(t, n, e) >= r && (a = e);
	let o = i.indexOf(a);
	return {
		show: a,
		prefetch: i[o + 1] ?? null
	};
}
function by(e) {
	return Math.round(e * e * 6 * 4 * 1.34);
}
//#endregion
//#region src/core/AssetSystem.ts
var xy = class {
	concurrency;
	pending = [];
	byUrl = /* @__PURE__ */ new Map();
	active = 0;
	constructor(e) {
		this.concurrency = e;
	}
	fetchBitmap(e, t) {
		let n = this.byUrl.get(e);
		if (n) return n.priority = Math.max(n.priority, t), n.promise;
		let r, i, a = new Promise((e, t) => {
			r = e, i = t;
		}), o = {
			url: e,
			priority: t,
			controller: new AbortController(),
			resolve: r,
			reject: i,
			promise: a
		};
		return this.byUrl.set(e, o), this.pending.push(o), this.pump(), a;
	}
	abortWhere(e) {
		for (let t of this.byUrl.values()) e(t.url) && t.controller.abort();
	}
	abortAll() {
		this.abortWhere(() => !0);
	}
	pump() {
		for (; this.active < this.concurrency && this.pending.length;) {
			this.pending.sort((e, t) => t.priority - e.priority);
			let e = this.pending.shift();
			if (!e) break;
			this.active++, this.run(e);
		}
	}
	async run(e) {
		try {
			let t = await fetch(e.url, {
				signal: e.controller.signal,
				credentials: "same-origin"
			});
			if (!t.ok) throw Error(`HTTP ${t.status} for ${e.url}`);
			let n = await t.blob(), r = await createImageBitmap(n, {
				imageOrientation: "none",
				premultiplyAlpha: "none",
				colorSpaceConversion: "none"
			});
			e.resolve(r);
		} catch (t) {
			e.reject(t);
		} finally {
			this.active--, this.byUrl.delete(e.url), this.pump();
		}
	}
}, Sy = class {
	textures = /* @__PURE__ */ new Map();
	loading = /* @__PURE__ */ new Map();
	lastUsed = 0;
	bytes() {
		let e = 0;
		for (let t of this.textures.keys()) e += by(t);
		return e;
	}
	best() {
		let e = null;
		for (let [t, n] of this.textures) (!e || t > e.level) && (e = {
			level: t,
			texture: n
		});
		return e;
	}
	dispose() {
		for (let e of this.textures.values()) {
			for (let t of e.images) typeof ImageBitmap < "u" && t instanceof ImageBitmap && t.close();
			e.dispose();
		}
		this.textures.clear();
	}
}, Cy = class {
	manifest;
	assetBase;
	sweeps = /* @__PURE__ */ new Map();
	adjacency = /* @__PURE__ */ new Map();
	levelCap = Infinity;
	desiredLevel = 1024;
	resident = /* @__PURE__ */ new Map();
	queue;
	budget;
	pinned = /* @__PURE__ */ new Set();
	currentPinned = null;
	clock = 0;
	constructor(e, t, n = {}) {
		this.manifest = e, this.assetBase = t, this.queue = new xy(n.concurrency ?? 8), this.budget = n.gpuBudgetBytes ?? (wy() ? 256 : 768) * 1024 * 1024;
		for (let t of e.sweeps) this.sweeps.set(t.id, t), this.adjacency.set(t.id, /* @__PURE__ */ new Set());
		for (let [t, n] of e.graph.edges) this.adjacency.get(t)?.add(n), this.adjacency.get(n)?.add(t);
	}
	sweep(e) {
		let t = this.sweeps.get(e);
		if (!t) throw Error(`unknown sweep "${e}"`);
		return t;
	}
	neighbors(e) {
		return [...this.adjacency.get(e) ?? []];
	}
	levelsOf(e) {
		return this.sweep(e).pano.levels.filter((e) => e <= this.levelCap);
	}
	capFor(e) {
		let t = this.levelsOf(e), n = Math.min(this.desiredLevel, this.levelCap), r = t.filter((e) => e <= n);
		return r[r.length - 1] ?? t[0] ?? 512;
	}
	transitionReadyLevel(e) {
		let t = this.levelsOf(e);
		return t.find((e) => e >= 1024) ?? t[t.length - 1] ?? 512;
	}
	isTransitionReady(e) {
		let t = this.transitionReadyLevel(e), n = this.resident.get(e);
		if (!n) return !1;
		for (let e of n.textures.keys()) if (e >= t) return !0;
		return !1;
	}
	hasLevel(e, t) {
		return this.resident.get(e)?.textures.has(t) ?? !1;
	}
	residentLevels(e) {
		return [...this.resident.get(e)?.textures.keys() ?? []].sort((e, t) => e - t);
	}
	bestTexture(e) {
		let t = this.resident.get(e);
		if (!t) return null;
		t.lastUsed = ++this.clock;
		let n = this.capFor(e), r = null, i = null;
		for (let [e, a] of t.textures) e <= n && (!r || e > r.level) && (r = {
			level: e,
			texture: a
		}), (!i || e < i.level) && (i = {
			level: e,
			texture: a
		});
		return r ?? i;
	}
	ensureLevel(e, t, n = 0) {
		let r = this.sweep(e), i = this.residentFor(e), a = i.textures.get(t);
		if (a) return Promise.resolve(a);
		let o = i.loading.get(t);
		if (o) return o;
		let s = this.loadLevel(r, t, n).then((e) => (i.textures.set(t, e), i.loading.delete(t), this.enforceBudget(), e), (e) => {
			throw i.loading.delete(t), e;
		});
		return i.loading.set(t, s), s;
	}
	async prefetchForTransition(e) {
		await this.ensureLevel(e, 512 <= this.levelCap ? Math.min(512, this.transitionReadyLevel(e)) : this.transitionReadyLevel(e), 10), await this.ensureLevel(e, this.transitionReadyLevel(e), 9);
	}
	prefetchAround(e) {
		let t = () => void 0, n = this.capFor(e);
		this.levelsOf(e).filter((e) => e <= n).forEach((n, r) => void this.ensureLevel(e, n, 8 - r).catch(t));
		let r = this.neighbors(e);
		for (let e of r) {
			this.ensureLevel(e, 512, 6).catch(t);
			let n = Math.min(this.transitionReadyLevel(e), this.capFor(e));
			n !== 512 && this.ensureLevel(e, n, 4).catch(t);
		}
		let i = /* @__PURE__ */ new Set();
		for (let t of r) for (let n of this.neighbors(t)) n !== e && !r.includes(n) && i.add(n);
		for (let e of i) this.ensureLevel(e, 512, 2).catch(t);
		this.dropLevelsAbove(n);
	}
	dropLevelsAbove(e) {
		for (let [t, n] of this.resident) {
			if (n.loading.size) continue;
			let r = [...n.textures.keys()].sort((e, t) => e - t);
			if (!(r.length <= 1)) {
				for (let i of r) if (i > e && n.textures.size > 1) {
					let e = n.textures.get(i);
					if (!e || t === this.currentPinned) continue;
					for (let t of e.images) typeof ImageBitmap < "u" && t instanceof ImageBitmap && t.close();
					e.dispose(), n.textures.delete(i);
				}
			}
		}
	}
	setPinned(e, t) {
		this.currentPinned = e, this.pinned = /* @__PURE__ */ new Set([e, ...this.neighbors(e)]), t && this.pinned.add(t), this.enforceBudget();
	}
	totalBytes() {
		let e = 0;
		for (let t of this.resident.values()) e += t.bytes();
		return e;
	}
	enforceBudget() {
		let e = this.totalBytes();
		if (e <= this.budget) return;
		let t = [...this.resident.entries()].filter(([e, t]) => !this.pinned.has(e) && t.loading.size === 0).sort((e, t) => e[1].lastUsed - t[1].lastUsed);
		for (let [n, r] of t) {
			if (e <= this.budget) break;
			e -= r.bytes(), r.dispose(), this.resident.delete(n);
		}
	}
	dispose() {
		this.queue.abortAll();
		for (let e of this.resident.values()) e.dispose();
		this.resident.clear();
	}
	residentFor(e) {
		let t = this.resident.get(e);
		return t || (t = new Sy(), this.resident.set(e, t)), t;
	}
	async loadLevel(e, t, n) {
		let r = Kv(t, e.pano.tileSize, e.pano.singleTileMaxLevel), i = await Promise.all([
			0,
			1,
			2,
			3,
			4,
			5
		].map((i) => this.loadFace(e, t, i, r, n))), a = new wa(i);
		return a.colorSpace = Gt, a.generateMipmaps = !0, a.minFilter = je, a.magFilter = L, a.flipY = !1, a.name = `${e.id}@${t}`, a.needsUpdate = !0, a;
	}
	async loadFace(e, t, n, r, i) {
		if (r === 1) return this.queue.fetchBitmap(Jv(this.assetBase, e, t, n, 0, 0), i);
		let a = e.pano.tileSize, o = [];
		for (let a = 0; a < r; a++) for (let s = 0; s < r; s++) o.push(this.queue.fetchBitmap(Jv(this.assetBase, e, t, n, s, a), i).then((e) => ({
			x: s,
			y: a,
			bmp: e
		})));
		let s = await Promise.all(o), c = new OffscreenCanvas(t, t), l = c.getContext("2d");
		if (!l) throw Error("OffscreenCanvas 2d context unavailable");
		for (let e of s) l.drawImage(e.bmp, e.x * a, e.y * a), e.bmp.close();
		return c.transferToImageBitmap();
	}
};
function wy() {
	return typeof navigator > "u" ? !1 : /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}
//#endregion
//#region src/core/Engine.ts
yu();
var Ty = [
	Infinity,
	1.25,
	1,
	1
], Ey = 20, Dy = 2e3, Oy = 500, ky = class {
	container;
	opts;
	renderer;
	scene = new sr();
	camera;
	canvas;
	stats = {
		fps: 0,
		frameMs: 0,
		p90ms: 0,
		drawCalls: 0,
		triangles: 0,
		qualityLevel: 0
	};
	qualityLevel = 0;
	onQualityStep;
	callbacks = /* @__PURE__ */ new Set();
	observer;
	samples = [];
	lastFrame = 0;
	lastStep = 0;
	running = !1;
	constructor(e, t = {}) {
		this.container = e, this.opts = t, this.renderer = new vu({
			antialias: t.antialias ?? !1,
			preserveDrawingBuffer: t.preserveDrawingBuffer ?? !1,
			powerPreference: "high-performance",
			alpha: !1,
			stencil: !1
		}), this.renderer.outputColorSpace = Gt, this.renderer.toneMapping = 0, this.renderer.autoClear = !0, this.renderer.setClearColor(0, 1), this.canvas = this.renderer.domElement, Object.assign(this.canvas.style, {
			display: "block",
			width: "100%",
			height: "100%",
			touchAction: "none",
			outline: "none"
		}), this.canvas.tabIndex = 0, e.appendChild(this.canvas), this.camera = new Do(75, 1, .05, 200), this.applyPixelRatio(), this.resize(), this.observer = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.resize()) : null, this.observer?.observe(e);
	}
	get size() {
		return {
			width: this.container.clientWidth || 1,
			height: this.container.clientHeight || 1
		};
	}
	get pixelRatio() {
		return this.renderer.getPixelRatio();
	}
	resize() {
		let { width: e, height: t } = this.size;
		this.renderer.setSize(e, t, !1), this.camera.aspect = e / t, this.camera.updateProjectionMatrix();
	}
	onFrame(e) {
		return this.callbacks.add(e), () => this.callbacks.delete(e);
	}
	start() {
		this.running || (this.running = !0, this.lastFrame = performance.now(), this.renderer.setAnimationLoop((e) => this.frame(e)));
	}
	stop() {
		this.running = !1, this.renderer.setAnimationLoop(null);
	}
	renderOnce() {
		this.renderer.render(this.scene, this.camera);
	}
	dispose() {
		this.stop(), this.observer?.disconnect(), this.callbacks.clear(), this.renderer.dispose(), this.canvas.remove();
	}
	frame(e) {
		let t = Math.min(e - this.lastFrame, 100);
		this.lastFrame = e;
		for (let n of this.callbacks) n(t, e);
		this.renderer.render(this.scene, this.camera), this.record(e, t);
	}
	record(e, t) {
		for (this.samples.push({
			t: e,
			ms: t
		}); this.samples.length && (this.samples[0]?.t ?? 0) < e - Oy;) this.samples.shift();
		let n = this.samples.map((e) => e.ms).sort((e, t) => e - t), r = n[Math.min(n.length - 1, Math.floor(n.length * .9))] ?? t, i = n.reduce((e, t) => e + t, 0) / Math.max(1, n.length), a = this.stats;
		if (a.frameMs = t, a.p90ms = r, a.fps = i > 0 ? 1e3 / i : 0, a.drawCalls = this.renderer.info.render.calls, a.triangles = this.renderer.info.render.triangles, a.qualityLevel = this.qualityLevel, (this.opts.adaptiveQuality ?? !0) && n.length >= 10 && r > Ey && e - this.lastStep > Dy && this.qualityLevel < Ty.length - 1) {
			let t = this.qualityLevel;
			this.qualityLevel++, this.lastStep = e, this.applyPixelRatio(), this.resize(), this.onQualityStep?.(t, this.qualityLevel, r);
		}
	}
	applyPixelRatio() {
		let e = Math.min(this.opts.maxPixelRatio ?? 2, Ty[this.qualityLevel] ?? 1), t = Math.min(typeof window < "u" && window.devicePixelRatio || 1, e);
		this.renderer.setPixelRatio(t);
	}
}, Ay = (e) => e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2, jy = (e) => -(Math.cos(Math.PI * e) - 1) / 2, My = (e) => e, Ny = {
	easeInOutCubic: Ay,
	easeInOutSine: jy,
	linear: My
}, Py = (e, t, n) => Math.min(n, Math.max(t, e)), Fy = (e) => Py(e, 0, 1), Iy = (e, t, n) => e + (t - e) * n;
function Ly(e, t, n) {
	let r = Fy((n - e) / (t - e));
	return r * r * (3 - 2 * r);
}
//#endregion
//#region src/core/Input.ts
yu();
var Ry = {
	minFov: 30,
	maxFov: 100,
	dragGain: 1,
	inertia: .92,
	stopVelocityDeg: .02,
	maxPitchDeg: 85,
	keyboardDegPerSecond: 70,
	clickMaxMovePx: 6,
	clickMaxMs: 500
}, zy = class {
	el;
	yaw = 0;
	pitch = 0;
	fov = 75;
	enabled = !0;
	onClick;
	onHover;
	onChange;
	opts;
	vYaw = 0;
	vPitch = 0;
	dragging = !1;
	lastX = 0;
	lastY = 0;
	downX = 0;
	downY = 0;
	downT = 0;
	moved = 0;
	pointers = /* @__PURE__ */ new Map();
	pinchDist = 0;
	pinchMid = null;
	panning = !1;
	keys = /* @__PURE__ */ new Set();
	orbitTarget = null;
	euler = new In(0, 0, 0, "YXZ");
	unbind;
	constructor(e, t = {}) {
		this.el = e, this.opts = {
			...Ry,
			...t
		};
		let n = (t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), r = [
			n("pointerdown", (e) => this.onPointerDown(e)),
			n("pointermove", (e) => this.onPointerMove(e)),
			n("pointerup", (e) => this.onPointerUp(e)),
			n("pointercancel", (e) => this.onPointerUp(e)),
			n("wheel", (e) => this.onWheel(e), { passive: !1 }),
			n("keydown", (e) => this.onKey(e, !0)),
			n("keyup", (e) => this.onKey(e, !1)),
			n("contextmenu", (e) => e.preventDefault()),
			n("blur", () => this.resetGesture())
		];
		this.unbind = () => r.forEach((e) => e());
	}
	update(e) {
		if (this.enabled) {
			if (!this.dragging) {
				this.rotateBy(this.vYaw, this.vPitch), this.vYaw *= this.opts.inertia, this.vPitch *= this.opts.inertia;
				let e = this.opts.stopVelocityDeg * Xv;
				Math.abs(this.vYaw) < e && (this.vYaw = 0), Math.abs(this.vPitch) < e && (this.vPitch = 0);
			}
			if (this.keys.size && this.enabled) {
				let t = this.opts.keyboardDegPerSecond * Xv * (e / 1e3);
				this.rotateBy((Number(this.keys.has("ArrowLeft")) - Number(this.keys.has("ArrowRight"))) * t, (Number(this.keys.has("ArrowUp")) - Number(this.keys.has("ArrowDown"))) * t);
			}
			this.clampAngles();
		}
	}
	quaternion(e = new ln()) {
		return this.euler.set(this.pitch, this.yaw, 0, "YXZ"), e.setFromEuler(this.euler);
	}
	setFromQuaternion(e) {
		this.euler.setFromQuaternion(e, "YXZ"), this.yaw = this.euler.y, this.pitch = this.euler.x, this.vYaw = 0, this.vPitch = 0, this.clampAngles();
	}
	setAngles(e, t) {
		this.pitch = e, this.yaw = t, this.vYaw = 0, this.vPitch = 0, this.clampAngles();
	}
	setFov(e) {
		this.fov = Py(e, this.opts.minFov, this.opts.maxFov), this.onChange?.();
	}
	setOrbitTarget(e) {
		e !== this.orbitTarget && (this.resetGesture(), this.orbitTarget = e);
	}
	dispose() {
		this.unbind(), this.pointers.clear(), this.keys.clear();
	}
	radPerPx() {
		return this.fov * Xv / (this.el.clientHeight || 1) * this.opts.dragGain;
	}
	rotateBy(e, t) {
		this.orbitTarget ? this.orbitTarget.orbitBy(-e, t) : (this.yaw += e, this.pitch += t, this.clampAngles());
	}
	zoomBy(e) {
		this.orbitTarget ? this.orbitTarget.zoomBy(e) : this.setFov(this.fov * e);
	}
	resetGesture() {
		for (let e of this.pointers.keys()) this.el.hasPointerCapture?.(e) && this.el.releasePointerCapture(e);
		this.pointers.clear(), this.keys.clear(), this.dragging = !1, this.pinchDist = 0, this.pinchMid = null, this.panning = !1, this.vYaw = this.vPitch = 0, this.moved = Infinity;
	}
	ndcOf(e, t) {
		let n = this.el.getBoundingClientRect();
		return new B((e - n.left) / n.width * 2 - 1, -((t - n.top) / n.height * 2 - 1));
	}
	onPointerDown(e) {
		this.enabled && (this.el.focus?.(), this.el.setPointerCapture?.(e.pointerId), this.pointers.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		}), this.pointers.size === 1 ? (this.dragging = !0, this.panning = !!this.orbitTarget?.panBy && (e.button === 1 || e.button === 2 || e.shiftKey), this.lastX = this.downX = e.clientX, this.lastY = this.downY = e.clientY, this.downT = performance.now(), this.moved = 0, this.vYaw = 0, this.vPitch = 0) : this.pointers.size === 2 && (this.pinchDist = this.pinchDistance(), this.pinchMid = this.pinchMidpoint(), this.moved = Infinity, this.vYaw = this.vPitch = 0));
	}
	onPointerMove(e) {
		if (!this.enabled) return;
		if (!this.pointers.has(e.pointerId)) {
			this.onHover?.(this.ndcOf(e.clientX, e.clientY));
			return;
		}
		if (this.pointers.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		}), this.pointers.size === 2) {
			let e = this.pinchDistance();
			this.pinchDist > 0 && e > 0 && this.zoomBy(this.pinchDist / e), this.pinchDist = e;
			let t = this.pinchMidpoint();
			this.pinchMid && t && this.orbitTarget?.panBy && this.orbitTarget.panBy(t.x - this.pinchMid.x, t.y - this.pinchMid.y, this.el.clientHeight || 1, this.fov * Xv), this.pinchMid = t;
			return;
		}
		if (!this.dragging) return;
		let t = e.clientX - this.lastX, n = e.clientY - this.lastY;
		if (this.lastX = e.clientX, this.lastY = e.clientY, this.moved += Math.abs(t) + Math.abs(n), this.panning && this.orbitTarget?.panBy) {
			this.orbitTarget.panBy(t, n, this.el.clientHeight || 1, this.fov * Xv), this.onChange?.();
			return;
		}
		let r = this.radPerPx(), i = t * r, a = n * r;
		this.rotateBy(i, a), this.vYaw = i, this.vPitch = a, this.clampAngles(), this.onChange?.();
	}
	onPointerUp(e) {
		let t = this.pointers.delete(e.pointerId);
		if (this.el.hasPointerCapture?.(e.pointerId) && this.el.releasePointerCapture(e.pointerId), t) {
			if (this.pointers.size === 0) this.dragging = !1, this.panning = !1, this.pinchMid = null, e.type === "pointerup" && this.moved <= this.opts.clickMaxMovePx && performance.now() - this.downT <= this.opts.clickMaxMs && (this.vYaw = 0, this.vPitch = 0, this.onClick?.({
				ndc: this.ndcOf(e.clientX, e.clientY),
				clientX: e.clientX,
				clientY: e.clientY,
				button: e.button
			}));
			else if (this.pointers.size === 1) {
				let [e] = this.pointers.values();
				e && (this.lastX = e.x, this.lastY = e.y), this.pinchDist = 0, this.pinchMid = null;
			}
		}
	}
	onWheel(e) {
		if (!this.enabled) return;
		e.preventDefault();
		let t = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
		this.zoomBy(Math.exp(t * .001));
	}
	onKey(e, t) {
		this.enabled && [
			"ArrowLeft",
			"ArrowRight",
			"ArrowUp",
			"ArrowDown"
		].includes(e.key) && (e.preventDefault(), t ? this.keys.add(e.key) : this.keys.delete(e.key));
	}
	pinchDistance() {
		let e = [...this.pointers.values()];
		if (e.length < 2) return 0;
		let t = e[0], n = e[1];
		return Math.hypot(t.x - n.x, t.y - n.y);
	}
	pinchMidpoint() {
		let e = [...this.pointers.values()];
		return e.length < 2 ? null : {
			x: (e[0].x + e[1].x) / 2,
			y: (e[0].y + e[1].y) / 2
		};
	}
	clampAngles() {
		let e = this.opts.maxPitchDeg * Xv;
		this.pitch = Py(this.pitch, -e, e), this.yaw = ty(this.yaw);
	}
}, By = 10 * Math.PI / 180, Vy = 80 * Math.PI / 180, Hy = (e, t, n) => e < t ? t : e > n ? n : e, Uy = (e) => e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2, Wy = 1e9, Gy = class {
	mode = "inside";
	onChange;
	orbit = {
		target: [
			0,
			0,
			0
		],
		radius: 10,
		yaw: 0,
		pitch: 35 * Math.PI / 180
	};
	bounds = null;
	radiusRange = [1, 100];
	clipHeight;
	floorY = 0;
	flightMs;
	flightStart = 0;
	flightFrom = null;
	flightTo = "inside";
	t = 0;
	constructor(e = {}) {
		this.clipHeight = e.ceilingClip ?? 2.6, this.flightMs = e.flightMs ?? 1200;
	}
	fit(e, t = 0) {
		this.bounds = e, this.setFloorElevation(t);
		let [n, r, i] = e.min, [a, o, s] = e.max, c = (n + a) / 2, l = (i + s) / 2;
		this.orbit.target = [
			c,
			t + Math.min(1.5, Math.max(0, o - t) * .35),
			l
		];
		let u = .5 * Math.hypot(a - n, s - i);
		this.radiusRange = [Math.max(1.5, .25 * u), Math.max(2, 3 * u)], this.orbit.radius = Hy(1.6 * u, this.radiusRange[0], this.radiusRange[1]);
	}
	setFloorElevation(e) {
		if (!Number.isFinite(e)) throw Error("floor elevation must be finite");
		let t = e - this.floorY;
		this.floorY = e, this.orbit.target[1] += t;
	}
	orbitEye() {
		let { target: e, radius: t, yaw: n, pitch: r } = this.orbit, i = Math.cos(r) * t;
		return [
			e[0] + i * Math.sin(n),
			e[1] + Math.sin(r) * t,
			e[2] + i * Math.cos(n)
		];
	}
	orbitBy(e, t) {
		this.orbit.yaw += e, this.orbit.pitch = Hy(this.orbit.pitch + t, By, Vy);
	}
	zoomBy(e) {
		this.orbit.radius = Hy(this.orbit.radius * e, this.radiusRange[0], this.radiusRange[1]);
	}
	panBy(e, t, n, r) {
		let i = 2 * Math.tan(r / 2) * this.orbit.radius / Math.max(1, n), { yaw: a, pitch: o } = this.orbit, s = Math.cos(a), c = -Math.sin(a), l = -Math.sin(a), u = -Math.cos(a), d = 1 / Math.max(.35, Math.sin(o)), f = this.orbit.target;
		f[0] += (-e * s + t * d * l) * i, f[2] += (-e * c + t * d * u) * i, this.bounds && (f[0] = Hy(f[0], this.bounds.min[0] - 1, this.bounds.max[0] + 1), f[2] = Hy(f[2], this.bounds.min[2] - 1, this.bounds.max[2] + 1));
	}
	setMode(e, t, n = performance.now()) {
		if (e === this.mode) return;
		if (e === "floorplan") throw Error("setMode(\"floorplan\") is not implemented yet — spec §4.1");
		if (e === "dollhouse" && !this.bounds) throw Error("dollhouse needs a mesh: call fit(bounds) once the Tier A mesh has loaded");
		let r = this.mode;
		this.mode = e, this.flightTo = e, this.flightFrom = t ?? null, this.flightStart = n, this.onChange?.(e, r);
	}
	update(e, t, n) {
		let r = +(this.flightTo === "dollhouse");
		if (this.flightFrom) {
			let t = Hy((e - this.flightStart) / this.flightMs, 0, 1), n = Uy(t);
			this.t = r === 1 ? n : 1 - n, t >= 1 && (this.flightFrom = null);
		} else this.t = r;
		let i = this.t > 0, a = this.orbitEye(), o = this.orbit.target, s = (e, t) => e + (t - e) * this.t, c = [
			s(t[0], a[0]),
			s(t[1], a[1]),
			s(t[2], a[2])
		], l = [
			s(n[0], o[0]),
			s(n[1], o[1]),
			s(n[2], o[2])
		], u = this.t > .01 ? this.floorY + this.clipHeight + (1 - this.t) * 50 : Wy;
		return {
			mode: this.mode,
			flying: i,
			t: this.t,
			eye: c,
			lookAt: l,
			modeMix: this.t,
			clipY: u
		};
	}
};
//#endregion
//#region src/core/Navigation.ts
function Ky(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.sweeps) t.set(n.id, /* @__PURE__ */ new Set());
	for (let [n, r] of e.graph.edges) t.get(n)?.add(r), t.get(r)?.add(n);
	return t;
}
function qy(e, t) {
	return Math.hypot(e.position[0] - t.position[0], e.position[1] - t.position[1], e.position[2] - t.position[2]);
}
function Jy(e, t) {
	let n = /* @__PURE__ */ new Set([t]), r = [t];
	for (; r.length;) {
		let t = r.pop();
		for (let i of e.get(t) ?? []) n.has(i) || (n.add(i), r.push(i));
	}
	return n;
}
function Yy(e, t, n, r) {
	if (n === r) return [n];
	let i = t.get(n), a = t.get(r);
	if (!i || !a) return null;
	let o = (e) => qy(t.get(e), a), s = /* @__PURE__ */ new Map([[n, 0]]), c = /* @__PURE__ */ new Map([[n, o(n)]]), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set([n]);
	for (; u.size;) {
		let n = null, i = Infinity;
		for (let e of u) {
			let t = c.get(e) ?? Infinity;
			t < i && (i = t, n = e);
		}
		if (n === null) break;
		if (n === r) {
			let e = [r], t = r;
			for (; l.has(t);) t = l.get(t), e.push(t);
			return e.reverse();
		}
		u.delete(n);
		let a = t.get(n);
		for (let r of e.get(n) ?? []) {
			let e = t.get(r);
			if (!e) continue;
			let i = (s.get(n) ?? Infinity) + qy(a, e);
			i < (s.get(r) ?? Infinity) && (l.set(r, n), s.set(r, i), c.set(r, i + o(r)), u.add(r));
		}
	}
	return null;
}
function Xy(e, t, n, r, i, a = {}) {
	let o = a.maxFloorSnapM ?? 3.5, s = a.wallFarM ?? 4, c = Math.cos((a.gazeConeDeg ?? 45) * Xv), l = Math.cos((a.floorNormalDeg ?? 25) * Xv);
	if (e.kind === "floor" || e.normal.y >= l) {
		let i = Jy(r, t.id), a = null, s = o;
		for (let r of n.values()) {
			if (r.id === t.id || r.floor !== t.floor || !i.has(r.id)) continue;
			let n = Math.hypot(r.position[0] - e.point.x, r.position[2] - e.point.z);
			n < s && (s = n, a = r);
		}
		if (!a) return null;
		let c = Yy(r, n, t.id, a.id) ?? [t.id, a.id];
		return {
			target: a,
			path: c,
			reason: "floor"
		};
	}
	if (e.kind === "wall" && e.distance >= s) {
		let e = i.x, a = i.z, o = Math.hypot(e, a) || 1, s = null, l = 0;
		for (let i of r.get(t.id) ?? []) {
			let r = n.get(i);
			if (!r) continue;
			let u = r.position[0] - t.position[0], d = r.position[2] - t.position[2], f = Math.hypot(u, d);
			f < 1e-6 || (u * e + d * a) / (f * o) >= c && f > l && (l = f, s = r);
		}
		return s ? {
			target: s,
			path: [t.id, s.id],
			reason: "wall-gaze"
		} : null;
	}
	return null;
}
function Zy(e, t, n = {}) {
	let r = null, i = Infinity, a = null, o = Infinity;
	for (let s of t) {
		if (s.id === n.exclude || n.floor !== void 0 && s.floor !== n.floor) continue;
		let t = Math.hypot(s.position[0] - e.x, s.position[2] - e.z);
		t < i && (i = t, r = s), n.preferred?.has(s.id) && t < o && (o = t, a = s);
	}
	return a ?? r;
}
//#endregion
//#region src/core/depthCube.ts
yu();
function Qy(e) {
	let t = (e & 32768) >> 15, n = (e & 31744) >> 10, r = e & 1023, i;
	return i = n === 0 ? r / 1024 * 2 ** -14 : n === 31 ? r === 0 ? Infinity : NaN : (1 + r / 1024) * 2 ** (n - 15), t ? -i : i;
}
function $y(e, t = 256) {
	let n = e.map((e) => {
		let n = new Ri(e, t, t, Ye, Re);
		return n.needsUpdate = !0, n;
	}), r = new wa(n);
	return r.format = Ye, r.type = Re, r.minFilter = L, r.magFilter = L, r.wrapS = P, r.wrapT = P, r.generateMipmaps = !1, r.flipY = !1, r.unpackAlignment = 2, r.needsUpdate = !0, r;
}
async function eb(e, t) {
	if (!t.depth) return null;
	let n = [];
	for (let r = 0; r < 6; r++) {
		let i = Yv(e, t, r);
		if (!i) return null;
		n.push(i);
	}
	let r = await Promise.all(n.map(async (e, n) => {
		let r = await fetch(e);
		if (!r.ok) throw Error(`depth face ${n} for ${t.id}: HTTP ${r.status}`);
		let i = new Uint16Array(await r.arrayBuffer());
		if (i.length !== 65536) throw Error(`depth face ${n} for ${t.id}: expected 256² samples, got ${i.length}`);
		return i;
	}));
	return {
		faces: r.map((e) => {
			let t = new Float32Array(e.length);
			for (let n = 0; n < e.length; n++) t[n] = Qy(e[n]);
			return t;
		}),
		texture: $y(r)
	};
}
//#endregion
//#region src/core/ProjectionSurface.ts
yu();
function tb(e) {
	return e.position[1] - (e.captureHeight ?? 1.5);
}
var nb = new V(0, 1, 0), rb = class {
	radius;
	shellSwapT;
	tier = "C";
	object;
	geometry;
	sphere = new Kr();
	plane = new ea();
	tmp = new V();
	constructor(e, t = 5, n = .5) {
		this.radius = t, this.shellSwapT = n, this.geometry = new Pa(t, 64, 48), this.object = new Ei(this.geometry, e), this.object.frustumCulled = !1, this.object.name = "tf-sphere-surface";
	}
	setShellSwapT(e) {
		this.shellSwapT = e;
	}
	update(e, t, n) {
		let r = t && n >= this.shellSwapT ? t : e;
		this.object.position.set(r.position[0], r.position[1], r.position[2]);
	}
	raycast(e, t) {
		if (e.direction.y < -.02) {
			this.plane.set(nb, -tb(t));
			let n = e.intersectPlane(this.plane, this.tmp);
			if (n) return {
				point: n.clone(),
				normal: nb.clone(),
				distance: e.origin.distanceTo(n),
				kind: "floor"
			};
		}
		this.sphere.center.set(t.position[0], t.position[1], t.position[2]), this.sphere.radius = this.radius;
		let n = e.intersectSphere(this.sphere, this.tmp);
		if (!n) return null;
		let r = this.sphere.center.clone().sub(n).normalize(), i = n.y - t.position[1] > this.radius * .6 ? "ceiling" : "wall";
		return {
			point: n.clone(),
			normal: r,
			distance: e.origin.distanceTo(n),
			kind: i
		};
	}
	isReady() {
		return !0;
	}
	dispose() {
		this.geometry.dispose();
	}
};
//#endregion
//#region src/core/DepthShell.ts
yu();
var ib = .3, ab = 12, ob = [
	0,
	1,
	3,
	7,
	15,
	31,
	63
], sb = 6, cb = class {
	baseGeometry;
	directions;
	constructor(e = sb) {
		let t = ob[Math.max(0, Math.min(6, Math.round(e)))] ?? 63;
		this.baseGeometry = new Ma(1, t);
		let n = this.baseGeometry.getAttribute("position");
		this.directions = new Float32Array(n.array.length);
		for (let e = 0; e < n.count; e++) {
			let t = n.getX(e), r = n.getY(e), i = n.getZ(e), a = Math.hypot(t, r, i) || 1;
			this.directions[e * 3] = t / a, this.directions[e * 3 + 1] = r / a, this.directions[e * 3 + 2] = i / a;
		}
	}
	get base() {
		return this.baseGeometry;
	}
	build(e) {
		let t = this.baseGeometry.clone(), n = t.getAttribute("position"), r = n.count, i = new Float32Array(r), a = [
			0,
			0,
			0
		];
		for (let t = 0; t < r; t++) a[0] = this.directions[t * 3], a[1] = this.directions[t * 3 + 1], a[2] = this.directions[t * 3 + 2], i[t] = ub(e, a);
		let o = new Float32Array(r), s = t.getIndex(), c = new Float32Array(r), l = new Uint16Array(r);
		if (s) for (let e = 0; e < s.count; e += 3) {
			let t = s.getX(e), n = s.getX(e + 1), r = s.getX(e + 2);
			for (let [e, a] of [
				[t, n],
				[n, r],
				[r, t]
			]) c[e] = (c[e] ?? 0) + (i[a] ?? 0), l[e] = (l[e] ?? 0) + 1, c[a] = (c[a] ?? 0) + (i[e] ?? 0), l[a] = (l[a] ?? 0) + 1;
		}
		for (let e = 0; e < r; e++) {
			let t = l[e] || 1, n = c[e] / t, r = Math.abs(i[e] - n) / Math.max(.25, i[e]);
			o[e] = Math.max(0, 1 - Math.min(1, r * 4));
		}
		for (let e = 0; e < r; e++) {
			let t = i[e];
			n.setXYZ(e, this.directions[e * 3] * t, this.directions[e * 3 + 1] * t, this.directions[e * 3 + 2] * t);
		}
		return n.needsUpdate = !0, t.setAttribute("confidence", new zr(o, 1)), t.computeBoundingSphere(), t;
	}
	dispose() {
		this.baseGeometry.dispose();
	}
};
function lb(e, t, n = 1) {
	e.position.set(t.position[0], t.position[1], t.position[2]), e.rotation.set(0, t.yawOffset, 0), e.scale.setScalar(n);
}
function ub(e, t) {
	let { face: n, s: r, t: i } = Zv(t), a = e[n];
	if (!a) return ab;
	let o = r * 256 - .5, s = i * 256 - .5, c = Math.max(0, Math.min(255, Math.floor(o))), l = Math.max(0, Math.min(255, Math.floor(s))), u = Math.min(255, c + 1), d = Math.min(255, l + 1), f = Math.max(0, Math.min(1, o - c)), p = Math.max(0, Math.min(1, s - l)), m = a[l * 256 + c] * (1 - f) * (1 - p) + a[l * 256 + u] * f * (1 - p) + a[d * 256 + c] * (1 - f) * p + a[d * 256 + u] * f * p;
	return Number.isFinite(m) && m > 0 ? Math.min(ab, Math.max(ib, m)) : ab;
}
var db = class {
	assetBase;
	shellSwapT;
	tier = "B";
	object;
	shells = /* @__PURE__ */ new Map();
	loading = /* @__PURE__ */ new Map();
	builder;
	raycaster = new ts();
	current = null;
	constructor(e, t, n = sb, r = .5) {
		this.assetBase = t, this.shellSwapT = r, this.builder = new cb(n), this.object = new Ei(this.builder.base, e), this.object.frustumCulled = !1, this.object.name = "tf-depth-shell", this.object.visible = !1;
	}
	setShellSwapT(e) {
		this.shellSwapT = e;
	}
	isReady(e) {
		return this.shells.has(e);
	}
	depthTextureFor(e) {
		return this.shells.get(e)?.cube.texture ?? null;
	}
	depthFacesFor(e) {
		return this.shells.get(e)?.cube.faces ?? null;
	}
	ensure(e) {
		let t = this.shells.get(e.id);
		if (t) return Promise.resolve(t);
		let n = this.loading.get(e.id);
		if (n) return n;
		let r = eb(this.assetBase, e).then((t) => {
			if (!t) return null;
			let n = {
				geometry: this.builder.build(t.faces),
				cube: t
			};
			return this.shells.set(e.id, n), this.loading.delete(e.id), n;
		}).catch((t) => (this.loading.delete(e.id), console.warn("[tourforge] depth shell failed", t), null));
		return this.loading.set(e.id, r), r;
	}
	update(e, t, n) {
		let r = t && n >= this.shellSwapT ? t : e, i = this.shells.get(r.id);
		if (!i) {
			this.object.visible = !1;
			return;
		}
		this.current !== r.id && (this.object.geometry = i.geometry, this.current = r.id), lb(this.object, r), this.object.visible = !0;
	}
	raycast(e, t) {
		if (!this.object.visible) return null;
		this.raycaster.set(e.origin, e.direction), this.object.updateMatrixWorld();
		let n = this.raycaster.intersectObject(this.object, !1)[0];
		if (!n) return null;
		let r = n.face ? n.face.normal.clone().applyNormalMatrix(new H().getNormalMatrix(this.object.matrixWorld)).normalize() : e.direction.clone().negate();
		r.dot(e.direction) > 0 && r.negate();
		let i = tb(t), a = Math.abs(n.point.y - i) < .35 ? "floor" : r.y < -.5 ? "ceiling" : "wall";
		return {
			point: n.point.clone(),
			normal: r,
			distance: n.distance,
			kind: a
		};
	}
	dispose() {
		for (let e of this.shells.values()) e.geometry.dispose(), e.cube.texture.dispose();
		this.shells.clear(), this.builder.dispose();
	}
};
//#endregion
//#region src/shaders/dualProjector.ts
yu();
var fb = "\nprecision highp float;\nin vec3 position;\n#ifdef HAS_DEPTH\nin float confidence;\n#endif\n#ifdef HAS_MESH_COLOR\nin vec3 color;          // glTF COLOR_0, baked from the panoramas (addendum §C3.2)\nin vec2 uv;             // glTF TEXCOORD_0 into the baked atlas, when the mesh carries one\n#endif\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nout vec3 vWorld;\nout float vConf;\nout vec3 vMeshColor;\nout vec2 vMeshUv;\nvoid main() {\n  vec4 w = modelMatrix * vec4(position, 1.0);\n  vWorld = w.xyz;\n#ifdef HAS_DEPTH\n  vConf = confidence;\n#else\n  vConf = 0.0;\n#endif\n#ifdef HAS_MESH_COLOR\n  vMeshColor = color;\n  vMeshUv = uv;\n#else\n  vMeshColor = vec3(0.5);\n  vMeshUv = vec2(0.0);\n#endif\n  gl_Position = projectionMatrix * viewMatrix * w;\n}\n", pb = "\nprecision highp float;\nin vec3 vWorld;\nin float vConf;\nin vec3 vMeshColor;\nin vec2 vMeshUv;\n// The baked UV atlas, and how much to prefer it over the per-vertex colour. Per-vertex colour\n// has the resolution of the VERTEX SPACING — 6-12 cm here — so a patterned floor reads as a\n// smear; the atlas is ~1 cm. Bound to a 1x1 white texture with meshTexMix = 0 until a mesh\n// that actually has an atlas is loaded, which avoids a second material variant and a shader\n// recompile just to switch between them.\nuniform sampler2D meshTex;\nuniform float meshTexMix;\nuniform float modeMix;            // 0 = pure pano projection, 1 = the model's own colour\nuniform samplerCube panoA;        // colour cube map of sweep A\nuniform vec3 posA;                // sweep A optical centre (world)\nuniform mat3 rotA;                // world → pano-local (yawOffset)\n#ifndef SINGLE\nuniform samplerCube panoB;\nuniform vec3 posB;\nuniform mat3 rotB;\nuniform float blend;              // 0..1 over the transition\n#endif\n#ifdef HAS_DEPTH\nuniform samplerCube depthA;       // 256px R16F depth cube maps (meters)\n#ifndef SINGLE\nuniform samplerCube depthB;\n#endif\nuniform float occBias;            // ~0.10 m\n#endif\nuniform int debugSplit;           // 1 = left half projector A only, right half B only\nuniform vec2 resolution;\n// Dollhouse cuts the ceiling away so the model can be seen into. RawShaderMaterial gets none of\n// three.js's clipping-plane injection, so it is done here: one plane, world Y, discard above it.\nuniform float clipY;\nout vec4 fragColor;\n\nvec3 linearToSRGB(vec3 c) {\n  vec3 lo = c * 12.92;\n  vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;\n  return mix(lo, hi, step(vec3(0.0031308), c));\n}\n\n#ifdef HAS_DEPTH\nfloat visibility(samplerCube depthTex, vec3 sweepPos, mat3 rot, vec3 world) {\n  vec3 toFrag = world - sweepPos;\n  float dist  = length(toFrag);\n  vec3 dir    = rot * normalize(toFrag);\n  float seen  = texture(depthTex, dir).r;   // depth the sweep actually saw that way\n  // If the sweep saw something much CLOSER than this fragment, the fragment is occluded\n  // from that sweep — its projection there is stretched garbage; fade it out.\n  // The tolerance GROWS WITH DISTANCE. A 256-px depth face spans ~0.35 deg per texel, so on a\n  // ceiling or floor seen at a grazing angle one texel covers tens of centimetres of depth, and\n  // a fixed 10 cm band flips A/B weight texel by texel: a blocky cut-out pattern that showed\n  // mid-walk on every ceiling. Depth error grows with range too (~7 cm agreement at 2-3 m).\n  float tol = occBias + 0.05 * dist;\n  return smoothstep(-tol * 2.0, 0.0, seen - dist + tol);\n}\n#endif\n\nvoid main() {\n  if (vWorld.y > clipY) discard;\n  vec3 dA = rotA * normalize(vWorld - posA);\n  vec3 cA = texture(panoA, dA).rgb;\n#ifdef SINGLE\n  vec3 col = cA;\n#else\n  vec3 dB = rotB * normalize(vWorld - posB);\n  vec3 cB = texture(panoB, dB).rgb;\n  float visA = 1.0;\n  float visB = 1.0;\n#ifdef HAS_DEPTH\n  visA = mix(1.0, visibility(depthA, posA, rotA, vWorld), vConf);\n  visB = mix(1.0, visibility(depthB, posB, rotB, vWorld), vConf);\n#endif\n  float wA = (1.0 - blend) * visA;\n  float wB = blend * visB;\n  float s  = wA + wB;\n  // If neither projector can see this fragment, fall back to the raw blend (least-bad).\n  vec3 col = s > 1e-4 ? (cA * wA + cB * wB) / s : mix(cA, cB, blend);\n  if (debugSplit == 1) {\n    col = gl_FragCoord.x < resolution.x * 0.5 ? cA : cB;\n  }\n#endif\n  // Third source (spec §1.5.3): the mesh's own baked colour. Ramping modeMix up mid-flight\n  // reveals the reconstructed model between the two panoramas; Dollhouse/Floor Plan hold it\n  // at 1. One material, three sources, two mix uniforms.\n  vec3 meshCol = mix(vMeshColor, texture(meshTex, vMeshUv).rgb, clamp(meshTexMix, 0.0, 1.0));\n  col = mix(col, meshCol, clamp(modeMix, 0.0, 1.0));\n  fragColor = vec4(linearToSRGB(col), 1.0);\n}\n", mb = null;
function hb() {
	return mb || (mb = new Ri(new Uint8Array([
		255,
		255,
		255,
		255
	]), 1, 1), mb.needsUpdate = !0), mb;
}
function gb(e = {}) {
	let t = {};
	e.single && (t.SINGLE = ""), e.hasDepth && (t.HAS_DEPTH = ""), e.hasMeshColor && (t.HAS_MESH_COLOR = "");
	let n = {
		panoA: { value: null },
		posA: { value: new V() },
		rotA: { value: new H() },
		panoB: { value: null },
		posB: { value: new V() },
		rotB: { value: new H() },
		blend: { value: 0 },
		depthA: { value: null },
		depthB: { value: null },
		occBias: { value: .1 },
		modeMix: { value: 0 },
		meshTex: { value: hb() },
		meshTexMix: { value: 0 },
		debugSplit: { value: 0 },
		resolution: { value: new B(1, 1) },
		clipY: { value: 1e9 }
	}, r = new za({
		glslVersion: Zt,
		vertexShader: fb,
		fragmentShader: pb,
		uniforms: n,
		defines: t,
		side: e.side ?? 1,
		depthTest: !0,
		depthWrite: !0,
		toneMapped: !1
	});
	return r.name = e.single ? "tf-projector-single" : "tf-projector-dual", r;
}
//#endregion
//#region ../../node_modules/.pnpm/three@0.185.1/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js
function _b(e, t) {
	if (t === 0) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
	if (t === 2 || t === 1) {
		let n = e.getIndex();
		if (n === null) {
			let t = [], r = e.getAttribute("position");
			if (r !== void 0) {
				for (let e = 0; e < r.count; e++) t.push(e);
				e.setIndex(t), n = e.getIndex();
			} else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
		}
		let r = n.count - 2, i = [];
		if (t === 2) for (let e = 1; e <= r; e++) i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1));
		else for (let e = 0; e < r; e++) e % 2 == 0 ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2))) : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
		i.length / 3 !== r && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
		let a = e.clone();
		return a.setIndex(i), a.clearGroups(), a;
	}
	return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
}
var vb = t((() => {
	yu();
}));
//#endregion
//#region ../../node_modules/.pnpm/three@0.185.1/node_modules/three/examples/jsm/utils/SkeletonUtils.js
function yb(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = e.clone();
	return bb(e, r, function(e, r) {
		t.set(r, e), n.set(e, r);
	}), r.traverse(function(e) {
		if (!e.isSkinnedMesh) return;
		let r = e, i = t.get(e), a = i.skeleton.bones;
		r.skeleton = i.skeleton.clone(), r.bindMatrix.copy(i.bindMatrix), r.skeleton.bones = a.map(function(e) {
			return n.get(e);
		}), r.bind(r.skeleton, r.bindMatrix);
	}), r;
}
function bb(e, t, n) {
	n(e, t);
	for (let r = 0; r < e.children.length; r++) bb(e.children[r], t.children[r], n);
}
var xb = t((() => {})), Sb = /* @__PURE__ */ n({ GLTFLoader: () => Ib });
function Cb() {
	let e = {};
	return {
		get: function(t) {
			return e[t];
		},
		add: function(t, n) {
			e[t] = n;
		},
		remove: function(t) {
			delete e[t];
		},
		removeAll: function() {
			e = {};
		}
	};
}
function wb(e, t, n) {
	let r = e.json.materials[t];
	return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
function Tb(e) {
	return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new Ba({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: !1,
		depthTest: !0,
		side: 0
	})), e.DefaultMaterial;
}
function Eb(e, t, n) {
	for (let r in n.extensions) e[r] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r]);
}
function Db(e, t) {
	t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Ob(e, t, n) {
	let r = !1, i = !1, a = !1;
	for (let e = 0, n = t.length; e < n; e++) {
		let n = t[e];
		if (n.POSITION !== void 0 && (r = !0), n.NORMAL !== void 0 && (i = !0), n.COLOR_0 !== void 0 && (a = !0), r && i && a) break;
	}
	if (!r && !i && !a) return Promise.resolve(e);
	let o = [], s = [], c = [];
	for (let l = 0, u = t.length; l < u; l++) {
		let u = t[l];
		if (r) {
			let t = u.POSITION === void 0 ? e.attributes.position : n.getDependency("accessor", u.POSITION);
			o.push(t);
		}
		if (i) {
			let t = u.NORMAL === void 0 ? e.attributes.normal : n.getDependency("accessor", u.NORMAL);
			s.push(t);
		}
		if (a) {
			let t = u.COLOR_0 === void 0 ? e.attributes.color : n.getDependency("accessor", u.COLOR_0);
			c.push(t);
		}
	}
	return Promise.all([
		Promise.all(o),
		Promise.all(s),
		Promise.all(c)
	]).then(function(t) {
		let n = t[0], o = t[1], s = t[2];
		return r && (e.morphAttributes.position = n), i && (e.morphAttributes.normal = o), a && (e.morphAttributes.color = s), e.morphTargetsRelative = !0, e;
	});
}
function kb(e, t) {
	if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
	if (t.extras && Array.isArray(t.extras.targetNames)) {
		let n = t.extras.targetNames;
		if (e.morphTargetInfluences.length === n.length) {
			e.morphTargetDictionary = {};
			for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t;
		} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
	}
}
function Ab(e) {
	let t, n = e.extensions && e.extensions[$.KHR_DRACO_MESH_COMPRESSION];
	if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + jb(n.attributes) : e.indices + ":" + jb(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + jb(e.targets[n]);
	return t;
}
function jb(e) {
	let t = "", n = Object.keys(e).sort();
	for (let r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
	return t;
}
function Mb(e) {
	switch (e) {
		case Int8Array: return 1 / 127;
		case Uint8Array: return 1 / 255;
		case Int16Array: return 1 / 32767;
		case Uint16Array: return 1 / 65535;
		default: throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
	}
}
function Nb(e) {
	return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
function Pb(e, t, n) {
	let r = t.attributes, i = new Sr();
	if (r.POSITION !== void 0) {
		let e = n.json.accessors[r.POSITION], t = e.min, a = e.max;
		if (t !== void 0 && a !== void 0) {
			if (i.set(new V(t[0], t[1], t[2]), new V(a[0], a[1], a[2])), e.normalized) {
				let t = Mb(fx[e.componentType]);
				i.min.multiplyScalar(t), i.max.multiplyScalar(t);
			}
		} else {
			console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			return;
		}
	} else return;
	let a = t.targets;
	if (a !== void 0) {
		let e = new V(), t = new V();
		for (let r = 0, i = a.length; r < i; r++) {
			let i = a[r];
			if (i.POSITION !== void 0) {
				let r = n.json.accessors[i.POSITION], a = r.min, o = r.max;
				if (a !== void 0 && o !== void 0) {
					if (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), r.normalized) {
						let e = Mb(fx[r.componentType]);
						t.multiplyScalar(e);
					}
					e.max(t);
				} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			}
		}
		i.expandByVector(e);
	}
	e.boundingBox = i;
	let o = new Kr();
	i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, e.boundingSphere = o;
}
function Fb(e, t, n) {
	let r = t.attributes, i = [];
	function a(t, r) {
		return n.getDependency("accessor", t).then(function(t) {
			e.setAttribute(r, t);
		});
	}
	for (let t in r) {
		let n = gx[t] || t.toLowerCase();
		n in e.attributes || i.push(a(r[t], n));
	}
	if (t.indices !== void 0 && !e.index) {
		let r = n.getDependency("accessor", t.indices).then(function(t) {
			e.setIndex(t);
		});
		i.push(r);
	}
	return U.workingColorSpace !== "srgb-linear" && "COLOR_0" in r && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${U.workingColorSpace}" not supported.`), Db(e, t), Pb(e, t, n), Promise.all(i).then(function() {
		return t.targets === void 0 ? e : Ob(e, t.targets, n);
	});
}
var Ib, $, Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb, Yb, Xb, Zb, Qb, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx = t((() => {
	yu(), vb(), xb(), Ib = class extends so {
		constructor(e) {
			super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
				return new Bb(e);
			}), this.register(function(e) {
				return new Vb(e);
			}), this.register(function(e) {
				return new Xb(e);
			}), this.register(function(e) {
				return new Zb(e);
			}), this.register(function(e) {
				return new Qb(e);
			}), this.register(function(e) {
				return new Ub(e);
			}), this.register(function(e) {
				return new Wb(e);
			}), this.register(function(e) {
				return new Gb(e);
			}), this.register(function(e) {
				return new Kb(e);
			}), this.register(function(e) {
				return new zb(e);
			}), this.register(function(e) {
				return new qb(e);
			}), this.register(function(e) {
				return new Hb(e);
			}), this.register(function(e) {
				return new Yb(e);
			}), this.register(function(e) {
				return new Jb(e);
			}), this.register(function(e) {
				return new Lb(e);
			}), this.register(function(e) {
				return new $b(e, $.EXT_MESHOPT_COMPRESSION);
			}), this.register(function(e) {
				return new $b(e, $.KHR_MESHOPT_COMPRESSION);
			}), this.register(function(e) {
				return new ex(e);
			});
		}
		load(e, t, n, r) {
			let i = this, a;
			if (this.resourcePath !== "") a = this.resourcePath;
			else if (this.path !== "") {
				let t = Fo.extractUrlBase(e);
				a = Fo.resolveURL(t, this.path);
			} else a = Fo.extractUrlBase(e);
			this.manager.itemStart(e);
			let o = function(t) {
				r ? r(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e);
			}, s = new uo(this.manager);
			s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(n) {
				try {
					i.parse(n, a, function(n) {
						t(n), i.manager.itemEnd(e);
					}, o);
				} catch (e) {
					o(e);
				}
			}, n, o);
		}
		setDRACOLoader(e) {
			return this.dracoLoader = e, this;
		}
		setKTX2Loader(e) {
			return this.ktx2Loader = e, this;
		}
		setMeshoptDecoder(e) {
			return this.meshoptDecoder = e, this;
		}
		register(e) {
			return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
		}
		unregister(e) {
			return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
		}
		parse(e, t, n, r) {
			let i, a = {}, o = {}, s = new TextDecoder();
			if (typeof e == "string") i = JSON.parse(e);
			else if (e instanceof ArrayBuffer) {
				if (s.decode(new Uint8Array(e, 0, 4)) === tx) {
					try {
						a[$.KHR_BINARY_GLTF] = new ix(e);
					} catch (e) {
						r && r(e);
						return;
					}
					i = JSON.parse(a[$.KHR_BINARY_GLTF].content);
				} else i = JSON.parse(s.decode(e));
			} else i = e;
			if (i.asset === void 0 || i.asset.version[0] < 2) {
				r && r(/* @__PURE__ */ Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
				return;
			}
			let c = new xx(i, {
				path: t || this.resourcePath || "",
				crossOrigin: this.crossOrigin,
				requestHeader: this.requestHeader,
				manager: this.manager,
				ktx2Loader: this.ktx2Loader,
				meshoptDecoder: this.meshoptDecoder
			});
			c.fileLoader.setRequestHeader(this.requestHeader);
			for (let e = 0; e < this.pluginCallbacks.length; e++) {
				let t = this.pluginCallbacks[e](c);
				t.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[t.name] = t, a[t.name] = !0;
			}
			if (i.extensionsUsed) for (let e = 0; e < i.extensionsUsed.length; ++e) {
				let t = i.extensionsUsed[e], n = i.extensionsRequired || [];
				switch (t) {
					case $.KHR_MATERIALS_UNLIT:
						a[t] = new Rb();
						break;
					case $.KHR_DRACO_MESH_COMPRESSION:
						a[t] = new ax(i, this.dracoLoader);
						break;
					case $.KHR_TEXTURE_TRANSFORM:
						a[t] = new ox();
						break;
					case $.KHR_MESH_QUANTIZATION:
						a[t] = new sx();
						break;
					default: n.indexOf(t) >= 0 && o[t] === void 0 && console.warn("THREE.GLTFLoader: Unknown extension \"" + t + "\".");
				}
			}
			c.setExtensions(a), c.setPlugins(o), c.parse(n, r);
		}
		parseAsync(e, t) {
			let n = this;
			return new Promise(function(r, i) {
				n.parse(e, t, r, i);
			});
		}
	}, $ = {
		KHR_BINARY_GLTF: "KHR_binary_glTF",
		KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
		KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
		KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
		KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
		KHR_MATERIALS_IOR: "KHR_materials_ior",
		KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
		KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
		KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
		KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
		KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
		KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
		KHR_MATERIALS_VOLUME: "KHR_materials_volume",
		KHR_TEXTURE_BASISU: "KHR_texture_basisu",
		KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
		KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
		KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
		EXT_MATERIALS_BUMP: "EXT_materials_bump",
		EXT_TEXTURE_WEBP: "EXT_texture_webp",
		EXT_TEXTURE_AVIF: "EXT_texture_avif",
		EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
		KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
		EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
	}, Lb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_LIGHTS_PUNCTUAL, this.cache = {
				refs: {},
				uses: {}
			};
		}
		_markDefs() {
			let e = this.parser, t = this.parser.json.nodes || [];
			for (let n = 0, r = t.length; n < r; n++) {
				let r = t[n];
				r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
			}
		}
		_loadLight(e) {
			let t = this.parser, n = "light:" + e, r = t.cache.get(n);
			if (r) return r;
			let i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e], o, s = new G(16777215);
			a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], Kt);
			let c = a.range === void 0 ? 0 : a.range;
			switch (a.type) {
				case "directional":
					o = new Po(s), o.target.position.set(0, 0, -1), o.add(o.target);
					break;
				case "point":
					o = new jo(s), o.distance = c;
					break;
				case "spot":
					o = new ko(s), o.distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle, a.spot.outerConeAngle = a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle, o.angle = a.spot.outerConeAngle, o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
					break;
				default: throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
			}
			return o.position.set(0, 0, 0), Db(o, a), a.intensity !== void 0 && (o.intensity = a.intensity), o.name = t.createUniqueName(a.name || "light_" + e), r = Promise.resolve(o), t.cache.add(n, r), r;
		}
		getDependency(e, t) {
			if (e === "light") return this._loadLight(t);
		}
		createNodeAttachment(e) {
			let t = this, n = this.parser, r = n.json.nodes[e], i = (r.extensions && r.extensions[this.name] || {}).light;
			return i === void 0 ? null : this._loadLight(i).then(function(e) {
				return n._getNodeRef(t.cache, i, e);
			});
		}
	}, Rb = class {
		constructor() {
			this.name = $.KHR_MATERIALS_UNLIT;
		}
		getMaterialType() {
			return mi;
		}
		extendParams(e, t, n) {
			let r = [];
			e.color = new G(1, 1, 1), e.opacity = 1;
			let i = t.pbrMetallicRoughness;
			if (i) {
				if (Array.isArray(i.baseColorFactor)) {
					let t = i.baseColorFactor;
					e.color.setRGB(t[0], t[1], t[2], Kt), e.opacity = t[3];
				}
				i.baseColorTexture !== void 0 && r.push(n.assignTexture(e, "map", i.baseColorTexture, Gt));
			}
			return Promise.all(r);
		}
	}, zb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_EMISSIVE_STRENGTH;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			return n === null || n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength), Promise.resolve();
		}
	}, Bb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_CLEARCOAT;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			if (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (r.push(this.parser.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
				let e = n.clearcoatNormalTexture.scale;
				t.clearcoatNormalScale = new B(e, e);
			}
			return Promise.all(r);
		}
	}, Vb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_DISPERSION;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			return n === null || (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion), Promise.resolve();
		}
	}, Hb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_IRIDESCENCE;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(r);
		}
	}, Ub = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_SHEEN;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			if (t.sheenColor = new G(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, n.sheenColorFactor !== void 0) {
				let e = n.sheenColorFactor;
				t.sheenColor.setRGB(e[0], e[1], e[2], Kt);
			}
			return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenColorMap", n.sheenColorTexture, Gt)), n.sheenRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(r);
		}
	}, Wb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_TRANSMISSION;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && r.push(this.parser.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(r);
		}
	}, Gb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_VOLUME;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor, n.thicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || Infinity;
			let i = n.attenuationColor || [
				1,
				1,
				1
			];
			return t.attenuationColor = new G().setRGB(i[0], i[1], i[2], Kt), Promise.all(r);
		}
	}, Kb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_IOR;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			return n === null ? Promise.resolve() : (t.ior = n.ior === void 0 ? 1.5 : n.ior, t.ior === 0 && (t.ior = 1e3), Promise.resolve());
		}
	}, qb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_SPECULAR;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			t.specularIntensity = n.specularFactor === void 0 ? 1 : n.specularFactor, n.specularTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularIntensityMap", n.specularTexture));
			let i = n.specularColorFactor || [
				1,
				1,
				1
			];
			return t.specularColor = new G().setRGB(i[0], i[1], i[2], Kt), n.specularColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularColorMap", n.specularColorTexture, Gt)), Promise.all(r);
		}
	}, Jb = class {
		constructor(e) {
			this.parser = e, this.name = $.EXT_MATERIALS_BUMP;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			return t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor, n.bumpTexture !== void 0 && r.push(this.parser.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(r);
		}
	}, Yb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_MATERIALS_ANISOTROPY;
		}
		getMaterialType(e) {
			return wb(this.parser, e, this.name) === null ? null : Va;
		}
		extendMaterialParams(e, t) {
			let n = wb(this.parser, e, this.name);
			if (n === null) return Promise.resolve();
			let r = [];
			return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && r.push(this.parser.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(r);
		}
	}, Xb = class {
		constructor(e) {
			this.parser = e, this.name = $.KHR_TEXTURE_BASISU;
		}
		loadTexture(e) {
			let t = this.parser, n = t.json, r = n.textures[e];
			if (!r.extensions || !r.extensions[this.name]) return null;
			let i = r.extensions[this.name], a = t.options.ktx2Loader;
			if (!a) {
				if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
				return null;
			}
			return t.loadTextureImage(e, i.source, a);
		}
	}, Zb = class {
		constructor(e) {
			this.parser = e, this.name = $.EXT_TEXTURE_WEBP;
		}
		loadTexture(e) {
			let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
			if (!i.extensions || !i.extensions[t]) return null;
			let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
			if (o.uri) {
				let e = n.options.manager.getHandler(o.uri);
				e !== null && (s = e);
			}
			return n.loadTextureImage(e, a.source, s);
		}
	}, Qb = class {
		constructor(e) {
			this.parser = e, this.name = $.EXT_TEXTURE_AVIF;
		}
		loadTexture(e) {
			let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
			if (!i.extensions || !i.extensions[t]) return null;
			let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
			if (o.uri) {
				let e = n.options.manager.getHandler(o.uri);
				e !== null && (s = e);
			}
			return n.loadTextureImage(e, a.source, s);
		}
	}, $b = class {
		constructor(e, t) {
			this.name = t, this.parser = e;
		}
		loadBufferView(e) {
			let t = this.parser.json, n = t.bufferViews[e];
			if (n.extensions && n.extensions[this.name]) {
				let e = n.extensions[this.name], r = this.parser.getDependency("buffer", e.buffer), i = this.parser.options.meshoptDecoder;
				if (!i || !i.supported) {
					if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
					return null;
				}
				return r.then(function(t) {
					let n = e.byteOffset || 0, r = e.byteLength || 0, a = e.count, o = e.byteStride, s = new Uint8Array(t, n, r);
					return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(a, o, s, e.mode, e.filter).then(function(e) {
						return e.buffer;
					}) : i.ready.then(function() {
						let t = new ArrayBuffer(a * o);
						return i.decodeGltfBuffer(new Uint8Array(t), a, o, s, e.mode, e.filter), t;
					});
				});
			}
			return null;
		}
	}, ex = class {
		constructor(e) {
			this.name = $.EXT_MESH_GPU_INSTANCING, this.parser = e;
		}
		createNodeMesh(e) {
			let t = this.parser.json, n = t.nodes[e];
			if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
			let r = t.meshes[n.mesh];
			for (let e of r.primitives) if (e.mode !== dx.TRIANGLES && e.mode !== dx.TRIANGLE_STRIP && e.mode !== dx.TRIANGLE_FAN && e.mode !== void 0) return null;
			let i = n.extensions[this.name].attributes, a = [], o = {};
			for (let e in i) a.push(this.parser.getDependency("accessor", i[e]).then((t) => (o[e] = t, o[e])));
			return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((e) => {
				let t = e.pop(), n = t.isGroup ? t.children : [t], r = e[0].count, i = [];
				for (let e of n) {
					let t = new W(), n = new V(), a = new ln(), s = new V(1, 1, 1), c = new Xi(e.geometry, e.material, r);
					for (let e = 0; e < r; e++) o.TRANSLATION && n.fromBufferAttribute(o.TRANSLATION, e), o.ROTATION && a.fromBufferAttribute(o.ROTATION, e), o.SCALE && s.fromBufferAttribute(o.SCALE, e), c.setMatrixAt(e, t.compose(n, a, s));
					for (let t in o) if (t === "_COLOR_0") {
						let e = o[t];
						c.instanceColor = new Hi(e.array, e.itemSize, e.normalized);
					} else t !== "TRANSLATION" && t !== "ROTATION" && t !== "SCALE" && e.geometry.setAttribute(t, o[t]);
					$n.prototype.copy.call(c, e), this.parser.assignFinalMaterial(c), i.push(c);
				}
				return t.isGroup ? (t.clear(), t.add(...i), t) : i[0];
			}));
		}
	}, tx = "glTF", nx = 12, rx = {
		JSON: 1313821514,
		BIN: 5130562
	}, ix = class {
		constructor(e) {
			this.name = $.KHR_BINARY_GLTF, this.content = null, this.body = null;
			let t = new DataView(e, 0, nx), n = new TextDecoder();
			if (this.header = {
				magic: n.decode(new Uint8Array(e.slice(0, 4))),
				version: t.getUint32(4, !0),
				length: t.getUint32(8, !0)
			}, this.header.magic !== tx) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
			if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
			let r = this.header.length - nx, i = new DataView(e, nx), a = 0;
			for (; a < r;) {
				let t = i.getUint32(a, !0);
				a += 4;
				let r = i.getUint32(a, !0);
				if (a += 4, r === rx.JSON) {
					let r = new Uint8Array(e, nx + a, t);
					this.content = n.decode(r);
				} else if (r === rx.BIN) {
					let n = nx + a;
					this.body = e.slice(n, n + t);
				}
				a += t;
			}
			if (this.content === null) throw Error("THREE.GLTFLoader: JSON content not found.");
		}
	}, ax = class {
		constructor(e, t) {
			if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
			this.name = $.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
		}
		decodePrimitive(e, t) {
			let n = this.json, r = this.dracoLoader, i = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, s = {}, c = {};
			for (let e in a) {
				let t = gx[e] || e.toLowerCase();
				o[t] = a[e];
			}
			for (let t in e.attributes) {
				let r = gx[t] || t.toLowerCase();
				if (a[t] !== void 0) {
					let i = n.accessors[e.attributes[t]];
					c[r] = fx[i.componentType].name, s[r] = i.normalized === !0;
				}
			}
			return t.getDependency("bufferView", i).then(function(e) {
				return new Promise(function(t, n) {
					r.decodeDracoFile(e, function(e) {
						for (let t in e.attributes) {
							let n = e.attributes[t], r = s[t];
							r !== void 0 && (n.normalized = r);
						}
						t(e);
					}, o, c, Kt, n);
				});
			});
		}
	}, ox = class {
		constructor() {
			this.name = $.KHR_TEXTURE_TRANSFORM;
		}
		extendTexture(e, t) {
			return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 ? e : (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0, e);
		}
	}, sx = class {
		constructor() {
			this.name = $.KHR_MESH_QUANTIZATION;
		}
	}, cx = class extends Wa {
		constructor(e, t, n, r) {
			super(e, t, n, r);
		}
		copySampleValue_(e) {
			let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r * 3 + r;
			for (let e = 0; e !== r; e++) t[e] = n[i + e];
			return t;
		}
		interpolate_(e, t, n, r) {
			let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = o * 2, c = o * 3, l = r - t, u = (n - t) / l, d = u * u, f = d * u, p = e * c, m = p - c, h = -2 * f + 3 * d, g = f - d, _ = 1 - h, v = g - d + u;
			for (let e = 0; e !== o; e++) {
				let t = a[m + e + o], n = a[m + e + s] * l, r = a[p + e + o], c = a[p + e] * l;
				i[e] = _ * t + v * n + h * r + g * c;
			}
			return i;
		}
	}, lx = new ln(), ux = class extends cx {
		interpolate_(e, t, n, r) {
			let i = super.interpolate_(e, t, n, r);
			return lx.fromArray(i).normalize().toArray(i), i;
		}
	}, dx = {
		FLOAT: 5126,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		POINTS: 0,
		LINES: 1,
		LINE_LOOP: 2,
		LINE_STRIP: 3,
		TRIANGLES: 4,
		TRIANGLE_STRIP: 5,
		TRIANGLE_FAN: 6,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123
	}, fx = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	}, px = {
		9728: F,
		9729: L,
		9984: Ae,
		9985: R,
		9986: I,
		9987: je
	}, mx = {
		33071: P,
		33648: ke,
		10497: Oe
	}, hx = {
		SCALAR: 1,
		VEC2: 2,
		VEC3: 3,
		VEC4: 4,
		MAT2: 4,
		MAT3: 9,
		MAT4: 16
	}, gx = {
		POSITION: "position",
		NORMAL: "normal",
		TANGENT: "tangent",
		TEXCOORD_0: "uv",
		TEXCOORD_1: "uv1",
		TEXCOORD_2: "uv2",
		TEXCOORD_3: "uv3",
		COLOR_0: "color",
		WEIGHTS_0: "skinWeight",
		JOINTS_0: "skinIndex"
	}, _x = {
		scale: "scale",
		translation: "position",
		rotation: "quaternion",
		weights: "morphTargetInfluences"
	}, vx = {
		CUBICSPLINE: void 0,
		LINEAR: Lt,
		STEP: It
	}, yx = {
		OPAQUE: "OPAQUE",
		MASK: "MASK",
		BLEND: "BLEND"
	}, bx = new W(), xx = class {
		constructor(e = {}, t = {}) {
			this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Cb(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
				refs: {},
				uses: {}
			}, this.cameraCache = {
				refs: {},
				uses: {}
			}, this.lightCache = {
				refs: {},
				uses: {}
			}, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
			let n = !1, r = -1, i = !1, a = -1;
			if (typeof navigator < "u" && navigator.userAgent !== void 0) {
				let e = navigator.userAgent;
				n = /^((?!chrome|android).)*safari/i.test(e) === !0;
				let t = e.match(/Version\/(\d+)/);
				r = n && t ? parseInt(t[1], 10) : -1, i = e.indexOf("Firefox") > -1, a = i ? e.match(/Firefox\/([0-9]+)\./)[1] : -1;
			}
			this.textureLoader = typeof createImageBitmap > "u" || n && r < 17 || i && a < 98 ? new mo(this.options.manager) : new Lo(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new uo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
		}
		setExtensions(e) {
			this.extensions = e;
		}
		setPlugins(e) {
			this.plugins = e;
		}
		parse(e, t) {
			let n = this, r = this.json, i = this.extensions;
			this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
				return e._markDefs && e._markDefs();
			}), Promise.all(this._invokeAll(function(e) {
				return e.beforeRoot && e.beforeRoot();
			})).then(function() {
				return Promise.all([
					n.getDependencies("scene"),
					n.getDependencies("animation"),
					n.getDependencies("camera")
				]);
			}).then(function(t) {
				let a = {
					scene: t[0][r.scene || 0],
					scenes: t[0],
					animations: t[1],
					cameras: t[2],
					asset: r.asset,
					parser: n,
					userData: {}
				};
				return Eb(i, a, r), Db(a, r), Promise.all(n._invokeAll(function(e) {
					return e.afterRoot && e.afterRoot(a);
				})).then(function() {
					for (let e of a.scenes) e.updateMatrixWorld();
					e(a);
				});
			}).catch(t);
		}
		_markDefs() {
			let e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
			for (let n = 0, r = t.length; n < r; n++) {
				let r = t[n].joints;
				for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
			}
			for (let t = 0, r = e.length; t < r; t++) {
				let r = e[t];
				r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
			}
		}
		_addNodeRef(e, t) {
			t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
		}
		_getNodeRef(e, t, n) {
			if (e.refs[t] <= 1) return n;
			let r = n.clone(), i = (e, t) => {
				let n = this.associations.get(e);
				n != null && this.associations.set(t, n);
				for (let [n, r] of e.children.entries()) i(r, t.children[n]);
			};
			return i(n, r), r.name += "_instance_" + e.uses[t]++, r;
		}
		_invokeOne(e) {
			let t = Object.values(this.plugins);
			t.push(this);
			for (let n = 0; n < t.length; n++) {
				let r = e(t[n]);
				if (r) return r;
			}
			return null;
		}
		_invokeAll(e) {
			let t = Object.values(this.plugins);
			t.unshift(this);
			let n = [];
			for (let r = 0; r < t.length; r++) {
				let i = e(t[r]);
				i && n.push(i);
			}
			return n;
		}
		getDependency(e, t) {
			let n = e + ":" + t, r = this.cache.get(n);
			if (!r) {
				switch (e) {
					case "scene":
						r = this.loadScene(t);
						break;
					case "node":
						r = this._invokeOne(function(e) {
							return e.loadNode && e.loadNode(t);
						});
						break;
					case "mesh":
						r = this._invokeOne(function(e) {
							return e.loadMesh && e.loadMesh(t);
						});
						break;
					case "accessor":
						r = this.loadAccessor(t);
						break;
					case "bufferView":
						r = this._invokeOne(function(e) {
							return e.loadBufferView && e.loadBufferView(t);
						});
						break;
					case "buffer":
						r = this.loadBuffer(t);
						break;
					case "material":
						r = this._invokeOne(function(e) {
							return e.loadMaterial && e.loadMaterial(t);
						});
						break;
					case "texture":
						r = this._invokeOne(function(e) {
							return e.loadTexture && e.loadTexture(t);
						});
						break;
					case "skin":
						r = this.loadSkin(t);
						break;
					case "animation":
						r = this._invokeOne(function(e) {
							return e.loadAnimation && e.loadAnimation(t);
						});
						break;
					case "camera":
						r = this.loadCamera(t);
						break;
					default: if (r = this._invokeOne(function(n) {
						return n != this && n.getDependency && n.getDependency(e, t);
					}), !r) throw Error("Unknown type: " + e);
				}
				this.cache.add(n, r);
			}
			return r;
		}
		getDependencies(e) {
			let t = this.cache.get(e);
			if (!t) {
				let n = this, r = this.json[e + (e === "mesh" ? "es" : "s")] || [];
				t = Promise.all(r.map(function(t, r) {
					return n.getDependency(e, r);
				})), this.cache.add(e, t);
			}
			return t;
		}
		loadBuffer(e) {
			let t = this.json.buffers[e], n = this.fileLoader;
			if (t.type && t.type !== "arraybuffer") throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
			if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[$.KHR_BINARY_GLTF].body);
			let r = this.options;
			return new Promise(function(e, i) {
				n.load(Fo.resolveURL(t.uri, r.path), e, void 0, function() {
					i(/* @__PURE__ */ Error("THREE.GLTFLoader: Failed to load buffer \"" + t.uri + "\"."));
				});
			});
		}
		loadBufferView(e) {
			let t = this.json.bufferViews[e];
			return this.getDependency("buffer", t.buffer).then(function(e) {
				let n = t.byteLength || 0, r = t.byteOffset || 0;
				return e.slice(r, r + n);
			});
		}
		loadAccessor(e) {
			let t = this, n = this.json, r = this.json.accessors[e];
			if (r.bufferView === void 0 && r.sparse === void 0) {
				let e = hx[r.type], t = fx[r.componentType], n = r.normalized === !0, i = new t(r.count * e);
				return Promise.resolve(new zr(i, e, n));
			}
			let i = [];
			return r.bufferView === void 0 ? i.push(null) : i.push(this.getDependency("bufferView", r.bufferView)), r.sparse !== void 0 && (i.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(i).then(function(e) {
				let i = e[0], a = hx[r.type], o = fx[r.componentType], s = o.BYTES_PER_ELEMENT, c = s * a, l = r.byteOffset || 0, u = r.bufferView === void 0 ? void 0 : n.bufferViews[r.bufferView].byteStride, d = r.normalized === !0, f, p;
				if (u && u !== c) {
					let e = Math.floor(l / u), n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count, c = t.cache.get(n);
					c || (f = new o(i, e * u, r.count * u / s), c = new ti(f, u / s), t.cache.add(n, c)), p = new ri(c, a, l % u / s, d);
				} else f = i === null ? new o(r.count * a) : new o(i, l, r.count * a), p = new zr(f, a, d);
				if (r.sparse !== void 0) {
					let t = hx.SCALAR, n = fx[r.sparse.indices.componentType], s = r.sparse.indices.byteOffset || 0, c = r.sparse.values.byteOffset || 0, l = new n(e[1], s, r.sparse.count * t), u = new o(e[2], c, r.sparse.count * a);
					i !== null && (p = new zr(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
					for (let e = 0, t = l.length; e < t; e++) {
						let t = l[e];
						if (p.setX(t, u[e * a]), a >= 2 && p.setY(t, u[e * a + 1]), a >= 3 && p.setZ(t, u[e * a + 2]), a >= 4 && p.setW(t, u[e * a + 3]), a >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
					}
					p.normalized = d;
				}
				return p;
			});
		}
		loadTexture(e) {
			let t = this.json, n = this.options, r = t.textures[e].source, i = t.images[r], a = this.textureLoader;
			if (i.uri) {
				let e = n.manager.getHandler(i.uri);
				e !== null && (a = e);
			}
			return this.loadTextureImage(e, r, a);
		}
		loadTextureImage(e, t, n) {
			let r = this, i = this.json, a = i.textures[e], o = i.images[t], s = (o.uri || o.bufferView) + ":" + a.sampler;
			if (this.textureCache[s]) return this.textureCache[s];
			let c = this.loadImageSource(t, n).then(function(t) {
				t.flipY = !1, t.name = a.name || o.name || "", t.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (t.name = o.uri);
				let n = (i.samplers || {})[a.sampler] || {};
				return t.magFilter = px[n.magFilter] || 1006, t.minFilter = px[n.minFilter] || 1008, t.wrapS = mx[n.wrapS] || 1e3, t.wrapT = mx[n.wrapT] || 1e3, t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== 1003 && t.minFilter !== 1006, r.associations.set(t, { textures: e }), t;
			}).catch(function() {
				return null;
			});
			return this.textureCache[s] = c, c;
		}
		loadImageSource(e, t) {
			let n = this, r = this.json, i = this.options;
			if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((e) => e.clone());
			let a = r.images[e], o = self.URL || self.webkitURL, s = a.uri || "", c = !1;
			if (a.bufferView !== void 0) s = n.getDependency("bufferView", a.bufferView).then(function(e) {
				c = !0;
				let t = new Blob([e], { type: a.mimeType });
				return s = o.createObjectURL(t), s;
			});
			else if (a.uri === void 0) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
			let l = Promise.resolve(s).then(function(e) {
				return new Promise(function(n, r) {
					let a = n;
					t.isImageBitmapLoader === !0 && (a = function(e) {
						let t = new xn(e);
						t.needsUpdate = !0, n(t);
					}), t.load(Fo.resolveURL(e, i.path), a, void 0, r);
				});
			}).then(function(e) {
				return c === !0 && o.revokeObjectURL(s), Db(e, a), e.userData.mimeType = a.mimeType || Nb(a.uri), e;
			}).catch(function(e) {
				throw console.error("THREE.GLTFLoader: Couldn't load texture", s), e;
			});
			return this.sourceCache[e] = l, l;
		}
		assignTexture(e, t, n, r) {
			let i = this;
			return this.getDependency("texture", n.index).then(function(a) {
				if (!a) return null;
				if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), i.extensions[$.KHR_TEXTURE_TRANSFORM]) {
					let e = n.extensions === void 0 ? void 0 : n.extensions[$.KHR_TEXTURE_TRANSFORM];
					if (e) {
						let t = i.associations.get(a);
						a = i.extensions[$.KHR_TEXTURE_TRANSFORM].extendTexture(a, e), i.associations.set(a, t);
					}
				}
				return r !== void 0 && (a.colorSpace = r), e[t] = a, a;
			});
		}
		assignFinalMaterial(e) {
			let t = e.geometry, n = e.material, r = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
			if (e.isPoints) {
				let e = "PointsMaterial:" + n.uuid, t = this.cache.get(e);
				t || (t = new va(), ai.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t;
			} else if (e.isLine) {
				let e = "LineBasicMaterial:" + n.uuid, t = this.cache.get(e);
				t || (t = new aa(), ai.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t;
			}
			if (r || i || a) {
				let e = "ClonedMaterial:" + n.uuid + ":";
				r && (e += "derivative-tangents:"), i && (e += "vertex-colors:"), a && (e += "flat-shading:");
				let t = this.cache.get(e);
				t || (t = n.clone(), i && (t.vertexColors = !0), a && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(n))), n = t;
			}
			e.material = n;
		}
		getMaterialType() {
			return Ba;
		}
		loadMaterial(e) {
			let t = this, n = this.json, r = this.extensions, i = n.materials[e], a, o = {}, s = i.extensions || {}, c = [];
			if (s[$.KHR_MATERIALS_UNLIT]) {
				let e = r[$.KHR_MATERIALS_UNLIT];
				a = e.getMaterialType(), c.push(e.extendParams(o, i, t));
			} else {
				let n = i.pbrMetallicRoughness || {};
				if (o.color = new G(1, 1, 1), o.opacity = 1, Array.isArray(n.baseColorFactor)) {
					let e = n.baseColorFactor;
					o.color.setRGB(e[0], e[1], e[2], Kt), o.opacity = e[3];
				}
				n.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", n.baseColorTexture, Gt)), o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor, o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor, n.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", n.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", n.metallicRoughnessTexture))), a = this._invokeOne(function(t) {
					return t.getMaterialType && t.getMaterialType(e);
				}), c.push(Promise.all(this._invokeAll(function(t) {
					return t.extendMaterialParams && t.extendMaterialParams(e, o);
				})));
			}
			i.doubleSided === !0 && (o.side = 2);
			let l = i.alphaMode || yx.OPAQUE;
			if (l === yx.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === yx.MASK && (o.alphaTest = i.alphaCutoff === void 0 ? .5 : i.alphaCutoff)), i.normalTexture !== void 0 && a !== mi && (c.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new B(1, 1), i.normalTexture.scale !== void 0)) {
				let e = i.normalTexture.scale;
				o.normalScale.set(e, e);
			}
			if (i.occlusionTexture !== void 0 && a !== mi && (c.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && a !== mi) {
				let e = i.emissiveFactor;
				o.emissive = new G().setRGB(e[0], e[1], e[2], Kt);
			}
			return i.emissiveTexture !== void 0 && a !== mi && c.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, Gt)), Promise.all(c).then(function() {
				let n = new a(o);
				return i.name && (n.name = i.name), Db(n, i), t.associations.set(n, { materials: e }), i.extensions && Eb(r, n, i), n;
			});
		}
		createUniqueName(e) {
			let t = $o.sanitizeNodeName(e || "");
			return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
		}
		loadGeometries(e) {
			let t = this, n = this.extensions, r = this.primitiveCache;
			function i(e) {
				return n[$.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
					return Fb(n, e, t);
				});
			}
			let a = [];
			for (let n = 0, o = e.length; n < o; n++) {
				let o = e[n], s = Ab(o), c = r[s];
				if (c) a.push(c.promise);
				else {
					let e;
					e = o.extensions && o.extensions[$.KHR_DRACO_MESH_COMPRESSION] ? i(o) : Fb(new ei(), o, t), r[s] = {
						primitive: o,
						promise: e
					}, a.push(e);
				}
			}
			return Promise.all(a);
		}
		loadMesh(e) {
			let t = this, n = this.json, r = this.extensions, i = n.meshes[e], a = i.primitives, o = [];
			for (let e = 0, t = a.length; e < t; e++) {
				let t = a[e].material === void 0 ? Tb(this.cache) : this.getDependency("material", a[e].material);
				o.push(t);
			}
			return o.push(t.loadGeometries(a)), Promise.all(o).then(function(n) {
				let o = n.slice(0, n.length - 1), s = n[n.length - 1], c = [];
				for (let n = 0, l = s.length; n < l; n++) {
					let l = s[n], u = a[n], d, f = o[n];
					if (u.mode === dx.TRIANGLES || u.mode === dx.TRIANGLE_STRIP || u.mode === dx.TRIANGLE_FAN || u.mode === void 0) d = i.isSkinnedMesh === !0 ? new Ii(l, f) : new Ei(l, f), d.isSkinnedMesh === !0 && d.normalizeSkinWeights(), u.mode === dx.TRIANGLE_STRIP ? d.geometry = _b(d.geometry, 1) : u.mode === dx.TRIANGLE_FAN && (d.geometry = _b(d.geometry, 2));
					else if (u.mode === dx.LINES) d = new ga(l, f);
					else if (u.mode === dx.LINE_STRIP) d = new pa(l, f);
					else if (u.mode === dx.LINE_LOOP) d = new _a(l, f);
					else if (u.mode === dx.POINTS) d = new Ca(l, f);
					else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
					Object.keys(d.geometry.morphAttributes).length > 0 && kb(d, i), d.name = t.createUniqueName(i.name || "mesh_" + e), Db(d, i), u.extensions && Eb(r, d, u), t.assignFinalMaterial(d), c.push(d);
				}
				for (let n = 0, r = c.length; n < r; n++) t.associations.set(c[n], {
					meshes: e,
					primitives: n
				});
				if (c.length === 1) return i.extensions && Eb(r, c[0], i), c[0];
				let l = new er();
				i.extensions && Eb(r, l, i), t.associations.set(l, { meshes: e });
				for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
				return l;
			});
		}
		loadCamera(e) {
			let t, n = this.json.cameras[e], r = n[n.type];
			if (!r) {
				console.warn("THREE.GLTFLoader: Missing camera parameters.");
				return;
			}
			return n.type === "perspective" ? t = new Do(cn.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : n.type === "orthographic" && (t = new Mo(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Db(t, n), Promise.resolve(t);
		}
		loadSkin(e) {
			let t = this.json.skins[e], n = [];
			for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
			return t.inverseBindMatrices === void 0 ? n.push(null) : n.push(this.getDependency("accessor", t.inverseBindMatrices)), Promise.all(n).then(function(e) {
				let n = e.pop(), r = e, i = [], a = [];
				for (let e = 0, o = r.length; e < o; e++) {
					let o = r[e];
					if (o) {
						i.push(o);
						let t = new W();
						n !== null && t.fromArray(n.array, e * 16), a.push(t);
					} else console.warn("THREE.GLTFLoader: Joint \"%s\" could not be found.", t.joints[e]);
				}
				return new Vi(i, a);
			});
		}
		loadAnimation(e) {
			let t = this.json, n = this, r = t.animations[e], i = r.name ? r.name : "animation_" + e, a = [], o = [], s = [], c = [], l = [];
			for (let e = 0, t = r.channels.length; e < t; e++) {
				let t = r.channels[e], n = r.samplers[t.sampler], i = t.target, u = i.node, d = r.parameters === void 0 ? n.input : r.parameters[n.input], f = r.parameters === void 0 ? n.output : r.parameters[n.output];
				i.node !== void 0 && (a.push(this.getDependency("node", u)), o.push(this.getDependency("accessor", d)), s.push(this.getDependency("accessor", f)), c.push(n), l.push(i));
			}
			return Promise.all([
				Promise.all(a),
				Promise.all(o),
				Promise.all(s),
				Promise.all(c),
				Promise.all(l)
			]).then(function(e) {
				let t = e[0], a = e[1], o = e[2], s = e[3], c = e[4], l = [];
				for (let e = 0, r = t.length; e < r; e++) {
					let r = t[e], i = a[e], u = o[e], d = s[e], f = c[e];
					if (r === void 0) continue;
					r.updateMatrix && r.updateMatrix();
					let p = n._createAnimationTracks(r, i, u, d, f);
					if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
				}
				let u = new ro(i, void 0, l);
				return Db(u, r), u;
			});
		}
		createNodeMesh(e) {
			let t = this.json, n = this, r = t.nodes[e];
			return r.mesh === void 0 ? null : n.getDependency("mesh", r.mesh).then(function(e) {
				let t = n._getNodeRef(n.meshCache, r.mesh, e);
				return r.weights !== void 0 && t.traverse(function(e) {
					if (e.isMesh) for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t];
				}), t;
			});
		}
		loadNode(e) {
			let t = this.json, n = this, r = t.nodes[e], i = n._loadNodeShallow(e), a = [], o = r.children || [];
			for (let e = 0, t = o.length; e < t; e++) a.push(n.getDependency("node", o[e]));
			let s = r.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", r.skin);
			return Promise.all([
				i,
				Promise.all(a),
				s
			]).then(function(e) {
				let t = e[0], n = e[1], r = e[2];
				r !== null && t.traverse(function(e) {
					e.isSkinnedMesh && e.bind(r, bx);
				});
				for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
				if (t.userData.pivot !== void 0 && n.length > 0) {
					let e = t.userData.pivot, r = n[0];
					t.pivot = new V().fromArray(e), t.position.x -= e[0], t.position.y -= e[1], t.position.z -= e[2], r.position.set(0, 0, 0), delete t.userData.pivot;
				}
				return t;
			});
		}
		_loadNodeShallow(e) {
			let t = this.json, n = this.extensions, r = this;
			if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
			let i = t.nodes[e], a = i.name ? r.createUniqueName(i.name) : "", o = [], s = r._invokeOne(function(t) {
				return t.createNodeMesh && t.createNodeMesh(e);
			});
			return s && o.push(s), i.camera !== void 0 && o.push(r.getDependency("camera", i.camera).then(function(e) {
				return r._getNodeRef(r.cameraCache, i.camera, e);
			})), r._invokeAll(function(t) {
				return t.createNodeAttachment && t.createNodeAttachment(e);
			}).forEach(function(e) {
				o.push(e);
			}), this.nodeCache[e] = Promise.all(o).then(function(t) {
				let o;
				if (o = i.isBone === !0 ? new Li() : t.length > 1 ? new er() : t.length === 1 ? t[0] : new $n(), o !== t[0]) for (let e = 0, n = t.length; e < n; e++) o.add(t[e]);
				if (i.name && (o.userData.name = i.name, o.name = a), Db(o, i), i.extensions && Eb(n, o, i), i.matrix !== void 0) {
					let e = new W();
					e.fromArray(i.matrix), o.applyMatrix4(e);
				} else i.translation !== void 0 && o.position.fromArray(i.translation), i.rotation !== void 0 && o.quaternion.fromArray(i.rotation), i.scale !== void 0 && o.scale.fromArray(i.scale);
				if (!r.associations.has(o)) r.associations.set(o, {});
				else if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
					let e = r.associations.get(o);
					r.associations.set(o, { ...e });
				}
				return r.associations.get(o).nodes = e, o;
			}), this.nodeCache[e];
		}
		loadScene(e) {
			let t = this.extensions, n = this.json.scenes[e], r = this, i = new er();
			n.name && (i.name = r.createUniqueName(n.name)), Db(i, n), n.extensions && Eb(t, i, n);
			let a = n.nodes || [], o = [];
			for (let e = 0, t = a.length; e < t; e++) o.push(r.getDependency("node", a[e]));
			return Promise.all(o).then(function(e) {
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					n.parent === null ? i.add(n) : i.add(yb(n));
				}
				return r.associations = ((e) => {
					let t = /* @__PURE__ */ new Map();
					for (let [e, n] of r.associations) (e instanceof ai || e instanceof xn) && t.set(e, n);
					return e.traverse((e) => {
						let n = r.associations.get(e);
						n != null && t.set(e, n);
					}), t;
				})(i), i;
			});
		}
		_createAnimationTracks(e, t, n, r, i) {
			let a = [], o = e.name ? e.name : e.uuid, s = [];
			function c(e) {
				e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid);
			}
			_x[i.path] === _x.weights ? (c(e), e.isGroup && e.children.forEach(c)) : s.push(o);
			let l;
			switch (_x[i.path]) {
				case _x.weights:
					l = Qa;
					break;
				case _x.rotation:
					l = eo;
					break;
				case _x.translation:
				case _x.scale:
					l = no;
					break;
				default: switch (n.itemSize) {
					case 1:
						l = Qa;
						break;
					default: l = no;
				}
			}
			let u = r.interpolation === void 0 ? Lt : vx[r.interpolation], d = this._getArrayFromAccessor(n);
			for (let e = 0, n = s.length; e < n; e++) {
				let n = new l(s[e] + "." + _x[i.path], t.array, d, u);
				r.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(n), a.push(n);
			}
			return a;
		}
		_getArrayFromAccessor(e) {
			let t = e.array;
			if (e.normalized) {
				let e = Mb(t.constructor), n = new Float32Array(t.length);
				for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
				t = n;
			}
			return t;
		}
		_createCubicSplineTrackInterpolant(e) {
			e.createInterpolant = function(e) {
				return new (this instanceof eo ? ux : cx)(this.times, this.values, this.getValueSize() / 3, e);
			}, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
		}
	};
}));
//#endregion
//#region src/core/MeshSurface.ts
yu();
var Cx = 1.04;
function wx(e, t, n) {
	let r = [...e.lods].sort((e, t) => t.lod - e.lod), i = r.filter((e) => (e.tris ?? 0) <= t && (e.bytes ?? 0) <= n && e.chunks.length);
	return (e.surface === "poisson" ? i.find((e) => e.textured) : void 0) ?? i[0] ?? r.find((e) => e.chunks.length);
}
var Tx = class {
	material;
	assetBase;
	hasDepth;
	tier = "A";
	object = new er();
	depth = /* @__PURE__ */ new Map();
	depthLoading = /* @__PURE__ */ new Map();
	raycaster = new ts();
	meshes = [];
	backdrop = null;
	atlases = /* @__PURE__ */ new Set();
	meshMaterials = /* @__PURE__ */ new Map();
	backdropMaterial = null;
	shellBuilder = new cb(5);
	shellGeometry = /* @__PURE__ */ new Map();
	shells = [];
	backdropVisible = !0;
	loaded = !1;
	constructor(e, t, n = !1) {
		this.material = e, this.assetBase = t, this.hasDepth = n, this.object.name = "tf-mesh-surface";
	}
	async load(e, t = 12e5, n = 41943040) {
		if (!e || e.tier !== "A" || !e.lods.length) return !1;
		let r = wx(e, t, n);
		if (!r?.chunks.length) return !1;
		this.material.side = 2;
		let { GLTFLoader: i } = await Promise.resolve().then(() => (Sx(), Sb)), a = new i();
		for (let e of r.chunks) {
			let t = this.assetBase + e, n = await a.loadAsync(t);
			n.scene.traverse((e) => {
				let t = e;
				if (!t.isMesh) return;
				let n = (e) => {
					let t = "map" in e ? e.map : null, n = this.bindAtlas(t);
					return e.dispose(), n;
				};
				t.material = Array.isArray(t.material) ? t.material.map(n) : n(t.material), t.frustumCulled = !1, this.meshes.push(t);
			}), this.object.add(n.scene);
		}
		return this.meshes.length && this.addBackdrop(e.bounds), this.loaded = this.meshes.length > 0, this.loaded;
	}
	bindAtlas(e) {
		let t = this.meshMaterials.get(e);
		if (t) return t;
		e && (e.colorSpace = Gt, e.flipY = !1, e.needsUpdate = !0, this.atlases.add(e));
		let n = this.meshMaterials.size === 0 ? this.material : gb({
			hasDepth: this.hasDepth,
			hasMeshColor: !0,
			side: 2
		});
		return n.uniforms = {
			...this.material.uniforms,
			meshTex: { value: e ?? n.uniforms.meshTex.value },
			meshTexMix: { value: +!!e }
		}, n.defaultAttributeValues.confidence = [1], n.name = `tf-mesh-projector-${this.meshMaterials.size}`, this.meshMaterials.set(e, n), n;
	}
	addBackdrop(e) {
		let t = 30;
		if (e) {
			let n = e.max[0] - e.min[0], r = e.max[2] - e.min[2];
			t = Math.max(12, Math.hypot(n, r));
		}
		this.backdropMaterial = gb({
			hasDepth: this.hasDepth,
			hasMeshColor: !1,
			side: 1
		});
		let n = new Pa(t, 48, 32);
		this.backdrop = new Ei(n, this.backdropMaterial), this.backdrop.frustumCulled = !1, this.backdrop.renderOrder = -1, this.backdrop.name = "tf-mesh-backdrop", this.object.add(this.backdrop);
		for (let e of ["tf-mesh-shell-a", "tf-mesh-shell-b"]) {
			let t = new Ei(this.shellBuilder.base, this.backdropMaterial);
			t.frustumCulled = !1, t.renderOrder = -1, t.visible = !1, t.name = e, this.shells.push(t), this.object.add(t);
		}
	}
	syncBackdrop() {
		let e = this.backdropMaterial;
		if (!e) return;
		let t = this.material.uniforms, n = e.uniforms;
		n.panoA.value = t.panoA.value, n.panoB.value = t.panoB.value, n.depthA.value = t.depthA.value, n.depthB.value = t.depthB.value, n.posA.value.copy(t.posA.value), n.posB.value.copy(t.posB.value), n.rotA.value.copy(t.rotA.value), n.rotB.value.copy(t.rotB.value), n.blend.value = t.blend.value, n.occBias.value = t.occBias.value, n.debugSplit.value = t.debugSplit.value, n.resolution.value.copy(t.resolution.value), n.modeMix.value = 0, n.meshTexMix.value = 0;
	}
	ensure(e) {
		if (this.depth.has(e.id)) return Promise.resolve(!0);
		let t = this.depthLoading.get(e.id);
		if (t) return t;
		let n = eb(this.assetBase, e).then((t) => (t && (this.depth.set(e.id, t), this.shellGeometry.set(e.id, this.shellBuilder.build(t.faces))), this.depthLoading.delete(e.id), t)).catch((t) => (this.depthLoading.delete(e.id), console.warn("[tourforge] depth cube failed", t), null));
		return this.depthLoading.set(e.id, n), n;
	}
	depthTextureFor(e) {
		return this.depth.get(e)?.texture ?? null;
	}
	depthFacesFor(e) {
		return this.depth.get(e)?.faces ?? null;
	}
	setBackdropVisible(e) {
		if (this.backdropVisible = e, this.backdrop && (this.backdrop.visible = e), !e) for (let e of this.shells) e.visible = !1;
	}
	update(e, t = null) {
		this.object.visible = this.loaded, this.backdrop && (this.backdrop.position.set(e.position[0], e.position[1], e.position[2]), this.syncBackdrop());
		let n = [e, t];
		this.shells.forEach((e, t) => {
			let r = n[t], i = r ? this.shellGeometry.get(r.id) : void 0;
			e.visible = this.backdropVisible && !!i, r && i && (e.geometry = i, lb(e, r, Cx));
		});
	}
	isReady(e) {
		return this.loaded && this.depth.has(e);
	}
	raycast(e, t, n = {}) {
		if (!this.loaded) return null;
		this.raycaster.set(e.origin, e.direction), this.object.updateMatrixWorld();
		let r = n.maxY ?? Infinity, i = this.raycaster.intersectObjects(this.meshes, !1).find((e) => e.point.y <= r);
		if (!i) return n.floorFallback === !1 ? null : this.floorFallback(e, t);
		let a = i.face ? i.face.normal.clone().applyNormalMatrix(new H().getNormalMatrix(i.object.matrixWorld)).normalize() : e.direction.clone().negate();
		a.dot(e.direction) > 0 && a.negate();
		let o = tb(t), s = Math.abs(i.point.y - o) < .35 ? "floor" : a.y < -.5 ? "ceiling" : "wall";
		return {
			point: i.point.clone(),
			normal: a,
			distance: i.distance,
			kind: s
		};
	}
	floorFallback(e, t) {
		let n = tb(t);
		if (e.direction.y >= -1e-4) return null;
		let r = (n - e.origin.y) / e.direction.y;
		return !Number.isFinite(r) || r <= 0 || r > 20 ? null : {
			point: e.origin.clone().addScaledVector(e.direction, r),
			normal: new V(0, 1, 0),
			distance: r,
			kind: "floor"
		};
	}
	dispose() {
		for (let e of this.meshes) e.geometry.dispose();
		for (let e of this.depth.values()) e.texture.dispose();
		for (let e of this.shellGeometry.values()) e.dispose();
		this.shellGeometry.clear(), this.shellBuilder.dispose(), this.backdropMaterial?.dispose(), this.backdrop?.geometry.dispose();
		for (let e of this.atlases) e.dispose();
		for (let e of this.meshMaterials.values()) e !== this.material && e.dispose();
		this.atlases.clear(), this.meshMaterials.clear(), this.depth.clear(), this.meshes = [];
	}
}, Ex = Object.freeze({
	durationMultiplier: 1,
	baseMs: 1500,
	perMeterMs: 0,
	minMs: 1500,
	maxMs: 1500,
	blendWindow: [.15, .85],
	easing: "easeInOutCubic",
	shellSwapT: .5,
	gazeConvergence: .3,
	occlusionBias: .1,
	fovDeg: 75,
	settleMs: 120,
	minClearanceM: .4,
	bowFactor: .35,
	meshReveal: 0,
	crossfadeMs: 0
});
function Dx(e, t = Ex) {
	let n = Py(t.baseMs + t.perMeterMs * e, t.minMs, t.maxMs) * t.durationMultiplier;
	return Math.max(n, t.crossfadeMs > 0 ? t.crossfadeMs : 0);
}
function Ox(e, t = Ex) {
	return Ny[t.easing](e);
}
function kx(e, t = Ex, n = 0) {
	if (t.crossfadeMs > 0 && n > 0) {
		let r = Math.min(.5, t.crossfadeMs / n / 2);
		return Ly(.5 - r, .5 + r, Py(e, 0, 1));
	}
	return Ly(t.blendWindow[0], t.blendWindow[1], Ay(e));
}
function Ax(e, t = Ex) {
	return t.meshReveal <= 0 ? 0 : t.meshReveal * Math.sin(Math.PI * Py(e, 0, 1));
}
//#endregion
//#region src/core/Transition.ts
yu();
function jx(e) {
	return Math.atan2(-e.x, -e.z);
}
var Mx = new V(), Nx = new In();
function Px(e, t, n, r, i, a = new ln()) {
	Nx.setFromQuaternion(e, "YXZ");
	let o = Nx.y, s = Nx.x;
	if (r) Mx.copy(r).sub(n), Mx.lengthSq() > 1e-8 && (Mx.normalize(), o = jx(Mx), s = Math.asin(Py(Mx.y, -1, 1)));
	else if (Mx.copy(n).sub(t), Mx.y = 0, Mx.lengthSq() > 1e-6) {
		let e = jx(Mx.normalize());
		o += ty(e - o) * i;
	}
	return a.setFromEuler(Nx.set(s, o, 0, "YXZ"));
}
var Fx = class {
	deps;
	state = "IDLE";
	tuning = {
		...Ex,
		blendWindow: [...Ex.blendWindow]
	};
	onStart;
	onArrive;
	onStateChange;
	from;
	to = null;
	startTime = 0;
	duration = 1;
	_t = 0;
	_blend = 0;
	qStart = new ln();
	qEnd = new ln();
	pos = new V();
	quat = new ln();
	control = null;
	settleUntil = 0;
	now;
	frame;
	constructor(e, t, n) {
		this.deps = e, this.now = e.now ?? (() => performance.now()), this.from = {
			position: new V().fromArray(t.position),
			pano: t
		}, this.pos.copy(this.from.position), n && this.quat.copy(n), this.frame = {
			state: "IDLE",
			t: 0,
			blend: 0,
			position: this.pos,
			quaternion: this.quat,
			from: this.from,
			to: null,
			dominant: "A"
		};
	}
	get current() {
		return this.state === "TRANSITION" && this.to && this._blend >= .5 ? this.to.pano : this.from.pano;
	}
	get target() {
		return this.to?.pano ?? null;
	}
	get t() {
		return this._t;
	}
	get blend() {
		return this._blend;
	}
	get position() {
		return this.pos;
	}
	get quaternion() {
		return this.quat;
	}
	requestMove(e, t, n = {}) {
		let r = this.now(), i = t;
		if (this.state === "TRANSITION" && this.to) {
			let e = this._blend < .5 ? this.from.pano : this.to.pano;
			this.from = {
				position: this.pos.clone(),
				pano: e
			}, i = this.quat;
		} else this.from = {
			position: this.pos.clone(),
			pano: this.from.pano
		};
		if (this.to = {
			position: new V().fromArray(e.position),
			pano: e
		}, n.instant) {
			this.jump(i);
			return;
		}
		this.qStart.copy(i), Px(i, this.from.position, this.to.position, n.lookAt ?? null, this.tuning.gazeConvergence, this.qEnd), this.control = this.computeControl(this.from.position, this.to.position), this.setState("PREFETCH"), this.deps.prefetch(e.id).catch(() => void 0), this.deps.isReady(e.id) && this.begin(r);
	}
	update(e = this.now()) {
		if (this.state === "PREFETCH" && this.to && this.deps.isReady(this.to.pano.id) && this.begin(e), this.state === "TRANSITION" && this.to) {
			this._t = Fy((e - this.startTime) / this.duration);
			let t = Ox(this._t, this.tuning);
			this.evalPath(t, this.pos), this.quat.slerpQuaternions(this.qStart, this.qEnd, t), this._blend = kx(this._t, this.tuning, this.duration), this._t >= 1 && this.arrive(e);
		} else this.state === "SETTLE" && e >= this.settleUntil && this.setState("IDLE");
		let t = this.frame;
		return t.state = this.state, t.t = this._t, t.blend = this._blend, t.from = this.from, t.to = this.to, t.dominant = this._blend < .5 ? "A" : "B", t;
	}
	jump(e) {
		if (!this.to) return;
		let t = this.to;
		this.from = t, this.to = null, this.control = null, this.pos.copy(t.position), e && this.quat.copy(e), this._t = 0, this._blend = 0, this.setState("IDLE"), this.onArrive?.(t.pano);
	}
	begin(e) {
		if (!this.to) return;
		let t = this.from.position.distanceTo(this.to.position);
		this.duration = Math.max(1, Dx(t, this.tuning)), this.startTime = e, this._t = 0, this._blend = 0, this.setState("TRANSITION"), this.onStart?.(this.from, this.to, this.duration);
	}
	arrive(e) {
		if (!this.to) return;
		let t = this.to;
		this.pos.copy(t.position), this.quat.copy(this.qEnd), this.from = t, this.to = null, this.control = null, this._t = 0, this._blend = 0, this.settleUntil = e + this.tuning.settleMs, this.setState("SETTLE"), this.onArrive?.(t.pano);
	}
	evalPath(e, t) {
		let n = this.from.position, r = this.to?.position ?? n, i = this.control;
		if (!i) {
			t.lerpVectors(n, r, e);
			return;
		}
		let a = 1 - e;
		t.set(a * a * n.x + 2 * a * e * i.x + e * e * r.x, a * a * n.y + 2 * a * e * i.y + e * e * r.y, a * a * n.z + 2 * a * e * i.z + e * e * r.z);
	}
	computeControl(e, t) {
		let n = this.deps.clearance?.(e, t);
		return !n || n.deficit <= 0 ? null : e.clone().add(t).multiplyScalar(.5).addScaledVector(n.normal, this.tuning.bowFactor * n.deficit).multiplyScalar(2).sub(e.clone().add(t).multiplyScalar(.5));
	}
	setState(e) {
		if (e === this.state) return;
		let t = this.state;
		this.state = e, this.onStateChange?.(e, t);
	}
};
//#endregion
//#region src/ui/Hotspots.ts
yu();
var Ix = .03, Lx = new V(), Rx = new V(), zx = new V(), Bx = new W(), Vx = class {
	object = new er();
	geometry = new Na(1, 1);
	loader = new mo();
	entries = [];
	hovered = null;
	raycaster = new ts();
	constructor() {
		this.object.name = "tf-hotspots", this.loader.setCrossOrigin("anonymous");
	}
	set(e, t) {
		let n = new Map(this.entries.map((e) => [e.data.id, e])), r = [];
		for (let i of e) {
			let e = t(i.imageUrl), a = n.get(i.id);
			a && a.url === e ? (n.delete(i.id), a.data = i) : a = this.create(i, e), this.place(a), r.push(a);
		}
		for (let e of n.values()) this.remove(e);
		this.entries = r;
	}
	ids() {
		return this.entries.map((e) => e.data.id);
	}
	get(e) {
		return this.entries.find((t) => t.data.id === e)?.data ?? null;
	}
	pick(e) {
		let t = this.entries.filter((e) => e.mesh.visible).map((e) => e.mesh);
		if (!t.length) return null;
		this.raycaster.set(e.origin, e.direction), this.object.updateMatrixWorld();
		let n = this.raycaster.intersectObjects(t, !1)[0];
		return n ? this.entries.find((e) => e.mesh === n.object)?.data.id ?? null : null;
	}
	setHover(e) {
		if (e !== this.hovered) {
			this.hovered = e;
			for (let t of this.entries) t.material.color.setScalar(t.data.id === e ? 1 : .92);
		}
	}
	update(e, t, n) {
		let r = 1 - Math.exp(-e / 120);
		n && this.object.updateMatrixWorld();
		for (let e of this.entries) {
			e.material.depthTest = n === null;
			let i = e.data.anchor[1] >= t;
			e.target = !e.loaded || i ? 0 : n === null || n(this.samples(e)) ? 1 : 0, e.opacity += (e.target - e.opacity) * r, Math.abs(e.target - e.opacity) < .01 && (e.opacity = e.target), e.material.opacity = e.opacity, e.mesh.visible = e.opacity > .01;
		}
	}
	dispose() {
		for (let e of this.entries) this.remove(e);
		this.entries = [], this.geometry.dispose();
	}
	create(e, t) {
		let n = new mi({
			transparent: !0,
			opacity: 0,
			depthWrite: !1,
			polygonOffset: !0,
			polygonOffsetFactor: -4,
			polygonOffsetUnits: -4,
			side: 0
		});
		n.color.setScalar(.92);
		let r = new Ei(this.geometry, n);
		r.renderOrder = 4, r.name = `tf-hotspot-${e.id}`;
		let i = {
			data: e,
			mesh: r,
			material: n,
			aspect: 1,
			url: t,
			loaded: !1,
			opacity: 0,
			target: 0
		};
		return this.object.add(r), this.loader.load(t, (e) => {
			if (!r.parent) {
				e.dispose();
				return;
			}
			e.colorSpace = Gt, e.anisotropy = 4;
			let t = e.image;
			i.aspect = t?.width && t.height ? t.width / t.height : 1, n.map = e, n.needsUpdate = !0, i.loaded = !0, this.place(i);
		}, void 0, () => console.warn(`[tourforge] hotspot image failed to load: ${t}`)), i;
	}
	place(e) {
		let { anchor: t, normal: n, widthM: r } = e.data;
		zx.fromArray(n).normalize(), zx.lengthSq() < .5 && zx.set(0, 0, 1), Rx.set(0, 1, 0), Math.abs(zx.y) > .95 && Rx.set(0, 0, -1), Lx.crossVectors(Rx, zx).normalize(), Rx.crossVectors(zx, Lx).normalize(), Bx.makeBasis(Lx, Rx, zx), e.mesh.quaternion.setFromRotationMatrix(Bx), e.mesh.position.fromArray(t).addScaledVector(zx, Ix), e.mesh.scale.set(r, r / Math.max(.05, e.aspect), 1);
	}
	samples(e) {
		let t = e.mesh, n = t.scale.x * .35, r = t.scale.y * .35, i = [];
		for (let [e, a] of [
			[0, 0],
			[n, r],
			[-n, r],
			[n, -r],
			[-n, -r]
		]) Lx.set(e / t.scale.x, a / t.scale.y, 0).applyMatrix4(t.matrixWorld), i.push([
			Lx.x,
			Lx.y,
			Lx.z
		]);
		return i;
	}
	remove(e) {
		this.object.remove(e.mesh), e.material.map?.dispose(), e.material.dispose();
	}
}, Hx = {
	inside: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"3.2\"/><path d=\"M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z\"/></svg>",
	dollhouse: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 10.5 12 4l9 6.5\"/><path d=\"M5 9.5V20h14V9.5\"/><path d=\"M10 20v-5.5h4V20\"/></svg>",
	measure: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3.5 16.5 16.5 3.5l4 4-13 13z\"/><path d=\"M7 13l1.8 1.8M10 10l1.8 1.8M13 7l1.8 1.8\"/></svg>",
	soundOn: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 9.5h3.5L12 5.5v13l-4.5-4H4z\"/><path d=\"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11\"/></svg>",
	soundOff: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 9.5h3.5L12 5.5v13l-4.5-4H4z\"/><path d=\"M16 9.5l5 5M21 9.5l-5 5\"/></svg>",
	close: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6 6 18\"/></svg>"
}, Ux = "tf-hud-style", Wx = "\n.tf-overlay{position:absolute;inset:0;pointer-events:none;overflow:hidden;direction:ltr;text-align:left;font:500 14px/1.3 system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;z-index:2}\n.tf-hud-bar{position:absolute;left:50%;bottom:max(16px,env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:6px;padding:6px;border-radius:999px;background:rgba(18,20,24,.72);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 4px 18px rgba(0,0,0,.35);pointer-events:auto}\n.tf-hud-bar:empty{display:none}\n.tf-hud-btn{display:inline-flex;align-items:center;gap:6px;height:38px;min-width:38px;padding:0 12px;border:0;border-radius:999px;background:transparent;color:#e9ecef;font:inherit;cursor:pointer;white-space:nowrap}\n.tf-hud-btn:hover{background:rgba(255,255,255,.1)}\n.tf-hud-btn.is-on{background:#fff;color:#111}\n.tf-hud-btn svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n.tf-hud-sep{width:1px;margin:6px 2px;background:rgba(255,255,255,.18)}\n.tf-hud-hint{position:absolute;left:50%;bottom:calc(max(16px,env(safe-area-inset-bottom)) + 58px);transform:translateX(-50%);padding:6px 12px;border-radius:999px;background:rgba(18,20,24,.72);color:#fff;font-size:13px;white-space:nowrap}\n.tf-measure-label{position:absolute;left:0;top:0;padding:4px 10px;border-radius:6px;background:#ffd23f;color:#111;font-weight:700;font-size:14px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.35)}\n.tf-measure-label.is-preview{opacity:.85}\n.tf-popup{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.45);pointer-events:auto}\n.tf-popup-card{position:relative;display:flex;flex-direction:column;width:min(560px,100%);max-height:min(80%,720px);border-radius:14px;background:#fff;color:#111;box-shadow:0 12px 40px rgba(0,0,0,.45);overflow:hidden}\n.tf-popup-head{display:flex;align-items:center;gap:8px;padding:12px 12px 12px 18px;border-bottom:1px solid #eee;font-weight:700;font-size:16px}\n.tf-popup-head span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.tf-popup-close{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border:0;border-radius:999px;background:#f1f3f5;color:#111;cursor:pointer}\n.tf-popup-close svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}\n.tf-popup-frame{flex:1;width:100%;min-height:240px;height:60vh;max-height:620px;border:0;background:#fff}\n@media (max-width:520px){.tf-hud-btn .tf-hud-text{display:none}}\n";
function Gx(e, t, n) {
	let r = document.createElement("button");
	return r.type = "button", r.className = "tf-hud-btn", r.title = n, r.setAttribute("aria-label", n), r.innerHTML = `${e}${t ? `<span class="tf-hud-text">${t}</span>` : ""}`, r;
}
function Kx(e) {
	return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base target="_blank"><style>body{margin:16px;font:15px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#1d1f23}img,video,iframe{max-width:100%;height:auto}a{color:#0b6bcb}</style></head><body dir="auto">${e}</body></html>`;
}
var qx = class {
	el;
	opts;
	actions;
	overlay;
	bar;
	insideBtn;
	dollBtn;
	measureBtn;
	musicBtn;
	sep;
	hint;
	popup = null;
	audio = null;
	muted = !1;
	caps = {
		dollhouse: !1,
		measure: !1
	};
	unlockOff = [];
	offKey;
	measuring = !1;
	constructor(e, t, n) {
		if (this.el = e, this.opts = t, this.actions = n, !document.getElementById(Ux)) {
			let e = document.createElement("style");
			e.id = Ux, e.textContent = Wx, document.head.appendChild(e);
		}
		getComputedStyle(e).position === "static" && (e.style.position = "relative"), this.overlay = document.createElement("div"), this.overlay.className = "tf-overlay", e.appendChild(this.overlay), this.bar = document.createElement("div"), this.bar.className = "tf-hud-bar", this.insideBtn = Gx(Hx.inside, "Inside", "Inside view"), this.dollBtn = Gx(Hx.dollhouse, "Dollhouse", "Dollhouse view"), this.sep = document.createElement("div"), this.sep.className = "tf-hud-sep", this.measureBtn = Gx(Hx.measure, "Measure", "Measure a distance"), this.musicBtn = Gx(Hx.soundOn, "", "Mute music"), this.insideBtn.onclick = () => this.actions.setMode("inside"), this.dollBtn.onclick = () => this.actions.setMode("dollhouse"), this.measureBtn.onclick = () => this.actions.setMeasuring(!this.measuring), this.musicBtn.onclick = () => this.toggleMute(), this.hint = document.createElement("div"), this.hint.className = "tf-hud-hint", this.hint.style.display = "none", t && this.overlay.append(this.bar, this.hint), this.layout();
		let r = (e) => {
			e.key === "Escape" && (this.popup ? this.closePopup() : this.measuring && this.actions.setMeasuring(!1));
		};
		document.addEventListener("keydown", r), this.offKey = () => document.removeEventListener("keydown", r);
	}
	setCapabilities(e) {
		this.caps = e, this.layout();
	}
	setMode(e) {
		this.insideBtn.classList.toggle("is-on", e === "inside"), this.dollBtn.classList.toggle("is-on", e === "dollhouse");
	}
	setMeasuring(e, t) {
		this.measuring = e, this.measureBtn.classList.toggle("is-on", e), this.showHint(e ? t ?? "Click two points to measure" : null);
	}
	showHint(e) {
		this.hint.textContent = e ?? "", this.hint.style.display = e ? "" : "none";
	}
	setMusic(e) {
		if (this.audio && e && this.audio.dataset.src === e.url) {
			this.audio.volume = e.volume, this.audio.loop = e.loop;
			return;
		}
		if (this.stopMusic(), e) {
			let t = new Audio();
			t.dataset.src = e.url, t.src = e.url, t.loop = e.loop, t.volume = e.volume, t.preload = "auto", t.muted = this.muted, this.audio = t;
			let n = () => t.play().then(() => this.clearUnlock(), () => void 0);
			n();
			for (let e of [
				"pointerdown",
				"keydown",
				"touchstart"
			]) {
				let r = () => {
					this.audio === t && t.paused && !this.muted && n();
				};
				document.addEventListener(e, r, { passive: !0 }), this.unlockOff.push(() => document.removeEventListener(e, r));
			}
		}
		this.layout();
	}
	openPopup(e, t) {
		this.closePopup();
		let n = document.createElement("div");
		n.className = "tf-popup", n.setAttribute("role", "dialog"), n.setAttribute("aria-modal", "true");
		let r = document.createElement("div");
		r.className = "tf-popup-card";
		let i = document.createElement("div");
		i.className = "tf-popup-head";
		let a = document.createElement("span");
		a.textContent = e, a.dir = "auto";
		let o = document.createElement("button");
		o.type = "button", o.className = "tf-popup-close", o.setAttribute("aria-label", "Close"), o.innerHTML = Hx.close, o.onclick = () => this.closePopup(), i.append(a, o);
		let s = document.createElement("iframe");
		s.className = "tf-popup-frame", s.setAttribute("sandbox", "allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms"), s.setAttribute("referrerpolicy", "no-referrer"), s.setAttribute("allow", "autoplay; fullscreen; encrypted-media; picture-in-picture"), s.srcdoc = Kx(t), r.append(i, s), n.appendChild(r), n.addEventListener("pointerdown", (e) => {
			e.target === n && this.closePopup();
		}), this.overlay.appendChild(n), this.popup = n, o.focus();
	}
	closePopup() {
		this.popup?.remove(), this.popup = null;
	}
	get popupOpen() {
		return this.popup !== null;
	}
	dispose() {
		this.stopMusic(), this.offKey(), this.overlay.remove();
	}
	toggleMute() {
		this.muted = !this.muted, this.audio && (this.audio.muted = this.muted, !this.muted && this.audio.paused && this.audio.play().catch(() => void 0)), this.musicBtn.innerHTML = this.muted ? Hx.soundOff : Hx.soundOn, this.musicBtn.title = this.muted ? "Play music" : "Mute music", this.musicBtn.setAttribute("aria-label", this.musicBtn.title), this.musicBtn.classList.toggle("is-muted", this.muted);
	}
	stopMusic() {
		this.clearUnlock(), this.audio &&= (this.audio.pause(), this.audio.removeAttribute("src"), this.audio.load(), null);
	}
	clearUnlock() {
		for (let e of this.unlockOff.splice(0)) e();
	}
	layout() {
		if (!this.opts) return;
		let e = this.opts.modes !== !1 && this.caps.dollhouse, t = this.opts.measure !== !1 && this.caps.measure, n = this.opts.music !== !1 && this.audio !== null, r = [];
		e && r.push(this.insideBtn, this.dollBtn), t && r.push(this.measureBtn), n && (r.length && r.push(this.sep), r.push(this.musicBtn)), this.bar.replaceChildren(...r);
	}
};
//#endregion
//#region src/ui/Measure.ts
yu();
function Jx(e) {
	return Number.isFinite(e) ? e < 1 ? `${Math.round(e * 100)} cm` : `${e.toFixed(2)} m` : "";
}
var Yx = class {
	object = new er();
	a = null;
	b = null;
	preview = null;
	lineGeometry = new ei();
	line;
	dotGeometry = new ei();
	dots;
	dotTexture;
	label;
	mid = new V();
	constructor(e) {
		this.lineGeometry.setAttribute("position", new Hr(/* @__PURE__ */ new Float32Array(6), 3)), this.line = new pa(this.lineGeometry, new aa({
			color: 16765503,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		})), this.line.renderOrder = 30, this.line.frustumCulled = !1, this.dotGeometry.setAttribute("position", new Hr(/* @__PURE__ */ new Float32Array(6), 3)), this.dotTexture = Xx(), this.dots = new Ca(this.dotGeometry, new va({
			size: 14,
			sizeAttenuation: !1,
			map: this.dotTexture,
			transparent: !0,
			depthTest: !1,
			depthWrite: !1
		})), this.dots.renderOrder = 31, this.dots.frustumCulled = !1, this.object.add(this.line, this.dots), this.object.name = "tf-measure", this.object.visible = !1, this.label = document.createElement("div"), this.label.className = "tf-measure-label", this.label.style.display = "none", e.appendChild(this.label);
	}
	get distance() {
		return this.a && this.b ? this.a.distanceTo(this.b) : null;
	}
	click(e) {
		return !this.a || this.b ? (this.a = e.clone(), this.b = null) : this.b = e.clone(), this.preview = null, this.rebuild(), this.distance;
	}
	hover(e) {
		this.a && !this.b && (this.preview = e ? e.clone() : null, this.rebuild());
	}
	clear() {
		this.a = this.b = this.preview = null, this.rebuild();
	}
	update(e, t, n) {
		let r = this.b ?? this.preview;
		if (!this.a || !r) {
			this.label.style.display = "none";
			return;
		}
		if (this.mid.addVectors(this.a, r).multiplyScalar(.5).project(e), this.mid.z > 1 || this.mid.z < -1) {
			this.label.style.display = "none";
			return;
		}
		this.label.style.display = "", this.label.textContent = Jx(this.a.distanceTo(r)), this.label.classList.toggle("is-preview", !this.b), this.label.style.transform = `translate(${(this.mid.x + 1) / 2 * t}px, ${(1 - this.mid.y) / 2 * n}px) translate(-50%, -130%)`;
	}
	dispose() {
		this.lineGeometry.dispose(), this.dotGeometry.dispose(), this.dotTexture.dispose(), this.line.material.dispose(), this.dots.material.dispose(), this.label.remove();
	}
	rebuild() {
		let e = this.b ?? this.preview, t = this.lineGeometry.getAttribute("position"), n = this.dotGeometry.getAttribute("position");
		if (this.a) {
			t.setXYZ(0, this.a.x, this.a.y, this.a.z), n.setXYZ(0, this.a.x, this.a.y, this.a.z);
			let r = e ?? this.a;
			t.setXYZ(1, r.x, r.y, r.z), n.setXYZ(1, r.x, r.y, r.z);
		}
		t.needsUpdate = !0, n.needsUpdate = !0, this.lineGeometry.setDrawRange(0, e ? 2 : 0), this.dotGeometry.setDrawRange(0, this.a ? this.b ? 2 : 1 : 0), this.object.visible = !!this.a;
	}
};
function Xx(e = 64) {
	let t = document.createElement("canvas");
	t.width = t.height = e;
	let n = t.getContext("2d");
	if (n) {
		let t = e / 2;
		n.fillStyle = "rgba(0,0,0,0.45)", n.beginPath(), n.arc(t, t, t * .95, 0, Math.PI * 2), n.fill(), n.fillStyle = "#ffd23f", n.beginPath(), n.arc(t, t, t * .62, 0, Math.PI * 2), n.fill(), n.strokeStyle = "#fff", n.lineWidth = e * .08, n.stroke();
	}
	let r = new Ta(t);
	return r.colorSpace = Gt, r;
}
//#endregion
//#region src/ui/markerTextures.ts
yu();
var Zx = {
	band: [.62, .8],
	fillAlpha: .14,
	haloAlpha: .4
}, Qx = {
	band: [.7, .82],
	fillAlpha: .3,
	haloAlpha: .38
}, $x = {
	band: [.7, .82],
	fillAlpha: .06,
	haloAlpha: .38
};
function eS(e) {
	let t = document.createElement("canvas");
	t.width = t.height = e;
	let n = t.getContext("2d");
	if (!n) throw Error("2D canvas unavailable");
	return [t, n];
}
function tS(e) {
	let t = new Ta(e);
	return t.colorSpace = Gt, t.anisotropy = 4, t.needsUpdate = !0, t;
}
function nS(e, t = 256) {
	let [n, r] = eS(t), i = t / 2, [a, o] = e.band, s = (o - a) * i, c = (a + o) / 2 * i;
	return r.save(), r.shadowColor = `rgba(0,0,0,${e.haloAlpha})`, r.shadowBlur = s * 1.2, r.strokeStyle = "rgba(0,0,0,1)", r.lineWidth = s, r.globalAlpha = e.haloAlpha, r.beginPath(), r.arc(i, i, c, 0, Math.PI * 2), r.stroke(), r.restore(), e.fillAlpha > 0 && (r.fillStyle = `rgba(255,255,255,${e.fillAlpha})`, r.beginPath(), r.arc(i, i, a * i, 0, Math.PI * 2), r.fill()), r.strokeStyle = "rgba(255,255,255,0.97)", r.lineWidth = s, r.beginPath(), r.arc(i, i, c, 0, Math.PI * 2), r.stroke(), tS(n);
}
function rS(e, t = 512) {
	let [n, r] = eS(t), i = t / 2;
	r.drawImage(e, 0, 0, t, t), r.globalCompositeOperation = "destination-in";
	let a = r.createRadialGradient(i, i, i * .9, i, i, i);
	return a.addColorStop(0, "rgba(0,0,0,1)"), a.addColorStop(1, "rgba(0,0,0,0)"), r.fillStyle = a, r.fillRect(0, 0, t, t), r.globalCompositeOperation = "source-over", tS(n);
}
function iS(e, t = 256) {
	let [n, r] = eS(t), i = "naturalWidth" in e ? e.naturalWidth : e.width, a = "naturalHeight" in e ? e.naturalHeight : e.height, o = t / Math.max(1, i, a);
	return r.drawImage(e, (t - i * o) / 2, (t - a * o) / 2, i * o, a * o), tS(n);
}
function aS(e) {
	return new Promise((t, n) => {
		let r = new Image();
		r.crossOrigin = "anonymous", r.decoding = "async", r.onload = () => t(r), r.onerror = () => n(/* @__PURE__ */ Error(`image failed to load: ${e}`)), r.src = e;
	});
}
//#endregion
//#region src/ui/Nadir.ts
yu();
var oS = class {
	object = new er();
	discs = [];
	materials = [];
	geometry;
	texture = null;
	constructor(e) {
		let t = e.radiusM ?? .28;
		this.geometry = new Aa(t, 64), this.geometry.rotateX(-Math.PI / 2);
		for (let e = 0; e < 2; e++) {
			let t = new mi({
				transparent: !0,
				opacity: 0,
				depthWrite: !1,
				depthTest: !1
			}), n = new Ei(this.geometry, t);
			n.renderOrder = 5, n.visible = !1, n.name = `tf-nadir-${e}`, this.materials.push(t), this.discs.push(n), this.object.add(n);
		}
		this.object.name = "tf-nadir";
		let n = new po();
		n.setCrossOrigin("anonymous"), n.load(e.url, (e) => {
			this.texture = rS(e);
			for (let e of this.materials) e.map = this.texture, e.needsUpdate = !0;
		}, void 0, () => console.warn(`[tourforge] nadir logo failed to load: ${e.url}`));
	}
	update(e, t, n, r) {
		[{
			e,
			opacity: 1 - n
		}, {
			e: t,
			opacity: n
		}].forEach(({ e, opacity: t }, n) => {
			let i = this.discs[n], a = r && !!this.texture && !!e && t > .01;
			i.visible = a, a && e && (i.position.set(e.sweep.position[0], e.floorY + .02, e.sweep.position[2]), i.rotation.set(0, e.sweep.yawOffset, 0), this.materials[n].opacity = t);
		});
	}
	dispose() {
		this.geometry.dispose(), this.texture?.dispose();
		for (let e of this.materials) e.dispose();
	}
};
//#endregion
//#region src/ui/Reticle.ts
yu();
var sS = new V(0, 0, 1), cS = class {
	object = new er();
	disc;
	material;
	floorTexture;
	wallTexture;
	target = new V();
	targetQuat = new ln();
	targetNormal = new V(0, 1, 0);
	targetRadius = .1;
	kind = null;
	customTexture = null;
	imageToken = 0;
	opts;
	quat = new ln();
	state = {
		visible: !1,
		kind: null,
		distance: 0,
		radius: 0
	};
	constructor(e = {}) {
		this.opts = {
			angularSize: e.angularSize ?? .055,
			minRadius: e.minRadius ?? .05,
			maxRadius: e.maxRadius ?? .28,
			color: e.color ?? 16777215,
			floorColor: e.floorColor ?? 16777215
		}, this.floorTexture = nS(Qx), this.wallTexture = nS($x), this.material = new mi({
			map: this.floorTexture,
			transparent: !0,
			opacity: .95,
			depthWrite: !1,
			depthTest: !1,
			side: 2
		}), this.disc = new Ei(new Na(2, 2), this.material), this.disc.frustumCulled = !1, this.disc.renderOrder = 20, this.object.add(this.disc), this.object.name = "tf-reticle", this.object.visible = !1;
	}
	update(e, t, n) {
		if (!e) {
			this.object.visible = !1, this.state.visible = !1, this.state.kind = null;
			return;
		}
		let r = 2 * Math.tan(n / 2) / Math.max(1, t), i = e.distance * r * t * this.opts.angularSize, a = Math.min(this.opts.maxRadius, Math.max(this.opts.minRadius, i)), o = !this.object.visible;
		this.target.copy(e.point).addScaledVector(e.normal, Math.max(.01, a * .04)), this.targetNormal.copy(e.normal), this.targetQuat.setFromUnitVectors(sS, e.normal), this.targetRadius = a, o && this.snap(), e.kind !== this.kind && (this.material.map = this.customTexture ?? (e.kind === "floor" ? this.floorTexture : this.wallTexture), this.material.needsUpdate = !0, this.kind = e.kind), this.object.visible = !0, this.state.visible = !0, this.state.kind = e.kind, this.state.distance = e.distance, this.state.radius = a;
	}
	tick(e) {
		if (!this.object.visible) return;
		let t = 1 - Math.exp(-e / 45);
		this.object.position.lerp(this.target, t), this.object.quaternion.slerp(this.targetQuat, t);
		let n = this.object.scale.x + (this.targetRadius - this.object.scale.x) * t;
		this.object.scale.setScalar(n);
	}
	snap() {
		this.object.position.copy(this.target), this.object.quaternion.copy(this.targetQuat), this.object.scale.setScalar(this.targetRadius);
	}
	async setImage(e) {
		let t = ++this.imageToken, n = null;
		if (e) try {
			n = iS(await aS(e));
		} catch (e) {
			console.warn("[tourforge] cursor image", e);
		}
		if (t !== this.imageToken) {
			n?.dispose();
			return;
		}
		this.customTexture?.dispose(), this.customTexture = n, this.material.map = n ?? (this.kind === "floor" ? this.floorTexture : this.wallTexture), this.material.needsUpdate = !0;
	}
	hide() {
		this.object.visible = !1, this.state.visible = !1;
	}
	dispose() {
		this.disc.geometry.dispose(), this.material.dispose(), this.floorTexture.dispose(), this.wallTexture.dispose(), this.customTexture?.dispose();
	}
};
//#endregion
//#region src/ui/Rings.ts
yu();
var lS = .2, uS = new ln().setFromAxisAngle(new V(1, 0, 0), -Math.PI / 2), dS = new W(), fS = new V(), pS = new V(), mS = new ea(), hS = class {
	mesh;
	pickRadius = .35;
	entries = [];
	hovered = null;
	geometry;
	material;
	texture;
	customTexture = null;
	imageToken = 0;
	constructor(e = 64) {
		this.geometry = new Na(lS * 2, lS * 2), this.texture = nS(Zx), this.material = new mi({
			map: this.texture,
			transparent: !0,
			opacity: .92,
			depthTest: !1,
			depthWrite: !1,
			side: 2
		}), this.mesh = new Xi(this.geometry, this.material, e), this.mesh.frustumCulled = !1, this.mesh.renderOrder = 10, this.mesh.count = 0, this.mesh.name = "tf-rings";
	}
	set(e) {
		this.entries = e.slice(0, this.mesh.instanceMatrix.count).map((e) => ({
			id: e.id,
			center: new V(e.floor[0], e.floor[1] + .02, e.floor[2])
		})), this.apply();
	}
	ids() {
		return this.entries.map((e) => e.id);
	}
	setHover(e) {
		e !== this.hovered && (this.hovered = e, this.apply());
	}
	pick(e) {
		let t = null, n = this.pickRadius;
		for (let r of this.entries) {
			mS.set(new V(0, 1, 0), -r.center.y);
			let i = e.intersectPlane(mS, pS);
			if (!i) continue;
			let a = Math.hypot(i.x - r.center.x, i.z - r.center.z);
			a < n && (n = a, t = r.id);
		}
		return t;
	}
	async setImage(e) {
		let t = ++this.imageToken, n = null;
		if (e) try {
			n = iS(await aS(e));
		} catch (e) {
			console.warn("[tourforge] point image", e);
		}
		if (t !== this.imageToken) {
			n?.dispose();
			return;
		}
		this.customTexture?.dispose(), this.customTexture = n, this.material.map = n ?? this.texture, this.material.needsUpdate = !0;
	}
	dispose() {
		this.geometry.dispose(), this.texture.dispose(), this.customTexture?.dispose(), this.material.dispose(), this.mesh.dispose();
	}
	apply() {
		this.entries.forEach((e, t) => {
			let n = e.id === this.hovered ? 1.3 : 1;
			fS.set(n, n, n), dS.compose(e.center, uS, fS), this.mesh.setMatrixAt(t, dS);
		}), this.mesh.count = this.entries.length, this.mesh.instanceMatrix.needsUpdate = !0;
	}
};
//#endregion
//#region src/ui/ringVisibility.ts
function gS(e, t, n = 256) {
	let { face: r, s: i, t: a } = Zv(t), o = e[r];
	if (!o) return NaN;
	let s = Math.max(0, Math.min(n - 1, Math.floor(i * n))), c = o[Math.max(0, Math.min(n - 1, Math.floor(a * n))) * n + s];
	return Number.isFinite(c) && c > 0 ? c : NaN;
}
function _S(e, t) {
	let n = [];
	for (let r of [
		20,
		27,
		35
	]) {
		let i = r * Math.PI / 180;
		for (let r = 0; r < 12; r++) {
			let a = r / 12 * Math.PI * 2, o = gS(e, [
				Math.sin(i) * Math.cos(a),
				-Math.cos(i),
				Math.sin(i) * Math.sin(a)
			]);
			Number.isFinite(o) && n.push(t.position[1] - o * Math.cos(i));
		}
	}
	return n.length < 12 ? null : (n.sort((e, t) => e - t), n[Math.floor(n.length * .1)]);
}
function vS(e, t, n, r = {}) {
	let i = r.slackM ?? .3, a = r.slackFrac ?? .08, o = $v(t.yawOffset), [s, c, l] = t.position, u = [
		[0, 0],
		[.18, 0],
		[-.18, 0],
		[0, .18],
		[0, -.18]
	], d = 0, f = 0;
	for (let [t, r] of u) {
		let u = [
			n[0] + t - s,
			n[1] + .06 - c,
			n[2] + r - l
		], p = Math.hypot(u[0], u[1], u[2]);
		if (p < 1e-6) continue;
		let m = gS(e, ey(o, [
			u[0] / p,
			u[1] / p,
			u[2] / p
		]));
		Number.isFinite(m) && (f++, m >= p - Math.max(i, a * p) && d++);
	}
	return f === 0 || d * 2 > f;
}
function yS(e, t, n, r = {}) {
	let i = r.slackM ?? .25, a = r.slackFrac ?? .06, o = $v(t.yawOffset), [s, c, l] = t.position, u = 0, d = 0;
	for (let t of n) {
		let n = [
			t[0] - s,
			t[1] - c,
			t[2] - l
		], r = Math.hypot(n[0], n[1], n[2]);
		if (r < 1e-6) continue;
		let f = gS(e, ey(o, [
			n[0] / r,
			n[1] / r,
			n[2] / r
		]));
		Number.isFinite(f) && (d++, f >= r - Math.max(i, a * r) && u++);
	}
	return d === 0 || u * 2 > d;
}
//#endregion
//#region src/version.ts
var bS = "0.0.1";
//#endregion
//#region src/api/Player.ts
yu();
var xS = 12, SS = class e {
	el;
	opts;
	static version = bS;
	static async mount(t, n = {}) {
		let r = new e(t, n);
		return await r.init(), r;
	}
	manifest;
	engine;
	assets;
	surface;
	material;
	look;
	transition;
	rings;
	reticle;
	nadir = null;
	nadirUrl = null;
	hud;
	hotspots;
	measure;
	measuring = !1;
	pickHandler = null;
	assetBase = "./";
	clipY = Infinity;
	goingInside = !1;
	modeT = 0;
	modes = new Gy();
	listeners = /* @__PURE__ */ new Map();
	tuning = {
		...Ex,
		blendWindow: [...Ex.blendWindow]
	};
	raycaster = new ts();
	gazeDir = new V();
	current;
	hopQueue = [];
	hopLookAt = null;
	ringFloor = /* @__PURE__ */ new Map();
	destroyed = !1;
	splitScreen = !1;
	constructor(e, t) {
		this.el = e, this.opts = t;
	}
	get currentSweep() {
		return this.current.id;
	}
	get mode() {
		return this.modes.mode;
	}
	get debug() {
		return {
			tuning: this.tuning,
			stats: this.engine.stats,
			state: this.transition.state,
			t: this.transition.t,
			currentSweep: this.current.id,
			splitScreen: this.splitScreen,
			setSplitScreen: (e) => {
				this.splitScreen = e, this.material.uniforms.debugSplit.value = +!!e;
			},
			residentLevels: (e) => this.assets.residentLevels(e),
			gpuBytes: () => this.assets.totalBytes(),
			surfaceTier: this.surface.tier,
			surfaceReady: (e) => this.surface.isReady(e),
			surfaceVisible: this.surface.object.visible,
			reticle: this.reticle.state,
			rings: this.rings.ids().map((e) => ({
				id: e,
				y: this.ringFloorY(this.assets.sweep(e))
			}))
		};
	}
	moveTo(e, t = {}) {
		this.assertAlive();
		let n = this.assets.sweep(e), r = t.lookAt ? new V().fromArray(t.lookAt) : t.rotation ? new V(0, 0, -1).applyEuler(new In(t.rotation[0], t.rotation[1], 0, "YXZ")).add(new V().fromArray(n.position)) : null;
		if (t.instant) {
			this.hopQueue = [];
			let e = r ? this.gazeToward(r, n) : this.engine.camera.quaternion.clone();
			this.transition.requestMove(n, e, { instant: !0 });
			return;
		}
		let i = this.transition.current.id, a = (t.direct ? [i, e] : Yy(this.assets.adjacency, this.assets.sweeps, i, e) ?? [i, e]).slice(1);
		a.length !== 0 && (this.hopQueue = a.slice(1), this.hopLookAt = r, this.transition.requestMove(this.assets.sweep(a[0]), this.engine.camera.quaternion, { lookAt: this.hopQueue.length === 0 ? r : null }));
	}
	lookAt(e) {
		this.assertAlive();
		let t = this.gazeToward(new V().fromArray(e), null);
		this.look.setFromQuaternion(t);
	}
	setMode(e) {
		if (this.assertAlive(), e === this.mode) return;
		let t = this.engine.camera;
		t.getWorldDirection(this.gazeDir), this.modes.setMode(e, {
			eye: [
				t.position.x,
				t.position.y,
				t.position.z
			],
			lookAt: [
				t.position.x + this.gazeDir.x,
				t.position.y + this.gazeDir.y,
				t.position.z + this.gazeDir.z
			]
		}), this.look.setOrbitTarget(e === "dollhouse" ? this.modes : null), this.reticle.hide(), this.rings.setHover(null), this.measure.clear(), this.hud.setMode(e), this.emit("modechange", { mode: e });
	}
	orbitBy(e, t) {
		this.assertAlive(), this.modes.orbitBy(e, t);
	}
	zoomBy(e) {
		this.assertAlive(), this.modes.zoomBy(e);
	}
	get isMeasuring() {
		return this.measuring;
	}
	setMeasuring(e) {
		this.assertAlive(), e !== this.measuring && (this.measuring = e, this.measure.clear(), this.hud.setMeasuring(e), e || this.emit("measure", { distance: null }));
	}
	setPickHandler(e) {
		this.assertAlive(), this.pickHandler = e, this.engine.canvas.style.cursor = e ? "crosshair" : "";
	}
	pick(e, t) {
		this.assertAlive();
		let n = this.engine.canvas.getBoundingClientRect(), r = new B((e - n.left) / n.width * 2 - 1, -((t - n.top) / n.height * 2 - 1)), i = this.surfaceHit(r);
		return i ? this.toPick(i) : null;
	}
	setHotspots(e) {
		this.assertAlive(), this.manifest.hotspots = [...e], this.hotspots.set(e, (e) => this.resolveUrl(e));
	}
	setCustomization(e) {
		this.assertAlive(), this.manifest.customization = e, this.reticle.setImage(e?.cursorUrl ? this.resolveUrl(e.cursorUrl) : null), this.rings.setImage(e?.markerUrl ? this.resolveUrl(e.markerUrl) : null), this.applyNadir(), this.hud.setMusic(e?.music ? {
			...e.music,
			url: this.resolveUrl(e.music.url)
		} : null);
	}
	openHotspot(e) {
		this.assertAlive();
		let t = this.hotspots.get(e);
		t && (this.emit("hotspotclick", { id: e }), this.opts.hud && t.html?.trim() && this.hud.openPopup(t.title ?? "", t.html));
	}
	resolveUrl(e) {
		return new URL(e, this.assetBase).toString();
	}
	on(e, t) {
		let n = this.listeners.get(e);
		return n || (n = /* @__PURE__ */ new Set(), this.listeners.set(e, n)), n.add(t), () => this.off(e, t);
	}
	off(e, t) {
		this.listeners.get(e)?.delete(t);
	}
	async screenshot(e = "image/jpeg", t = .92) {
		return this.assertAlive(), this.engine.renderOnce(), new Promise((n, r) => {
			this.engine.canvas.toBlob((e) => e ? n(e) : r(/* @__PURE__ */ Error("toBlob failed")), e, t);
		});
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.engine.dispose(), this.look.dispose(), this.assets.dispose(), this.rings.dispose(), this.reticle.dispose(), this.nadir?.dispose(), this.hotspots.dispose(), this.measure.dispose(), this.hud.dispose(), this.surface.dispose(), this.material.dispose(), this.listeners.clear());
	}
	async init() {
		this.manifest = this.opts.manifest ? Gv(this.opts.manifest) : await CS(this.opts.manifestUrl);
		let e = wS(this.manifest.assetBase, this.opts.manifestUrl);
		this.assetBase = e, this.engine = new ky(this.el, {
			maxPixelRatio: 2,
			preserveDrawingBuffer: this.opts.preserveDrawingBuffer ?? !1
		}), this.engine.onQualityStep = (e, t, n) => {
			t >= 3 && (this.assets.levelCap = 1024), this.emit("qualitystep", {
				from: e,
				to: t,
				p90ms: n
			});
		};
		let t = this.opts.gpuBudgetBytes;
		this.assets = new Cy(this.manifest, e, t ? { gpuBudgetBytes: t } : {});
		let n = this.opts.quality === "fallback", r = !n && this.manifest.sweeps.some((e) => e.depth), i = !n && this.manifest.mesh?.tier === "A";
		this.material = gb({
			hasDepth: r,
			hasMeshColor: i
		});
		let a = null;
		if (i) {
			let t = new Tx(this.material, e, r);
			try {
				if (await t.load(this.manifest.mesh)) {
					if (a = t, this.manifest.mesh?.bounds) {
						let e = this.assets.sweep(this.manifest.tour.startSweep);
						this.modes.fit(this.manifest.mesh.bounds, tb(e));
					}
				} else t.dispose();
			} catch (e) {
				console.warn("[tourforge] mesh load failed, falling back to depth shells", e), t.dispose();
			}
		}
		this.surface = a ?? (r ? new db(this.material, e, 6, this.tuning.shellSwapT) : new rb(this.material, 5, this.tuning.shellSwapT)), this.engine.scene.add(this.surface.object), this.rings = new hS(), this.engine.scene.add(this.rings.mesh), this.reticle = new cS(), this.engine.scene.add(this.reticle.object), this.hotspots = new Vx(), this.engine.scene.add(this.hotspots.object);
		let o = this.opts.hud ? this.opts.hud === !0 ? {} : this.opts.hud : null;
		this.hud = new qx(this.el, o, {
			setMode: (e) => {
				try {
					this.setMode(e);
				} catch (e) {
					this.emit("error", { error: e });
				}
			},
			setMeasuring: (e) => this.setMeasuring(e)
		}), this.measure = new Yx(this.hud.overlay), this.engine.scene.add(this.measure.object), this.hotspots.set(this.manifest.hotspots, (e) => this.resolveUrl(e)), this.setCustomization(this.manifest.customization), this.current = this.assets.sweep(this.manifest.tour.startSweep), this.look = new zy(this.engine.canvas), this.look.setFov(this.tuning.fovDeg);
		let [s, c] = this.manifest.tour.startRotation;
		this.look.setAngles(s, c), this.look.onClick = (e) => {
			e.button === 0 && this.handleClick(e.ndc);
		}, this.look.onHover = (e) => this.handleHover(e), this.transition = new Fx({
			isReady: (e) => this.assets.isTransitionReady(e) && this.surface.isReady(e),
			prefetch: (e) => Promise.all([this.assets.prefetchForTransition(e), this.surface.ensure?.(this.assets.sweep(e)) ?? Promise.resolve()])
		}, this.current, this.look.quaternion()), this.transition.tuning = this.tuning, this.transition.onStart = (e, t, n) => {
			this.assets.setPinned(e.pano.id, t.pano.id), this.emit("transitionstart", {
				from: e.pano.id,
				to: t.pano.id,
				durationMs: n
			});
		}, this.transition.onArrive = (e) => this.arrive(e), this.hud.setCapabilities({
			dollhouse: this.surface.tier === "A" && !!this.manifest.mesh?.bounds,
			measure: this.surface.tier !== "C"
		}), this.hud.setMode(this.mode), await this.assets.ensureLevel(this.current.id, 512, 10), await this.surface.ensure?.(this.current), this.engine.camera.position.fromArray(this.current.position), this.tick(0, performance.now());
		try {
			await this.engine.renderer.compileAsync(this.engine.scene, this.engine.camera);
		} catch {}
		this.engine.onFrame((e, t) => this.tick(e, t)), this.engine.start(), this.assets.setPinned(this.current.id, null), this.assets.prefetchAround(this.current.id), this.updateRings(), this.emit("ready", { sweep: this.current.id });
	}
	tick(e, t) {
		if (this.destroyed) return;
		this.look.update(e), this.updateDesiredLevel(), this.surface.setShellSwapT && this.surface.setShellSwapT(this.tuning.shellSwapT);
		let n = this.transition.update(t), r = this.engine.camera;
		r.position.copy(n.position), n.state === "TRANSITION" ? r.quaternion.copy(n.quaternion) : this.look.quaternion(r.quaternion), this.engine.camera.getWorldDirection(this.gazeDir);
		let i = this.modes.update(t, [
			r.position.x,
			r.position.y,
			r.position.z
		], [
			r.position.x + this.gazeDir.x,
			r.position.y + this.gazeDir.y,
			r.position.z + this.gazeDir.z
		]);
		i.t > 0 && (r.position.set(i.eye[0], i.eye[1], i.eye[2]), r.lookAt(i.lookAt[0], i.lookAt[1], i.lookAt[2])), r.fov !== this.look.fov && (r.fov = this.look.fov, r.updateProjectionMatrix());
		let a = this.material.uniforms, o = n.from.pano, s = this.assets.bestTexture(o.id);
		a.panoA.value = s?.texture ?? null, a.posA.value.fromArray(o.position), a.rotA.value.fromArray($v(o.yawOffset)), a.depthA.value = this.surface.depthTextureFor?.(o.id) ?? null;
		let c = n.to?.pano ?? null;
		if (c && n.state === "TRANSITION") {
			let e = this.assets.bestTexture(c.id);
			a.panoB.value = e?.texture ?? a.panoA.value, a.posB.value.fromArray(c.position), a.rotB.value.fromArray($v(c.yawOffset)), a.blend.value = n.blend, a.depthB.value = this.surface.depthTextureFor?.(c.id) ?? a.depthA.value;
		} else a.panoB.value = a.panoA.value, a.posB.value.copy(a.posA.value), a.rotB.value.copy(a.rotA.value), a.blend.value = 0, a.depthB.value = a.depthA.value;
		a.occBias.value = this.tuning.occlusionBias;
		let l = this.surface.tier === "A" && n.state === "TRANSITION" ? Ax(n.t, this.tuning) : 0;
		a.modeMix.value = Math.max(l, this.surface.tier === "A" ? i.modeMix : 0), a.clipY.value = i.clipY, this.surface.setBackdropVisible?.(i.t < .5);
		let u = this.engine.pixelRatio, { width: d, height: f } = this.engine.size;
		a.resolution.value.set(d * u, f * u), this.surface.update(o, n.state === "TRANSITION" ? c : null, n.t);
		let p = n.state === "IDLE" || n.state === "SETTLE" || n.state === "PREFETCH";
		this.rings.mesh.visible = p && i.t < .01, (!p || i.t >= .01) && this.reticle.hide(), this.reticle.tick(e);
		let m = n.state === "TRANSITION" && c !== null;
		this.nadir?.update({
			sweep: o,
			floorY: this.ringFloorY(o)
		}, m && c ? {
			sweep: c,
			floorY: this.ringFloorY(c)
		} : null, m ? n.blend : 0, i.t < .01), this.clipY = i.clipY, this.modeT = i.t;
		let h = m && c && n.blend >= .5 ? c : o, g = i.t < .01 ? this.surface.depthFacesFor?.(h.id) ?? null : null;
		if (this.hotspots.update(e, i.clipY, g ? (e) => yS(g, h, e) : null), this.measure.update(r, d, f), n.state === "IDLE" && this.hopQueue.length) {
			let e = this.hopQueue.shift();
			this.transition.requestMove(this.assets.sweep(e), r.quaternion, { lookAt: this.hopQueue.length === 0 ? this.hopLookAt : null });
		}
	}
	updateDesiredLevel() {
		let e = this.current.pano.levels;
		if (!e.length) return;
		let { height: t } = this.engine.size, n = this.look.fov * Math.PI / 180, { show: r } = yy(e, t * this.engine.pixelRatio, n);
		r !== this.assets.desiredLevel && (this.assets.desiredLevel = r);
	}
	arrive(e) {
		let t = this.current.id === e.id ? null : this.current.id;
		this.current = e, this.modes.setFloorElevation(tb(e)), this.look.setFromQuaternion(this.transition.quaternion), this.assets.setPinned(e.id, null), this.assets.prefetchAround(e.id);
		for (let t of this.assets.neighbors(e.id)) this.surface.ensure?.(this.assets.sweep(t))?.then(() => this.refreshRingFloor(t));
		this.updateRings(), this.emit("sweepchange", {
			id: e.id,
			from: t
		});
	}
	updateRings() {
		let e = this.current, t = this.surface.depthFacesFor?.(e.id) ?? null, n = new Set(this.assets.neighbors(e.id)), r = Jy(this.assets.adjacency, e.id), i = [], a = [];
		for (let o of this.assets.sweeps.values()) {
			if (o.id === e.id || o.floor !== e.floor || !r.has(o.id)) continue;
			let s = Math.hypot(o.position[0] - e.position[0], o.position[2] - e.position[2]);
			if (s < .3 || s > xS) continue;
			let c = {
				id: o.id,
				floor: [
					o.position[0],
					this.ringFloorY(o),
					o.position[2]
				]
			};
			n.has(o.id) && a.push(c), (t ? vS(t, e, c.floor) : n.has(o.id)) && i.push(c);
		}
		this.rings.set(i.length ? i : a);
	}
	ringFloorY(e) {
		let t = this.ringFloor.get(e.id);
		if (t !== void 0) return t;
		let n = this.surface.depthFacesFor?.(e.id), r = tb(e);
		if (n) {
			let t = _S(n, e), i = t !== null && Math.abs(t - r) < .3 ? t : r;
			return this.ringFloor.set(e.id, i), i;
		}
		return r;
	}
	refreshRingFloor(e) {
		this.destroyed || this.ringFloor.has(e) || this.surface.depthFacesFor?.(e) && this.updateRings();
	}
	rayFor(e) {
		return this.raycaster.setFromCamera(e, this.engine.camera), this.raycaster.ray;
	}
	modeFlying() {
		return this.mode === "dollhouse" ? this.modeT < .999 : this.modeT > .001;
	}
	surfaceHit(e) {
		let t = this.rayFor(e);
		return this.mode === "dollhouse" ? this.surface.raycast(t, this.transition.current, {
			maxY: this.clipY,
			floorFallback: !1
		}) : this.surface.raycast(t, this.transition.current);
	}
	toPick(e) {
		let { point: t, normal: n } = this.fitSurfacePlane(e);
		return {
			point: [
				t.x,
				t.y,
				t.z
			],
			normal: [
				n.x,
				n.y,
				n.z
			],
			kind: e.kind,
			sweep: this.transition.current.id
		};
	}
	fitSurfacePlane(e) {
		let t = e.normal.clone().normalize(), n = this.engine.camera.position, r = new V().crossVectors(Math.abs(t.y) > .9 ? new V(1, 0, 0) : new V(0, 1, 0), t).normalize(), i = new V().crossVectors(t, r), a = [e.point.clone()], o = Math.min(.25, Math.max(.06, e.distance * .04)), s = new pi(), c = this.mode === "dollhouse" ? {
			maxY: this.clipY,
			floorFallback: !1
		} : { floorFallback: !1 };
		for (let l of [
			-1,
			0,
			1
		]) for (let u of [
			-1,
			0,
			1
		]) {
			if (l === 0 && u === 0) continue;
			let d = e.point.clone().addScaledVector(r, l * o).addScaledVector(i, u * o);
			s.set(n, d.sub(n).normalize());
			let f = this.surface.raycast(s, this.transition.current, c);
			f && Math.abs(f.point.clone().sub(e.point).dot(t)) < o * 1.5 && a.push(f.point);
		}
		let l = t.clone();
		if (a.length >= 5) {
			let e = a.reduce((e, t) => e.add(t), new V()).divideScalar(a.length), n = 0, r = 0, i = 0, o = 0, s = 0, c = 0;
			for (let t of a) {
				let a = t.x - e.x, l = t.y - e.y, u = t.z - e.z;
				n += a * a, r += a * l, i += a * u, o += l * l, s += l * u, c += u * u;
			}
			let u = 1e-6 * (n + o + c + 1e-9), d = new H().set(n + u, r, i, r, o + u, s, i, s, c + u);
			if (Math.abs(d.determinant()) > 1e-18) {
				d.invert();
				for (let e = 0; e < 12; e++) l.applyMatrix3(d).normalize();
				Number.isFinite(l.x) || l.copy(t);
			}
		}
		return l.dot(t) < 0 && l.negate(), Math.abs(l.y) < .35 ? (l.y = 0, l.normalize()) : Math.abs(l.y) > .9 && l.set(0, Math.sign(l.y), 0), l.dot(new V().subVectors(n, e.point)) < 0 && l.negate(), {
			point: e.point.clone(),
			normal: l
		};
	}
	clickableHotspot(e) {
		let t = this.hotspots.pick(e);
		return t && this.hotspots.get(t)?.html?.trim() ? t : null;
	}
	handleHover(e) {
		let t = this.engine.canvas;
		if (this.goingInside || this.transition.state === "TRANSITION" || this.modeFlying()) {
			this.reticle.hide();
			return;
		}
		let n = this.rayFor(e), r = this.pickHandler || this.measuring ? null : this.clickableHotspot(n);
		if (this.hotspots.setHover(r), r) {
			t.style.cursor = "pointer", this.reticle.hide(), this.rings.setHover(null);
			return;
		}
		if (t.style.cursor = this.pickHandler ? "crosshair" : "", this.mode === "dollhouse") {
			let n = this.surfaceHit(e);
			this.measuring ? this.measure.hover(n?.point ?? null) : !this.pickHandler && n && (t.style.cursor = "pointer");
			return;
		}
		let i = this.measuring || this.pickHandler ? null : this.rings.pick(this.rayFor(e));
		this.rings.setHover(i), i && this.assets.prefetchForTransition(i).catch(() => void 0);
		let a = this.surface.raycast(this.rayFor(e), this.transition.current);
		this.reticle.update(a, this.engine.size.height, this.look.fov * Math.PI / 180), this.measuring && this.measure.hover(a?.point ?? null);
	}
	handleClick(e) {
		if (this.goingInside || this.hud.popupOpen || this.modeFlying()) return;
		if (this.pickHandler) {
			let t = this.surfaceHit(e);
			t && this.pickHandler(this.toPick(t));
			return;
		}
		if (this.measuring) {
			if (this.transition.state === "TRANSITION") return;
			let t = this.surfaceHit(e);
			if (!t) return;
			let n = this.measure.click(t.point);
			n !== null && this.emit("measure", { distance: n });
			return;
		}
		let t = this.clickableHotspot(this.rayFor(e));
		if (t) {
			this.openHotspot(t);
			return;
		}
		if (this.mode === "dollhouse") {
			let t = this.surfaceHit(e);
			t && this.goInside(t);
			return;
		}
		let n = this.rings.pick(this.rayFor(e));
		if (n) {
			this.moveTo(n, { direct: !0 });
			return;
		}
		let r = this.transition.current, i = this.surface.raycast(this.rayFor(e), r);
		if (!i) return;
		let a = this.nearestSweepToHit(i, r);
		if (!a) return;
		let o = i.kind === "floor" ? void 0 : [
			i.point.x,
			i.point.y,
			i.point.z
		];
		this.moveTo(a.id, {
			direct: this.rings.ids().includes(a.id),
			lookAt: o
		});
	}
	nearestSweepToHit(e, t) {
		let n = e.point.clone().addScaledVector(e.normal, e.kind === "floor" ? 0 : .6), r = Jy(this.assets.adjacency, t.id);
		return Zy(n, [...this.assets.sweeps.values()].filter((e) => r.has(e.id)), {
			exclude: t.id,
			floor: t.floor,
			preferred: new Set(this.rings.ids())
		});
	}
	async goInside(e) {
		let t = [...this.assets.sweeps.values()], n = t.filter((t) => e.point.y >= tb(t) - .5 && e.point.y <= tb(t) + 3.5), r = Zy(e.point, n.length ? n : t);
		if (!r) return;
		this.goingInside = !0, this.engine.canvas.style.cursor = "progress";
		try {
			await Promise.all([this.assets.prefetchForTransition(r.id), this.surface.ensure?.(r) ?? Promise.resolve()]);
		} catch {} finally {
			this.goingInside = !1, this.destroyed || (this.engine.canvas.style.cursor = "");
		}
		if (this.destroyed || this.mode !== "dollhouse") return;
		let i = new V().fromArray(r.position), a = new V(e.point.x - i.x, 0, e.point.z - i.z);
		if (a.lengthSq() < .25) {
			let { yaw: e } = this.modes.orbit;
			a.set(-Math.sin(e), 0, -Math.cos(e));
		}
		let o = this.gazeToward(i.clone().add(a.normalize()), r);
		this.hopQueue = [], this.transition.requestMove(r, o, { instant: !0 }), this.setMode("inside");
	}
	applyNadir() {
		let e = this.manifest.customization?.nadirUrl, t = this.manifest.tour.brand?.logoUrl, n = e ? this.resolveUrl(e) : this.opts.nadir ? t ? this.resolveUrl(t) : this.opts.nadir.url : null;
		n !== this.nadirUrl && (this.nadirUrl = n, this.nadir &&= (this.engine.scene.remove(this.nadir.object), this.nadir.dispose(), null), n && (this.nadir = new oS({
			...this.opts.nadir,
			url: n
		}), this.engine.scene.add(this.nadir.object)));
	}
	gazeToward(e, t) {
		let n = t ? new V().fromArray(t.position) : this.engine.camera.position.clone(), r = new W().lookAt(n, e, new V(0, 1, 0));
		return new ln().setFromRotationMatrix(r);
	}
	emit(e, t) {
		let n = this.listeners.get(e);
		if (n) for (let e of n) try {
			e(t);
		} catch (e) {
			console.error("[tourforge] listener error", e);
		}
	}
	assertAlive() {
		if (this.destroyed) throw Error("Player has been destroyed");
	}
};
async function CS(e) {
	if (!e) throw Error("TourForge.mount: pass `manifestUrl` or `manifest`");
	let t = await fetch(e, { credentials: "same-origin" });
	if (!t.ok) throw Error(`manifest fetch failed: HTTP ${t.status} for ${e}`);
	return Gv(await t.json());
}
function wS(e, t) {
	let n = typeof document < "u" ? document.baseURI : "http://localhost/", r = t ? new URL(t, n) : new URL(n), i = new URL(e, r).toString();
	return i.endsWith("/") ? i : `${i}/`;
}
var TS = {
	version: bS,
	mount: (e, t) => SS.mount(e, t)
};
//#endregion
export { Cy as AssetSystem, Ex as DEFAULT_TUNING, pb as DUAL_PROJECTOR_FRAG, fb as DUAL_PROJECTOR_VERT, db as DepthShellSurface, Ny as EASINGS, ky as Engine, Vx as HotspotLayer, qx as Hud, zy as LookController, Yx as MeasureTool, Tx as MeshSurface, Gy as ModeController, oS as NadirPatch, SS as Player, cS as Reticle, hS as RingLayer, ob as SUBDIVISION_TO_DETAIL, rb as SphereSurface, TS as TourForge, Fx as TransitionController, bS as VERSION, Yy as aStar, Ky as buildAdjacency, Py as clamp, Fy as clamp01, gb as createDualProjectorMaterial, by as cubemapBytes, Ay as easeInOutCubic, jy as easeInOutSine, tb as floorYOf, Jx as formatDistance, Qy as halfToFloat, Iy as lerp, My as linear, eb as loadDepthCube, $y as makeDepthCubeTexture, Ax as meshReveal, Zy as nearestSweepTo, vy as pixelsPerTexel, Kx as popupDocument, Ox as positionEase, Jy as reachableFrom, Xy as resolveClickTarget, yy as selectPanoLevel, Ly as smoothstep, qy as sweepDistance, kx as textureBlend, Dx as transitionDurationMs };
