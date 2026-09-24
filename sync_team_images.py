from pathlib import Path
import shutil

root = Path(r"c:\Users\Mathew\Downloads\TeamE-sjecRacing-main")
source = root / "TeamE-sjecRacing-main" / "images" / "team"
target = root / "images" / "team"

source.mkdir(parents=True, exist_ok=True)
target.mkdir(parents=True, exist_ok=True)

source_files = {p.name for p in source.iterdir() if p.is_file()}
target_files = {p.name for p in target.iterdir() if p.is_file()}

for name in sorted(source_files | target_files):
    src_path = source / name
    tgt_path = target / name
    if src_path.is_file() and not tgt_path.exists():
        shutil.copy2(src_path, tgt_path)
    elif tgt_path.is_file() and not src_path.exists():
        shutil.copy2(tgt_path, src_path)

print(f"source_count={len(list(source.iterdir()))}")
print(f"target_count={len(list(target.iterdir()))}")
print("done")
