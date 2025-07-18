# 🍅 Pomodoro Timer

แอปพลิเคชัน Pomodoro Timer ที่สวยงามและใช้งานง่าย สร้างด้วย Next.js, React และ Tailwind CSS ช่วยเพิ่มประสิทธิภาพการทำงานด้วยเทคนิค Pomodoro ที่ได้รับการพิสูจน์แล้ว พร้อมอินเทอร์เฟซที่ทันสมัยและรองรับภาษาไทย

## ✨ คุณสมบัติ

### ฟังก์ชันหลัก

- ⏱️ **ตัวจับเวลา Pomodoro แบบคลาสสิก** - เซสชันทำงาน 25 นาที พร้อมพัก 5 นาที
- 🔄 **เปลี่ยนช่วงเวลาอัตโนมัติ** - เปลี่ยนระหว่างช่วงทำงานและพักอย่างราบรื่น
- 📊 **ติดตามความคืบหน้า** - แถบความคืบหน้าและสถิติการทำงานเสร็จ
- 🔔 **การแจ้งเตือนด้วยเสียง** - เสียงแจ้งเตือนเมื่อช่วงเวลาเสร็จสิ้น
- ⚙️ **ตั้งค่าได้ตามต้องการ** - ปรับระยะเวลาทำงานและพักตามความชอบ

### ประสบการณ์ผู้ใช้

- 🎨 **ดีไซน์ UI ทันสมัย** - อินเทอร์เฟซที่สะอาด ตอบสนองได้ พร้อมพื้นหลังไล่สี
- 🌏 **รองรับภาษาไทยเต็มรูปแบบ** - แปลเป็นภาษาไทยทั้งหมดเพื่อการเข้าถึงที่ดีขึ้น
- 📱 **ตอบสนองบนมือถือ** - ใช้งานได้อย่างสมบูรณ์บนเดสก์ท็อป แท็บเล็ต และมือถือ
- 🎯 **ตัวบ่งชี้ช่วงเวลาที่ชัดเจน** - ไอคอนและสีที่ชัดเจนสำหรับช่วงเวลาต่างๆ
- 📈 **สถิติรายวัน** - ติดตาม pomodoros และรอบที่เสร็จสิ้น

### คุณสมบัติทางเทคนิค

- ⚡ **สร้างด้วย Next.js 14** - เฟรมเวิร์ก React ทันสมัยพร้อม App Router
- 🎨 **Tailwind CSS** - เฟรมเวิร์ก CSS แบบ utility-first สำหรับการจัดแต่งที่รวดเร็ว
- 🧩 **คอมโพเนนต์ Shadcn/ui** - คอมโพเนนต์ UI คุณภาพสูงและเข้าถึงได้
- 🔊 **Web Audio API** - เสียงแจ้งเตือนผ่านเบราว์เซอร์
- 💾 **การจัดการ State ในเครื่อง** - การจัดการ state ของ React ที่มีประสิทธิภาพ

## 📖 วิธีการใช้งาน

### การใช้งานพื้นฐาน

1. **เริ่มเซสชัน Pomodoro**

   - คลิกปุ่ม "เริ่มต้น" เพื่อเริ่มเซสชันทำงาน 25 นาที
   - จดจ่อกับงานของคุณในช่วงเวลานี้

2. **พักผ่อน**

   - หลังจากเซสชันทำงานแต่ละครั้ง ตัวจับเวลาจะเปลี่ยนเป็นช่วงพัก 5 นาทีโดยอัตโนมัติ
   - ใช้เวลานี้พักสายตา ยืดเส้น หรือเดินเล่นสั้นๆ

3. **ทำรอบให้เสร็จ**

   - หลังจากเซสชันทำงาน 4 ครั้ง คุณจะได้พักยาว 15 นาที
   - นี่คือการทำรอบ Pomodoro ที่สมบูรณ์

4. **ติดตามความคืบหน้า**
   - ดูสถิติรายวันในการ์ดสถิติ
   - ดูว่าคุณทำ pomodoros และรอบได้กี่ครั้งแล้ว

### การปรับแต่ง

1. **ปรับตั้งค่าตัวจับเวลา**

   - คลิกปุ่ม "ตั้งค่า"
   - แก้ไขระยะเวลาทำงาน (1-60 นาที)
   - ปรับระยะเวลาพักสั้น (1-30 นาที)
   - ตั้งระยะเวลาพักยาว (1-60 นาที)

2. **รีเซ็ตตัวจับเวลา**
   - ใช้ปุ่ม "รีเซ็ต" เพื่อเริ่มเซสชันปัจจุบันใหม่
   - จะกลับไปที่ช่วงทำงานด้วยระยะเวลาที่คุณตั้งค่าไว้

## 🎯 เทคนิค Pomodoro

เทคนิค Pomodoro เป็นวิธีการจัดการเวลาที่พัฒนาโดย Francesco Cirillo ในช่วงปลายทศวรรษ 1980 วิธีการทำงาน:

### กระบวนการ

1. **ทำงาน 25 นาที** - จดจ่ออย่างเต็มที่กับงานที่เลือก
2. **พัก 5 นาที** - พักสายตาและร่างกาย ลุกขึ้นเดิน
3. **ทำซ้ำ 4 ครั้ง** - ทำขั้นตอนที่ 1-2 อีก 3 ครั้ง
4. **พักยาว** - หลังจาก 4 รอบ ให้พัก 15-30 นาที

### ประโยชน์

- 🎯 **เพิ่มสมาธิ** - ลดสิ่งรบกวนและเพิ่มความเข้มข้น
- 💪 **ลดความเหนื่อยล้า** - การพักสม่ำเสมอป้องกันความเหนื่อยล้าทางจิต
- ⚡ **เพิ่มประสิทธิภาพ** - ช่วงเวลาทำงานที่มีโครงสร้างเพิ่มประสิทธิภาพ
- ⏰ **การจัดการเวลาที่ดีขึ้น** - ช่วยประเมินและวางแผนงาน
- 🚫 **ลดการผัดวันประกันพรุ่ง** - ทำให้งานใหญ่ดูจัดการได้ง่ายขึ้น

## 🛠️ เทคโนโลยีที่ใช้

- **เฟรมเวิร์ก**: Next.js 14 พร้อม App Router
- **ภาษา**: TypeScript
- **การจัดแต่ง**: Tailwind CSS
- **คอมโพเนนต์ UI**: Shadcn/ui
- **ไอคอน**: Lucide React
- **การจัดการ State**: React Hooks (useState, useEffect, useRef)
- **เสียง**: Web Audio API พร้อมเสียงที่เข้ารหัส base64

## 🎨 การปรับแต่ง

### ธีมและสี

แอปพลิเคชันใช้โทนสีที่สะอาดและทันสมัย:

- **ช่วงทำงาน**: สีแดง (`text-red-600`, `bg-red-50`)
- **พักสั้น**: สีเขียว (`text-green-600`, `bg-green-50`)
- **พักยาว**: สีน้ำเงิน (`text-blue-600`, `bg-blue-50`)

### การเพิ่มฟีเจอร์ใหม่

โค้ดมีโครงสร้างที่เพิ่มฟีเจอร์ใหม่ได้ง่าย:

- การตั้งค่าตัวจับเวลาเก็บใน interface `TimerSettings`
- ตรรกะของช่วงเวลาจัดการใน hook `useEffect` หลัก
- คอมโพเนนต์ UI เป็นโมดูลาร์และใช้ซ้ำได้

## 🤝 การมีส่วนร่วม

ยินดีรับการมีส่วนร่วม! วิธีที่คุณสามารถช่วยได้:

1. **Fork โปรเจค**
2. **สร้าง feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit การเปลี่ยนแปลง** (`git commit -m 'Add some amazing feature'`)
4. **Push ไปยัง branch** (`git push origin feature/amazing-feature`)
5. **เปิด Pull Request**

### แนวทางการพัฒนา

- ปฏิบัติตาม TypeScript best practices
- ใช้ Tailwind CSS สำหรับการจัดแต่ง
- รักษาหลักการ responsive design
- เพิ่มการจัดการข้อผิดพลาดที่เหมาะสม
- เขียนข้อความ commit ที่ชัดเจน

## 📝 ลิขสิทธิ์

โปรเจคนี้อยู่ภายใต้ลิขสิทธิ์ MIT License - ดูไฟล์ [LICENSE](LICENSE) สำหรับรายละเอียด

## 🙏 กิตติกรรมประกาศ

- **Francesco Cirillo** - ผู้สร้างเทคนิค Pomodoro
- **Shadcn** - สำหรับไลบรารีคอมโพเนนต์ UI ที่ยอดเยี่ยม
- **Vercel** - สำหรับเฟรมเวิร์ก Next.js และแพลตฟอร์มการ deploy
- **Tailwind CSS** - สำหรับเฟรมเวิร์ก CSS แบบ utility-first

## 📞 การสนับสนุน

หากคุณมีคำถามหรือต้องการความช่วยเหลือ:

1. **ตรวจสอบ Issues** - มองหาโซลูชันที่มีอยู่
2. **สร้าง Issue** - รายงานบั๊กหรือขอฟีเจอร์
3. **Discussions** - เข้าร่วมการสนทนาในชุมชน

## 🔮 การพัฒนาในอนาคต

ฟีเจอร์ที่วางแผนไว้สำหรับรุ่นต่อไป:

- 🎵 **เพลงพื้นหลัง** - เครื่องเล่นเพลง Lofi แบบบูรณาการ
- 📋 **การจัดการงาน** - บูรณาการรายการสิ่งที่ต้องทำ
- 📊 **สถิติขั้นสูง** - รายงานรายสัปดาห์และรายเดือน
- 🎨 **ปรับแต่งธีม** - ธีมสีหลากหลาย
- 🔔 **การแจ้งเตือนบนเดสก์ท็อป** - การสนับสนุนการแจ้งเตือนของเบราว์เซอร์
- 💾 **การเก็บข้อมูลถาวร** - บันทึกการตั้งค่าและสถิติ
- 🌐 **รองรับหลายภาษา** - ตัวเลือกภาษาเพิ่มเติม

---

**ขอให้มีประสิทธิภาพในการทำงาน! 🍅✨**
