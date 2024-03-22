import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
import Test from "@/pages/Admin/QuanLyAdmin/index1.vue";
import Admin from "@/pages/Admin/QuanLyAdmin";
import Staff from "@/pages/Admin/Staff";
import KhachHang from "@/pages/Admin/KhachHang";
import Quyen from "@/pages/Admin/Quyen";
import DanhMuc from "@/pages/Admin/DanhMuc";
import KhuVuc from "@/pages/Admin/KhuVuc";
import MonAn from '@/pages/Admin/MonAn';
import Ban from "@/pages/Admin/Ban";
const routes = [
    {
        path: "/",
        component: AdminMaster,
        children: [
            {
                path: "",
                component: Test,
            },
            {
                path: "admin",
                component: Admin,
            },
            {
                path: "staff",
                component: Staff,
            },
            {
                path: "khach-hang",
                component: KhachHang,
            },
            {
                path: "quyen",
                component: Quyen,
            },
            {
                path: "danh-muc",
                component: DanhMuc,
            },
            {
                path: "khu-vuc",
                component: KhuVuc,
            },
            {
              path: "mon-an",
              component: MonAn,
            },
            {
                path: "ban",
                component: Ban,
            },
        ],
    },
]
const router = new createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
